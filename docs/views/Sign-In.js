// import {controller} from "../controller/controller.js"


document.getElementById("create-acc").addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = document.getElementById("create-name").value;
    let email = document.getElementById("create-email").value;
    let password = document.getElementById("create-password").value;

    if (!name || !email || !password) {
        alert("Please fill in all the required fields.");
        return;
    }

    const checkEmail = await checkEmailAvailability(email);
    if (checkEmail) {
        alert("That email is already taken. Please choose another");
        return;
    }

    const newUser = await createUser(name, email, password);
    console.log(newUser);
    alert("New account created successfully");



    // Check if the email is already taken
    async function checkEmailAvailability(email) {
        const response = await fetch("http://localhost:4500/users", {
             method: "GET",
         });

         const data = await response.json();
         for(let i = 0; i < data.length; i++) {
            if(data[i].email === email) {
                console.log(data[i].email)
                return true
            }
         }
     };

    async function createUser(name, email, password) {
        const response = await fetch("http://localhost:4500/users", {
            method: "POST",
            headers: {
                "Content-Type": "applicaiton/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });

        return response.json();
    }
    e.stopPropagation();
})
document.getElementById("sign-in").addEventListener("submit", async (e) => {
    e.preventDefault();
    let signEmail = document.getElementById("sign-email").value;
    let signPassword = document.getElementById("sign-password").value;

    const obtainUser = await findUser(signEmail, signPassword);
    console.table(obtainUser);

    async function findUser(email, password) {
        const response = await fetch("http://localhost:4500/users", {
            method: "GET",
        })

        const data = await response.json();
        for(let i = 0; i < data.length; i++) {
            if(data[i].email === email) {
                return [data[i].email, data[i].password]
            } else {
                alert("Incorrect email or password");
            }
        }
    }
    e.stopPropagation();

})