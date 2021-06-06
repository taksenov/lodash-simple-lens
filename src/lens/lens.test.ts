// jest test

import { lens, lensView, lensSet, lensRemove, lensOver } from './lens';
import { LensSetWithCustomizer } from './types';

import {
  initialInfo,
  checkInitialInfo,
  viewResult1,
  viewResult2,
  viewResult3,
  viewResult4,
  viewResult5,
  viewResult6,
  viewResult7,
  viewResultFiction8,
} from './@mock';

const nameLens = lens('name');
const pathLens = lens('a.b[0].c');
const pathLensArr = lens(['a', 'b', '0', 'c']);
const objLens = lens('a.b[0]');
const fictionLens = lens(['a', 'b', '0', 'c', 'd', 'e']);

const upper = (s: unknown): unknown => {
  const res = s as string;
  return res.toUpperCase();
};

describe('lens view functionality', () => {
  it('should get result View', () => {
    expect(
      lensView(nameLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual('Marcus Aurelius');

    expect(
      lensView(pathLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual('VERY IMPORTANT INFORMATION');

    expect(
      lensView(pathLensArr, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual('VERY IMPORTANT INFORMATION');

    expect(
      lensView(objLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual({
      c: 'VERY IMPORTANT INFORMATION',
    });

    expect(
      lensView(fictionLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual(undefined);
  });

  it("should be initial object don't mutable", () => {
    expect(initialInfo).toStrictEqual(checkInitialInfo);
  });
});

describe('lens set functionality', () => {
  it('should get result Set', () => {
    expect(
      lensSet(
        nameLens,
        ['SOME NEW THINGS', 228],
        initialInfo as unknown as LensSetWithCustomizer,
      ),
    ).toStrictEqual(viewResult1);

    expect(
      lensSet(
        nameLens,
        'SOME NEW THINGS',
        initialInfo as unknown as LensSetWithCustomizer,
      ),
    ).toStrictEqual(viewResult2);

    expect(
      lensSet(pathLens, 228, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual(viewResult3);

    expect(
      lensSet(
        pathLensArr,
        ['SOME NEW THINGS', 228],
        initialInfo as unknown as LensSetWithCustomizer,
      ),
    ).toStrictEqual(viewResult4);

    expect(
      lensSet(
        fictionLens,
        ['SOME NEW THINGS', 228],
        initialInfo as unknown as LensSetWithCustomizer,
      ),
    ).toStrictEqual(viewResultFiction8);
  });

  it("should be initial object don't mutable", () => {
    expect(initialInfo).toStrictEqual(checkInitialInfo);
  });
});

describe('lens remove functionality', () => {
  it('should get result from Remove', () => {
    expect(
      lensRemove(nameLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual(viewResult5);

    expect(
      lensRemove(pathLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual(viewResult6);

    expect(
      lensRemove(fictionLens, initialInfo as unknown as LensSetWithCustomizer),
    ).toStrictEqual(initialInfo);
  });

  it("should be initial object don't mutable", () => {
    expect(initialInfo).toStrictEqual(checkInitialInfo);
  });
});

describe('lens over functionality', () => {
  it('should get result from Over', () => {
    expect(
      lensOver(
        nameLens,
        upper,
        initialInfo as unknown as LensSetWithCustomizer,
      ),
    ).toStrictEqual(viewResult7);
  });

  it("should be initial object don't mutable", () => {
    expect(initialInfo).toStrictEqual(checkInitialInfo);
  });
});

describe('lens final check', () => {
  it("should be initial object don't mutable", () => {
    expect(initialInfo).toStrictEqual(checkInitialInfo);
  });
});
