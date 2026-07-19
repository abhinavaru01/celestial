// Quiz engine — renders a level's questions, grades them, gives instant feedback,
// and reports the score back so the Progress engine can update mastery.
import { renderMarkdown } from './md.js';

export function renderQuiz(container, quiz, level, onComplete) {
  const questions = quiz.levels[String(level)] || [];
  container.innerHTML = '';
  const form = document.createElement('form');
  form.className = 'quiz-form';
  form.addEventListener('submit', (e) => e.preventDefault());

  const state = questions.map(() => ({ answered: false, correct: false }));

  questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-q';
    card.innerHTML = `<div class="quiz-prompt"><span class="qnum">Q${idx + 1}</span> ${renderInline(q.prompt)}</div>`;

    const answerArea = document.createElement('div');
    answerArea.className = 'quiz-answer';

    if (q.type === 'mcq') {
      q.choices.forEach((choice, ci) => {
        const id = `${q.id}-${ci}`;
        const label = document.createElement('label');
        label.className = 'choice';
        label.innerHTML = `<input type="radio" name="${q.id}" value="${ci}" id="${id}"> <span>${renderInline(choice)}</span>`;
        answerArea.appendChild(label);
      });
    } else { // numeric
      const wrap = document.createElement('div');
      wrap.className = 'numeric-wrap';
      wrap.innerHTML = `<input type="text" inputmode="decimal" class="numeric-input" name="${q.id}" placeholder="your answer">${q.unit ? `<span class="unit">${q.unit}</span>` : ''}`;
      answerArea.appendChild(wrap);
    }
    card.appendChild(answerArea);

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback hidden';
    card.appendChild(feedback);

    const check = document.createElement('button');
    check.type = 'button';
    check.className = 'btn btn-small check-btn';
    check.textContent = 'Check';
    check.addEventListener('click', () => {
      const res = grade(q, form);
      if (res === null) { feedback.className = 'quiz-feedback show warn'; feedback.textContent = 'Enter an answer first.'; return; }
      state[idx] = { answered: true, correct: res.correct };
      feedback.className = 'quiz-feedback show ' + (res.correct ? 'ok' : 'bad');
      feedback.innerHTML = `<strong>${res.correct ? '✓ Correct' : '✗ Not quite'}</strong> — ${renderInline(q.explanation || '')}`;
      card.classList.add('graded');
      updateScore();
    });
    card.appendChild(check);
    form.appendChild(card);
  });

  const bar = document.createElement('div');
  bar.className = 'quiz-bar';
  const scoreEl = document.createElement('div');
  scoreEl.className = 'quiz-score';
  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'btn';
  submit.textContent = 'Submit level';
  submit.addEventListener('click', () => {
    // grade any unanswered so score reflects the whole level
    questions.forEach((q, idx) => { if (!state[idx].answered) { const r = grade(q, form); state[idx] = { answered: true, correct: r ? r.correct : false }; } });
    const correct = state.filter((s) => s.correct).length;
    const score = questions.length ? correct / questions.length : 0;
    scoreEl.innerHTML = `Score: <strong>${correct}/${questions.length}</strong> (${Math.round(score * 100)}%)`;
    onComplete && onComplete(score, correct, questions.length);
  });
  bar.appendChild(scoreEl);
  bar.appendChild(submit);
  form.appendChild(bar);

  function updateScore() {
    const answered = state.filter((s) => s.answered).length;
    const correct = state.filter((s) => s.correct).length;
    scoreEl.innerHTML = `Answered ${answered}/${questions.length} · ${correct} correct so far`;
  }

  container.appendChild(form);
  updateScore();
}

function grade(q, form) {
  if (q.type === 'mcq') {
    const sel = form.querySelector(`input[name="${q.id}"]:checked`);
    if (!sel) return null;
    return { correct: Number(sel.value) === q.answer };
  } else {
    const input = form.querySelector(`input[name="${q.id}"]`);
    const raw = (input.value || '').trim();
    if (raw === '') return null;
    const val = parseFloat(raw.replace(/[^0-9.\-]/g, ''));
    if (Number.isNaN(val)) return { correct: false };
    const tol = q.tolerance ?? 0;
    return { correct: Math.abs(val - q.answer) <= tol };
  }
}

// tiny inline renderer reuse (strip surrounding <p>) for prompts/choices
function renderInline(text) {
  const h = renderMarkdown(text || '');
  return h.replace(/^<p>/, '').replace(/<\/p>$/, '');
}
