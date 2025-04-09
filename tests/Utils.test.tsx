import { render, screen } from "@testing-library/react-native";
import { getNextDay, getSumm, getUser } from "../utils";

jest.useFakeTimers().setSystemTime(new Date(2025, 3, 9));

describe("getSumm", () => {
    it("returns the sum of two numbers", () => {
        const result = getSumm(1, 2);
        expect(result).toBe(3);
    });

    it("throws an error if second argument is undefined", () => {
        expect(() => getSumm(1, undefined)).toThrow(Error);
    });

    // it.only(...) - skip all except this
    // xit(...) - skip this test
    it("throws an error if first argument is undefined", () => {
        expect(() => getSumm(undefined, 1)).toThrow(Error);
    });

    it("throws a TypeError if arguments are not numbers", () => {
        expect(() => getSumm(1, "2")).toThrow(TypeError);
    });
});

test("getUser works correctly", () => {
    const result = getUser(54);
    expect(result).toEqual({ id: 54, name: "John Doe" });           // ignore undefined
    expect(result).not.toStrictEqual({ id: 54, name: "John Doe" }); // check undefined also
});
test("getNextDay works correctly", () => {
    const result = getNextDay();
    expect(result).toEqual(new Date(2025, 3, 10));
});