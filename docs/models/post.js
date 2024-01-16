// export function post(url, object) {
//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(object)
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//         })
//         .catch((error) => {
//             console.error("An error occurred: " + error)
//         })
//         .finally(console.log("The operation has finished"))
// }
export async function post(object) {
    const url = "https://turbo-giggle-x5wx6rrp6r9936wxg-3000.app.github.dev/users";

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(object)
    }

    try {
        let petition = await fetch(url, config);
        let data = await petition.text();
        console.log(data)
    } catch (error) {
        console.error("Error POST." + error)
    }
}
