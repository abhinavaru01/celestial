// Deep content for math, split by tier. See ./index.mjs for the entry schema.

import F1 from './math/F1.mjs';
import F2 from './math/F2.mjs';
import I1 from './math/I1.mjs';
import I2 from './math/I2.mjs';
import A1 from './math/A1.mjs';
import A2 from './math/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
