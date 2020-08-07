const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("posts").innerHTML = output;
  }, 1000);
}

// function return a Promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    }, 2000);
  });
}

// Simple Promise
createPost({ title: "Post three", body: "this is is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// Promise all

const promise1 = Promise.resolve("Hello World !");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/todos/1"
).then((response) => response.json());
//.then((json) => console.log(json));

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

// Async / Await
async function init() {
  await createPost({ title: "Post Four", body: "this is is post four" });
  getPosts();
}

init();

// Async / Await with Fetch

async function fetchFirstUser() {
  let res = fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();

  console.log(data);
}

fetchFirstUser();
