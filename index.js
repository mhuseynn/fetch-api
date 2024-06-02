

const btn = document.getElementById("register");

//Register
async function createPost(postData) {
    try {
        const response = await fetch("http://localhost:4000/auth/register", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        alert("error");
    }
}

btn.addEventListener("click", () => {
    const names = document.getElementById("firstname").value;
    const surname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createPost({ firstname: firstname, lastname: lastname, email: email, password: password });
});