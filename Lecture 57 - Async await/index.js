async function fetchOneTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Failed to fetch todo");
    const data = await response.json();
    return {
      data: data,
      error: null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: err,
      data: null,
    };
  }
}

async function convertResposneToJson(response) {
  return await response.json();
}

async function fetchNewTodo() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    if (!response.ok) throw new Error("Failed to fetch todo");

    const data = response.json();
  } catch (err) {
    console.log("error", err);
  }
}

async function fetchProduct(productId) {
  try {
    if (typeof productId != "number" || productId < 0) {
      throw new Error("Invalid product ID");
    }
    const todoResponse = await fetchOneTodo();
    if (todoResponse.data) {
      console.log("Todo Response", todoResponse.data);
    }
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (!response.ok) throw new Error("Unable to fetch Product Details");
    console.log(response);
    const data = await convertResposneToJson(response);
    if (!data) throw new Error("Data not fetched");
    console.log(data);
  } catch (err) {
    console.log(err);
    console.log(err.message);
  } finally {
    console.log("This block will always execute");
  }
}

console.log("start");
fetchProduct(10);
console.log("end");

function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 1000ms");
    }, 1000);
  });
}

function f2() {
  return fetch("https://fakestoreapi.com/products/1");
}

function f3() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

async function funcCallWithAsyncAwait() {
  try {
    let f1Response = await f1();
    let f2Response = await f2();
    let f3Resposne = await f3();
    console.log({ f1Response, f2Response, f3Resposne });
  } catch (err) {
    console.log(err);
  }
}

async function funccallWithPromiseAllSettled() {
  const allResponse = await Promise.allSettled([f1(), f2(), f3()]);
  console.log({ allResponse });
}

funcCallWithAsyncAwait();
funccallWithPromiseAllSettled();
