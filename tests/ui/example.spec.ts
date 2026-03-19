import { sampleTestsObject } from './sampleTestObject';
import { execute } from '../utils/utils';
import test, { expect, Locator } from '@playwright/test';

execute('this is sample case suite execution', sampleTestsObject);
