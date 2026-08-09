// Deep content for physics, split by tier. See ./index.mjs for the entry schema.

import F1 from './physics/F1.mjs';
import F2 from './physics/F2.mjs';
import I1 from './physics/I1.mjs';
import I2 from './physics/I2.mjs';
import A1 from './physics/A1.mjs';
import A2 from './physics/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
