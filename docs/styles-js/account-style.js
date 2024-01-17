const lastListItem = document.getElementById("sign-in-link");
const signOut = document.getElementById("sign-out-link");

if (localStorage.getItem("myAcc") !== null) {
    lastListItem.innerHTML = `<i class="fa-regular fa-user"></i>`;
    lastListItem.toggleAttribute('href');
    signOut.innerHTML = "Sign Out";
    signOut.addEventListener("click", () => {
        localStorage.removeItem("myAcc");
        window.location.href = "/docs/HTML/Project-Login.html";
    })
}
