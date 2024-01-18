
export async function checkOut(acc) {
    const response = await fetch(`http://localhost:4500/users/${acc.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "applicaiton/json",
        },
        body: JSON.stringify({
            "products": acc.products
        }),
    });

    return await response.json();
}