import {controller} from "../controller/controller.js"

const form = document.querySelector("form");

form.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        console.log(email, password)

        fetch("http://0.0.0.0:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error("AN ERROR OCCURRED: " + error)
        })
        .finally(
            console.log("The operation has finished")
        )
    }
    

    e.stopPropagation();
})