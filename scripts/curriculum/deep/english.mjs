// Deep content for english, split by tier. See ./index.mjs for the entry schema.

import F1 from './english/F1.mjs';
import F2 from './english/F2.mjs';
import I1 from './english/I1.mjs';
import I2 from './english/I2.mjs';
import A1 from './english/A1.mjs';
import A2 from './english/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
