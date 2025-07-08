// 1. MODULE PATTERN
const ThemeModule = (function () {
    let currentTheme = "light";

    function toggleTheme() {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        console.log("Theme changed to:", currentTheme);
    }

    return {
        toggleTheme,
        getTheme: () => currentTheme
    };
})();

// Usage
ThemeModule.toggleTheme(); // Theme changed to: dark


// 2. SINGLETON PATTERN
const AuthManager = (function () {
    let instance;

    function createInstance() {
        return { isAuthenticated: false };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const auth1 = AuthManager.getInstance();
auth1.isAuthenticated = true;
const auth2 = AuthManager.getInstance();
console.log(auth2.isAuthenticated); // true (same instance)


// 3. OBSERVER PATTERN
class Newsletter {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    notify(article) {
        this.subscribers.forEach(fn => fn(article));
    }
}

// Usage
const news = new Newsletter();
news.subscribe((article) => console.log("User 1 got article:", article));
news.subscribe((article) => console.log("User 2 got article:", article));

news.notify("New JavaScript Feature Released!");


// 4. FACTORY PATTERN
function ButtonFactory(type) {
    if (type === "primary") {
        return { color: "blue", text: "Submit" };
    } else if (type === "danger") {
        return { color: "red", text: "Delete" };
    } else {
        return { color: "gray", text: "Default" };
    }
}

// Usage
const btn1 = ButtonFactory("primary");
const btn2 = ButtonFactory("danger");
console.log(btn1); // { color: "blue", text: "Submit" }


// 5. STRATEGY PATTERN
class FormValidator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    validate(input) {
        return this.strategy(input);
    }
}

const emailStrategy = input => /\S+@\S+\.\S+/.test(input);
const phoneStrategy = input => /^\d{10}$/.test(input);

// Usage
const validator = new FormValidator(emailStrategy);
console.log(validator.validate("test@email.com")); // true


// 6. DECORATOR PATTERN
function addLogging(fn) {
    return function (...args) {
        console.log("Calling function with", args);
        return fn(...args);
    };
}

function greet(name) {
    return `Hello, ${name}`;
}

const loggedGreet = addLogging(greet);
console.log(loggedGreet("Eshaal")); // Logs args + result


// 7. COMMAND PATTERN
class CommandManager {
    constructor() {
        this.history = [];
    }

    execute(command) {
        command.execute();
        this.history.push(command);
    }

    undo() {
        const lastCommand = this.history.pop();
        if (lastCommand && lastCommand.undo) {
            lastCommand.undo();
        }
    }
}

// Commands
const light = {
    on: () => console.log("💡 Light is ON"),
    off: () => console.log("💡 Light is OFF")
};

const lightOnCommand = {
    execute: () => light.on(),
    undo: () => light.off()
};

const manager = new CommandManager();
manager.execute(lightOnCommand); // 💡 Light is ON
manager.undo();                 // 💡 Light is OFF
