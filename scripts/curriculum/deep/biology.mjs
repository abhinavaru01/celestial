// Deep content for biology, split by tier. See ./index.mjs for the entry schema.

import F1 from './biology/F1.mjs';
import F2 from './biology/F2.mjs';
import I1 from './biology/I1.mjs';
import I2 from './biology/I2.mjs';
import A1 from './biology/A1.mjs';
import A2 from './biology/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
