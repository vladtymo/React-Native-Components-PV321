export function getSumm(a, b) {
    if (a === undefined || b === undefined)
        throw new Error("Both arguments must be provided");
    if (typeof a !== "number" || typeof b !== "number")
        throw new TypeError("Both arguments must be numbers");

    return a + b;
}

// getSumm(10); // Error
// getSumm(10, "Arsen"); // TypeError
// getSumm(10, 12); // 22

export function getUser(id) {
    return { id: id, name: "John Doe", salary: undefined };
}

export function getNextDay() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}
