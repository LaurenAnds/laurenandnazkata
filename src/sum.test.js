import { duplicate2 } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("test duplicate2 can duplicate", () => {
    expect(duplicate2(["K", "L"])).toEqual(["K", "K", "L", "L"]);
});

test("duplicate2 can duplicate empty array", () => {
    expect(duplicate2([])).toEqual([]);
});
