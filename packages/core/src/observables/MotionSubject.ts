/** @license
 *  Copyright 2016 - present The Material Motion Authors. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License. You may obtain a copy
 *  of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations
 *  under the License.
 */

import {
  MotionObservable,
} from '../observables';

// ObservableWithMotionOperators isn't referenced in this file, but TypeScript
// gets mad if you remove it. (MotionSubject is using MotionDebounceable from an
// external module)
import {
  ObservableWithMotionOperators,
  withMotionOperators,
} from '../operators';

import {
  IndefiniteSubject,
} from './IndefiniteSubject';

import {
  fulfillProxies,
} from './fulfillProxies';

export interface MotionSubject<T> extends IndefiniteSubject<T>, ObservableWithMotionOperators<T> {}
export const MotionSubject = withMotionOperators(IndefiniteSubject);
export default MotionSubject;

// See explanation in `./proxies`
try {
  fulfillProxies();
} catch (error) {}
