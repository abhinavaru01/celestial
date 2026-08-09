// Deep content for cs, split by tier. See ./index.mjs for the entry schema.

import F1 from './cs/F1.mjs';
import F2 from './cs/F2.mjs';
import I1 from './cs/I1.mjs';
import I2 from './cs/I2.mjs';
import A1 from './cs/A1.mjs';
import A2 from './cs/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
