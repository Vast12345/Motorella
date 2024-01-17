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
    document.getElementById("create-acc").reset()


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
                products: []
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

    await signUser(signEmail, signPassword);
    document.getElementById("sign-in").reset();

    async function signUser(email, password) {
        const response = await fetch("http://localhost:4500/users", {
            method: "GET",
        })
        const data = await response.json();
        if (localStorage.getItem("myAcc") !== null) {
            return alert("You are already signed in.");
        };
        for(let i = 0; i < data.length; i++) {
            if(data[i].email === email) {
                console.log(data[i]);
                alert("You have signed in successfully");
                localStorage.setItem('myAcc', JSON.stringify(data[i]));
                return window.location.href = "/docs/index.html"
            }
        }
        alert("Incorrect email or password");
    }
    e.stopPropagation();

})