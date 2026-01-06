// How JavaScript Engine Runs JS in Browser
// Browser has a JavaScript Engine (Chrome → V8, Firefox → SpiderMonkey).
// JS is single-threaded → executes one task at a time.

// Steps:
// JS code is parsed.
// Code is compiled (JIT – Just In Time).
// Code is executed inside an Execution Context.
// Engine works with:
// Memory Heap → stores variables & functions.
// Call Stack → manages execution order.

// 2️⃣ Execution Context (EC)
// An Execution Context is the environment where JS code is evaluated and executed.
// Types of Execution Context
// Global Execution Context (GEC)
// Function Execution Context (FEC)
// Eval Execution Context (rare, avoid eval())

// 3️⃣ Phases of Execution Context
// Every EC is created in two phases:
// 🔹 1. Memory Creation Phase (Hoisting Phase)
// this keyword is created.
// Memory allocated to:
// Variables → undefined
// Functions → full function definition
// Hoisting happens here.

// 🔹 2. Execution Phase
// Code runs line by line.
// Variables get actual values.
// Functions are executed.

// 4️⃣ Call Stack in JavaScript
// Call Stack is a LIFO (Last In, First Out) data structure.
// It keeps track of which function is currently running.
// When a function is called → pushed to stack.
// When execution ends → popped from stack.

// 📌 Stack overflow happens when stack exceeds limit (e.g., infinite recursion).

// 5️⃣ Global Execution Context (GEC)
// Created once when the JS file starts running.
// Contains:
// Global variables
// Global functions
// window object (in browser)
// this === window
// Always at the bottom of call stack.

// 6️⃣ Function Execution Context (FEC)
// Created every time a function is called.
// Has its own:
// Memory
// Variables
// Arguments
// Destroyed after function execution completes