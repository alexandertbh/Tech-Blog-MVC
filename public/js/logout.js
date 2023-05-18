const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    // console.log("response:", myMiddleware,(req, res))
    if (response.ok) {
      location.href = "/login";
    } else {
      next();
    }
  } catch (err) {}
});
