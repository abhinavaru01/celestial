// Progress / mastery engine for Project Compression.
// Implements the rules in docs/curriculum/mastery-gating.md.
// Storage is behind a small interface so a sync backend can replace localStorage
// later with zero changes to content or UI (decisions.md#d-001, #d-004).

const KEY = 'pc.progress.v1';
const MASTERY_THRESHOLD = 0.8; // Level-3 score to master a topic
const GATE_THRESHOLD = 0.75;   // gate exam pass mark

const Storage = {
  load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { topics: {}, gates: {} }; }
    catch { return { topics: {}, gates: {} }; }
  },
  save(state) { localStorage.setItem(KEY, JSON.stringify(state)); },
  reset() { localStorage.removeItem(KEY); },
};

// spaced-repetition intervals (days) after mastery
const SR_INTERVALS = [1, 3, 7, 16, 35];

export const Progress = {
  state: Storage.load(),

  _topic(id) {
    if (!this.state.topics[id]) {
      this.state.topics[id] = {
        topicId: id, status: 'not_started', levelScores: {}, attempts: [],
        retentionConfidence: null, lastReviewedAt: null, nextReviewDue: null, srIndex: 0,
      };
    }
    return this.state.topics[id];
  },

  get(id) { return this.state.topics[id] || null; },

  // Record a completed quiz attempt at a given level (score 0..1).
  recordAttempt(id, level, score) {
    const t = this._topic(id);
    const now = new Date().toISOString();
    t.attempts.push({ level: Number(level), score, at: now });
    const prev = t.levelScores[level] ?? 0;
    if (score > prev) t.levelScores[level] = score;
    if (t.status === 'not_started') t.status = 'in_progress';

    if (Number(level) === 3 && (t.levelScores['3'] ?? 0) >= MASTERY_THRESHOLD) {
      if (t.status !== 'mastered') { t.status = 'mastered'; t.srIndex = 0; }
      t.lastReviewedAt = now;
      t.retentionConfidence = 1;
      t.nextReviewDue = addDays(now, SR_INTERVALS[0]);
    }
    Storage.save(this.state);
    return t;
  },

  // Mark a spaced-review as done, advancing the interval.
  recordReview(id) {
    const t = this._topic(id);
    const now = new Date().toISOString();
    t.lastReviewedAt = now;
    t.srIndex = Math.min((t.srIndex ?? 0) + 1, SR_INTERVALS.length - 1);
    t.retentionConfidence = 1;
    t.nextReviewDue = addDays(now, SR_INTERVALS[t.srIndex]);
    Storage.save(this.state);
    return t;
  },

  isMastered(id) { return this.get(id)?.status === 'mastered'; },

  // A topic is available when all prereqs are mastered.
  availability(id, prereqs) {
    const missing = (prereqs || []).filter((p) => !this.isMastered(p));
    return { available: missing.length === 0, locked: missing.length > 0, missing };
  },

  // Topics due for spaced review right now.
  dueForReview(now = new Date()) {
    return Object.values(this.state.topics)
      .filter((t) => t.status === 'mastered' && t.nextReviewDue && new Date(t.nextReviewDue) <= now)
      .map((t) => t.topicId);
  },

  // Gate readiness: all core topics of the sub-level mastered.
  gateReadiness(gateId, coreTopicIds) {
    const remaining = coreTopicIds.filter((id) => !this.isMastered(id));
    return { ready: remaining.length === 0, remaining, total: coreTopicIds.length, mastered: coreTopicIds.length - remaining.length };
  },

  recordGateAttempt(gateId, score, weakObjectives = []) {
    if (!this.state.gates[gateId]) this.state.gates[gateId] = { gateId, passed: false, bestScore: 0, attempts: [], weakObjectives: [] };
    const g = this.state.gates[gateId];
    g.attempts.push({ score, at: new Date().toISOString() });
    if (score > g.bestScore) g.bestScore = score;
    if (score >= GATE_THRESHOLD) { g.passed = true; g.weakObjectives = []; }
    else g.weakObjectives = weakObjectives;
    Storage.save(this.state);
    return g;
  },

  gate(gateId) { return this.state.gates[gateId] || null; },

  summary(topics) {
    const total = topics.length;
    const mastered = topics.filter((t) => this.isMastered(t.id)).length;
    const inProgress = topics.filter((t) => this.get(t.id)?.status === 'in_progress').length;
    return { total, mastered, inProgress, pct: total ? Math.round((mastered / total) * 100) : 0 };
  },

  reset() { Storage.reset(); this.state = Storage.load(); },
};

function addDays(iso, days) {
  const d = new Date(iso); d.setDate(d.getDate() + days); return d.toISOString();
}

export const CONFIG = { MASTERY_THRESHOLD, GATE_THRESHOLD };
