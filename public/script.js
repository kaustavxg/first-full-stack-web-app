async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await axios.post("http://localhost:8080/signup", {
        username: username,
        password: password
    })
    alert("Signed up successfully");
}

async function signin(){
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const response = await axios.post("http://localhost:8080/signin", {
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
        const response = await axios.get("http://localhost:8080/me", {
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