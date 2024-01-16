import {controller} from "../controller/controller.js"

const form = document.querySelector("form");

form.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        console.log(form);
        controller(form, e);
    }
    

    e.stopPropagation();
})