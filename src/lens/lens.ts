import get from 'lodash/get';
import set from 'lodash/set';
import unset from 'lodash/unset';
import curry from 'lodash/curry';
import cloneDeep from 'lodash/cloneDeep';

import { LensInstance, LensSetWithCustomizer } from './types';

/**
 * Immutable _.unset
 *
 * @param {LensSetWithCustomizer} obj
 * @param {string | string[]} path
 * @param {unknown} val
 */
const unsetImmutable = curry(
  (obj: LensSetWithCustomizer, path: string | string[]) => {
    const clonedObj = cloneDeep(obj);
    unset(clonedObj, path);
    return clonedObj;
  },
);

/**
 * Immutable _.set
 *
 * @param {LensSetWithCustomizer} obj
 * @param {string | string[]} path
 * @param {unknown} val
 */
const setImmutable = (
  obj: LensSetWithCustomizer,
  path: string | string[],
  value: unknown,
) => set(cloneDeep(obj), path, value);

/**
 * Immutable view
 *
 * Usage:
 * ```ts
 * const person = {
 *   name: 'Marcus Aurelius',
 *   city: 'Rome',
 *   born: 121,
 * };
 * const nameLens = lens('name');
 * console.log('view name:', lensView(nameLens, person));
 * ```
 *
 * @param {LensInstance} lens
 * @param {LensSetWithCustomizer} obj
 */
export const lensView = (lens: LensInstance, obj: LensSetWithCustomizer) =>
  lens.get(obj);

/**
 * Immutable set
 *
 * Usage:
 * ```ts
 * const person = {
 *   name: 'Marcus Aurelius',
 *   city: 'Rome',
 *   born: 121,
 * };
 * const nameLens = lens('name');
 * console.log('set name:', lensSet(nameLens, 'Marcus', person));
 * ```
 *
 * @param {LensInstance} lens
 * @param {unknown} val
 * @param {LensSetWithCustomizer} obj
 */
export const lensSet = (
  lens: LensInstance,
  val: unknown,
  obj: LensSetWithCustomizer,
) => lens.set(val, obj);

/**
 * Immutable over
 *
 * Usage:
 * ```ts
 * const person = {
 *   name: 'Marcus Aurelius',
 *   city: 'Rome',
 *   born: 121,
 * };
 * const upper = (s) => s.toUpperCase();
 * const nameLens = lens('name');
 * console.log('over name:', lensOver(nameLens, upper, person));
 * ```
 *
 * @param {LensInstance} lens
 * @param {(params: unknown) => void} map
 * @param {LensSetWithCustomizer} obj
 */
export const lensOver = (
  lens: LensInstance,
  map: (params: unknown) => unknown,
  obj: LensSetWithCustomizer,
) => lens.set(map(lens.get(obj)), obj);

/**
 * Immutable remove
 *
 * Usage:
 * ```ts
 * const person = {
 *   name: 'Marcus Aurelius',
 *   city: 'Rome',
 *   born: 121,
 * };
 * const upper = (s) => s.toUpperCase();
 * const exampleLens = lens('name');
 * console.log('remove name:', lensRemove(exampleLens, person));
 *
 * @param {LensInstance} lens
 * @param {LensSetWithCustomizer} obj
 */
export const lensRemove = (lens: LensInstance, obj: LensSetWithCustomizer) =>
  lens.delete(obj);

/**
 * Lens
 *
 * IDEA: https://github.com/HowProgrammingWorks/Lenses
 *
 * Usage:
 * ```ts
 * const person = {
 *   name: 'Marcus Aurelius',
 *   city: 'Rome',
 *   born: 121,
 *   a: {
 *     b: [{ c: 'VERY IMPORTANT INFORMATION' }],
 *   },
 * };
 * const nameLens = lens('name');
 * const viiLens = lens('a.b[0].c');
 * const viiArrPathLens = lens(['a', 'b', '[0]', 'c');
 * const renameLens = lens('name', 'personName');
 * ```
 *
 * @param {string} source
 * @param {*} [destination=source]
 * @returns {LensInstance}
 */
export const lens = (
  source: string | string[],
  destination = source,
): LensInstance => ({
  get: (obj) => get(obj, source),
  set: (val, obj) => setImmutable(obj, destination, val),
  delete: (obj) => unsetImmutable(obj, destination),
});
