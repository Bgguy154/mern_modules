// Here’s a **clean, interview-ready summary** of all of them 👇
// ---
// ## 1. Call Stack
// * A **LIFO (Last In, First Out)** stack.
// * Keeps track of **currently executing functions**.
// * When a function is called → pushed to stack
//   When it returns → popped from stack.
// * JS is **single-threaded**, so only **one call stack** exists.
// 📌 If the stack is busy, nothing else executes.
// ---

// ## 2. Web APIs
// * Provided by the **browser**, not JavaScript itself.
// * Handle **asynchronous tasks** in the background.
// * Examples:
//   * `setTimeout`
//   * `setInterval`
//   * `fetch`
//   * DOM events (`click`, `scroll`)
// * Once completed, results are sent to a queue.
// 📌 This is how JS stays non-blocking.
// ---

// ## 3. Task Queue (Callback / Macrotask Queue)
// * Stores **macrotasks**.
// * Examples:
//   * `setTimeout`
//   * `setInterval`
//   * DOM events
// * Tasks wait here until:
//   * Call stack is empty
//   * Microtask queue is empty
// 📌 Lower priority than microtasks.
// ---

// ## 4. Microtask Queue
// * Stores **microtasks** (higher priority).
// * Examples:
//   * `Promise.then / catch / finally`
//   * `queueMicrotask`
//   * `MutationObserver`
// * Executed **immediately after call stack is empty**, before task queue.
// 📌 Always drained completely before moving to task queue.

// ---
// ## 5. Event Loop
// * The **orchestrator**.
// * Continuously checks:
//   1. Is call stack empty?
//   2. If yes → run all microtasks
//   3. If microtask queue empty → pick one task from task queue
// * Repeats this cycle forever.
// 📌 This is how async code works in single-threaded JS.

// ---
// ## Execution Order (Most Important Rule)
// ```
// Call Stack
// → Microtask Queue
// → Task Queue
// ```
// ---
// ## Quick Example
// ```j
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");
// ```
// ### Output:

// ```
// A
// D
// C
// B
// ```

// **Why?**
// 1. `A`, `D` → Call stack
// 2. `C` → Microtask queue
// 3. `B` → Task queue
// ---

// ## One-Line Memory Trick 🧠
// > **Stack first, Promises next, Timers last**

