/** Init */
export const initialInfo = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: 121,
  a: {
    b: [
      {
        c: 'VERY IMPORTANT INFORMATION',
      },
    ],
  },
};

/** Etalon for cheks */
export const checkInitialInfo = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: 121,
  a: {
    b: [
      {
        c: 'VERY IMPORTANT INFORMATION',
      },
    ],
  },
};

/** Result for the checks immutable lens actons */
export const viewResult1 = {
  ...initialInfo,
  name: ['SOME NEW THINGS', 228],
};

/** Result for the checks immutable lens actons */
export const viewResult2 = {
  ...initialInfo,
  name: 'SOME NEW THINGS',
};

/** Result for the checks immutable lens actons */
export const viewResult3 = {
  ...initialInfo,
  a: {
    b: [
      {
        c: 228,
      },
    ],
  },
};

/** Result for the checks immutable lens actons */
export const viewResult4 = {
  ...initialInfo,
  a: {
    b: [
      {
        c: ['SOME NEW THINGS', 228],
      },
    ],
  },
};

/** Result for the checks immutable lens actons */
export const viewResult5 = {
  city: 'Rome',
  born: 121,
  a: {
    b: [
      {
        c: 'VERY IMPORTANT INFORMATION',
      },
    ],
  },
};

/** Result for the checks immutable lens actons */
export const viewResult6 = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: 121,
  a: {
    b: [{}],
  },
};

/** Result for the checks immutable lens actons */
export const viewResult7 = {
  ...initialInfo,
  name: 'MARCUS AURELIUS',
};

/** Result for the checks immutable lens actons */
export const viewResultFiction8 = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: 121,
  a: {
    b: [
      {
        c: {
          d: {
            e: ['SOME NEW THINGS', 228],
          },
        },
      },
    ],
  },
};
