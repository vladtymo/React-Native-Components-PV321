export function getSumm(a, b) {
    if (a === undefined || b === undefined)
        throw new Error("Both arguments must be provided");
    if (typeof a !== "number" || typeof b !== "number")
        throw new TypeError("Both arguments must be numbers");
    if (b === 0)
        throw new Error("Second argument cannot be zero");

    return a + b;
}
export function getUser(id) {
    return { id: id, name: "John Doe" };
}

export function getNextDay() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}
