// document.querySelector("#delete").addEventListener("delete", async (event) => {
//   event.preventDefault();
//   const postId = document.querySelector("#delete").dataset.id;
//   console.log("=====\n\nTEST\n\n\n======");
//   console.log("postId:", postId);
//   const response = await fetch(`/api/posts/${postId}`, {
//     method: "DELETE",
//     body: JSON.stringify(postObj),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const postData = await response.json();
//   const id = postData.id;
//   if (response.ok) {
//     location.href = `/`;
//   } else {
//     alert("You have an error");
//   }
// });

const completeBtns = document.querySelectorAll(".deleteButton");

completeBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("===\n\n\ntest\n\n\n===");
    event.preventDefault();
    const postId = document.querySelector("#delete").dataset.id;
    console.log("postId:", postId);
    const response = fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.reload();
  });
});
