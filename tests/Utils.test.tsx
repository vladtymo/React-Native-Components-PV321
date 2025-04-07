import { render, screen } from "@testing-library/react-native";
import { getSumm, getUser } from "../utils";

describe("getSumm", () => {
    it("returns the sum of two numbers", () => {
        const result = getSumm(1, 2);
        expect(result).toBe(3);
    });

    it("throws an error if one argument is undefined", () => {
        expect(() => getSumm(1, undefined)).toThrow(Error);
    });

    it("throws a TypeError if arguments are not numbers", () => {
        expect(() => getSumm(1, "2")).toThrow(TypeError);
    });

    it("throws an error if the second argument is zero", () => {
        expect(() => getSumm(1, 0)).toThrow(Error);
    });
});

test("getUser works correctly", () => {
    const result = getUser(54);
    expect(result).toEqual({ id: 54, name: "John Doe" }); // ignore undefined
    expect(result).toStrictEqual({ id: 54, name: "John Doe" });
});
test("getNextDay works correctly", () => {
    const result = getUser(54);
    expect(result).toEqual({ id: 54, name: "John Doe" }); // ignore undefined
    expect(result).toStrictEqual({ id: 54, name: "John Doe" });
});