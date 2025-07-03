// =============== BASIC OOP CONCEPTS ===============
class User {
    #password = "secret"; // Private class field (encapsulation)

    constructor(name, age) {
        this.name = name; // Instance property
        this.age = age;
    }

    printInfo() { // Instance method
        console.log("Name is " + this.name + " and age is " + this.age);
    }

    get Password() { // Getter accessor
        return this.#password;
    }

    set Password(newPassword) { // Setter accessor with validation
        if (newPassword.length >= 6) {
            this.#password = newPassword;
        } else {
            console.log("Password must be at least 6 characters long.");
        }
    }
}

const u1 = new User("Eshaal", 20); // Class instantiation
u1.printInfo();
u1.Password = "newPassword"; // Using setter
console.log(u1.Password); // Using getter
console.log(u1 instanceof User); // Instance type checking
console.log(u1 instanceof Object); // Prototype chain check


// =============== INHERITANCE & POLYMORPHISM ===============
class Admin extends User { // Class inheritance
    constructor(name, age, role) {
        super(name, age); // Super constructor call
        this.role = role;
    }

    printInfo() { // Method overriding
        super.printInfo(); // Super method call
        console.log("Role is " + this.role);
    }

    greet() { // Subclass-specific method
        console.log("Hello, " + this.name + "! Welcome to the admin panel.");
    }
}

class Developer extends User {
    constructor(name, age) {
        super(name, age);
        this.role = "Developer";
    }

    printInfo() { // Polymorphic method
        super.printInfo();
        console.log("Role is " + this.role);
    }

    greet() { // Subclass-specific method
        console.log("Hello, " + this.name + "! Welcome to the developer panel.");
    }
}

const person = [ // Polymorphic array
    new Admin("Eshaal", 20, "Admin"),
    new Developer("Kaneez", 22)
];

person.forEach(p => { // Polymorphic method calls
    p.printInfo();
    p.greet();
});


// =============== PROTOTYPE CHAIN ===============
const proto = { // Prototype object
    greet() {
        console.log("Hello");
    }
};

const obj = Object.create(proto); // Prototypal inheritance
obj.greet(); // Delegated method call

// =============== MIXIN ===============
const TimestampMixin = { // Mixin object
    addTimestamp() {
        this.timestamp = new Date();
    }
};
// =============== ABSTRACT CLASS PATTERN ===============
class Document { // Abstract class simulation
    constructor(title) {
        if (new.target === Document) { // Prevent direct instantiation
            console.log("Cannot instantiate abstract class");
        }
        this.title = title;
    }

    get info() { // Concrete getter
        return this.title;
    }

    process() { // Abstract method (requires override)
        console.log("Must override process()");
    }
}

class PDFDocument extends Document {
    #pages; // Private field

    constructor(title, pages) {
        super(title);
        this.#pages = pages;
    }

    get pageCount() { // Getter for private field
        return this.#pages;
    }

    process() { // Concrete implementation
        return `Processing PDF: ${this.title} (${this.#pages} pages)`;
    }
}

class WordDocument extends Document {
    constructor(title, wordCount) {
        super(title);
        this.wordCount = wordCount;
    }

    process() { // Concrete implementation
        return `Processing Word: ${this.title} (${this.wordCount} words)`;
    }
}


// =============== COMPOSITION ===============
class Printer { // Independent class
    print(doc) { // Uses Document interface
        console.log(">>", doc.process());
    }
}


// =============== SINGLETON + DEPENDENCY INJECTION ===============
let instance = null; // Singleton controller

class DocumentProcessor {
    constructor(printer) { // Dependency injection
        if (!instance) { // Singleton enforcement
            this.printer = printer;
            instance = this;
        }
        return instance;
    }

    run(documents) { // Processing method
        documents.forEach(doc => {
            if (typeof doc.addTimestamp === "function") doc.addTimestamp(); // Mixin check
            this.printer.print(doc); // Composition
        });
    }
}


// =============== FACTORY PATTERN ===============
function createDoc(type, ...args) { // Factory function
    if (type === "pdf") return Object.assign(new PDFDocument(...args), TimestampMixin); // Mixin application
    if (type === "word") return Object.assign(new WordDocument(...args), TimestampMixin);
    throw new Error("Unsupported doc type");
}

const docs = [ // Document collection
    createDoc("pdf", "Resume", 3),
    createDoc("word", "Report", 1200)
];

const printer = new Printer();
const processor = new DocumentProcessor(printer); // Dependency injection
processor.run(docs); // Execute processing


// =============== STATIC METHODS & PROPERTIES ===============
class Utils {
    static version = "1.0.0"; // Static property

    static logInfo(message) { // Static method
        console.log(`[INFO]: ${message}`);
    }
}

Utils.logInfo("Utility class loaded"); // Static method call
console.log(Utils.version); // Static property access


// =============== ASSOCIATION ===============
// User 'has a' profile - no ownership
class Profile { // Independent class
    constructor(bio, website) {
        this.bio = bio;
        this.website = website;
    }

    show() {
        console.log(`Bio: ${this.bio}, Website: ${this.website}`);
    }
}

class Blogger {
    constructor(name, profile) {
        this.name = name;
        this.profile = profile; // Association relationship
    }

    display() {
        console.log(`${this.name}'s Profile:`);
        this.profile.show(); // Delegated call
    }
}

const profile = new Profile("I love JS", "https://eshaal.dev");
const blogger = new Blogger("Eshaal", profile);
blogger.display();


// =============== AGGREGATION ===============
// Organization uses multiple Employees (employees exist independently)
class Employee { // Independent class
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}
class Organization {
    constructor() {
        this.employees = []; // Aggregation container
    }

    addEmployee(emp) { // Add to aggregation
        this.employees.push(emp);
    }

    run() {
        this.employees.forEach(emp => emp.work()); // Delegated calls
    }
}
const org = new Organization();
const emp1 = new Employee("Ali");
const emp2 = new Employee("Kaneez");

org.addEmployee(emp1);
org.addEmployee(emp2);
org.run();
// =============== METHOD CHAINING ===============
class ChainExample {
    setName(name) {
        this.name = name;
        return this; // Enable chaining
    }
    setAge(age) {
        this.age = age;
        return this; // Enable chaining
    }
    introduce() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
        return this; // Enable chaining
    }
}

new ChainExample().setName("Eshaal").setAge(20).introduce(); // Method chaining


// =============== INTERFACE-LIKE BEHAVIOR (Duck Typing) ===============
function renderComponent(component) { // Duck typing check
    if (typeof component.render === "function") { // Interface simulation
        component.render();
    } else {
        console.log("Component must implement render()");
    }
}

class Button {
    render() { // Required interface method
        console.log("Rendering button...");
    }
}

class Label {
    render() { // Required interface method
        console.log("Rendering label...");
    }
}

renderComponent(new Button()); // Polymorphic call
renderComponent(new Label());