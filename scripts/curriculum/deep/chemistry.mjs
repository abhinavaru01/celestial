// Deep content for chemistry, split by tier. See ./index.mjs for the entry schema.

import F1 from './chemistry/F1.mjs';
import F2 from './chemistry/F2.mjs';
import I1 from './chemistry/I1.mjs';
import I2 from './chemistry/I2.mjs';
import A1 from './chemistry/A1.mjs';
import A2 from './chemistry/A2.mjs';

export default { ...F1, ...F2, ...I1, ...I2, ...A1, ...A2 };
