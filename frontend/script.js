async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await axios.post("https://first-full-stack-app.onrender.com/signup", {
        username: username,
        password: password
    })
    alert("Signed up successfully");
}

async function signin(){
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const response = await axios.post("https://first-full-stack-app.onrender.com/signin", {
        username: username,
        password: password
    })

    // storing the token
    localStorage.setItem("token", response.data.token)

    alert("Signed in successfully");
}

async function getInformation(){
    const token = localStorage.getItem("token");

    if(token){
        const response = await axios.get("https://first-full-stack-app.onrender.com/me", {
            headers: {
                token: token
            }
        });
        document.getElementById('information').innerHTML = response.data.username;
    }
}

async function logout(){
    localStorage.removeItem("token")
}