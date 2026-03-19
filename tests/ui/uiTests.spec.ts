import { execute } from '../utils/utils';
import { sampleTestsObject } from './sampleTestObject';

for (let i = 0; i < 100; i++) {
  execute('UI Test Suite' + i, sampleTestsObject);
}
