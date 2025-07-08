// Debounce function
function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let lastCall = 0;
    return function () {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func();
        }
    };
}

// Debounced search
function performSearch() {
    console.log("🔍 Searching for input...");
}
const debouncedInput = debounce(performSearch, 500);
document.getElementById("search").addEventListener("input", debouncedInput);

// Throttled scroll
function handleScroll() {
    console.log("🌀 Scroll event fired");
}
const throttledScroll = throttle(handleScroll, 300);
window.addEventListener("scroll", throttledScroll);
