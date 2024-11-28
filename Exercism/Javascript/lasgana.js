/** Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner! In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook. You have four tasks related to the time spent cooking the lasagna.

1. Define the expected oven time in minutes
2. Calculate the remaining oven time in minutes
3. Calculate the preparation time in minutes
4. Calculate the total working time in minutes

*/

export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfLayers) {
    return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    const preparationTime = preparationTimeInMinutes(numberOfLayers);
    return preparationTime + actualMinutesInOven;
}

// expect(totalTimeInMinutes(1, 5)).toBe(7);
// expect(totalTimeInMinutes(4, 15)).toBe(23);
// expect(totalTimeInMinutes(1, 30)).toBe(32);