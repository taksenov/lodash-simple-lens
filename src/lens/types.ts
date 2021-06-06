import { SetWithCustomizer } from 'lodash';

export type LensSetWithCustomizer = SetWithCustomizer<<T>(value: T) => T>;

export interface LensInstance {
  /** Getter */
  get: (obj: LensSetWithCustomizer) => unknown;
  /** Setter */
  set: (val: unknown, obj: LensSetWithCustomizer) => LensSetWithCustomizer;
  /** Delete */
  delete: (obj: LensSetWithCustomizer) => LensSetWithCustomizer;
}
