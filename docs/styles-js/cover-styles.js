const button = document.querySelector(".activate-slide");
let slideActivity = 0;
const mediaQuery = window.matchMedia('(max-width: 510px)');
mediaQuery.addListener((media) => {
    if (media.matches) {
        document.getElementById("color-container").style.top = "100%";
        document.getElementById("color-container").style.right = "0";
    } else if (!media.matches) {
        document.getElementById("color-container").style.top = "auto";
        document.getElementById("color-container").style.right = "0";
    }
})

button.addEventListener("click", () => {
    const mediaQuerymin = window.matchMedia('(max-width: 510px)');

    if (mediaQuerymin.matches) {
        if (slideActivity === 0) {
            document.getElementById("color-container").style.top = "0";
            document.getElementById("color-container").style.borderRadius = "0px 0px 50px 50px";
            document.getElementById("cover-text-h1").innerHTML = "Already have an account?"
            document.getElementById("cover-text-h2").innerHTML = "Sign in!"
            document.querySelector(".activate-slide").innerHTML = "Sign In"
            slideActivity = 1;

        } else if (slideActivity === 1) {

            document.getElementById("color-container").style.top = "100%";
            document.getElementById("color-container").style.borderRadius = "50px 50px 0px 0px";
            document.getElementById("cover-text-h1").innerHTML = "Dont have an account?"
            document.getElementById("cover-text-h2").innerHTML = "Create One!"
            document.querySelector(".activate-slide").innerHTML = "Create Account"
            slideActivity = 0;
        }
    } else {
        if (slideActivity === 0) {
            document.getElementById("color-container").style.right = "50%";
            document.getElementById("color-container").style.borderRadius = "0px 50px 50px 0px";
            document.getElementById("cover-text-h1").innerHTML = "Already have an account?"
            document.getElementById("cover-text-h2").innerHTML = "Sign in!"
            document.querySelector(".activate-slide").innerHTML = "Sign In"
            slideActivity = 1;

        } else if (slideActivity === 1) {

            document.getElementById("color-container").style.right = "0";
            document.getElementById("color-container").style.borderRadius = "50px 0px 0px 50px";
            document.getElementById("cover-text-h1").innerHTML = "Dont have an account?"
            document.getElementById("cover-text-h2").innerHTML = "Create One!"
            document.querySelector(".activate-slide").innerHTML = "Create Account"
            slideActivity = 0;
        }
    }
});