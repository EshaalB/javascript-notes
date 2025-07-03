
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 18) throw new ValidationError("Underage");
}

try {
    validateAge(15);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
