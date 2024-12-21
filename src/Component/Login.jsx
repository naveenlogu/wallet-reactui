import { useEffect, useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("") // react hooks 
    const [password, setPassword] = useState("")



    const validate = async () => {
        console.log(username, password)

        if (username === "" && password === "") {
            console.log("Enter valid username and password")
            alert("Enter valid username and password")
        }
        const apiurl = "https://localhost:7229/api/Auth/login";
        const requestData = {
            username, password,
        };
        try {
            const response = await fetch(apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error("Invalid login credentials");
            }

            const data = await response.json();
            console.log("Login successful:", data);

            alert("Login successful!");

        }
        catch (error) {
            console.error("Login failed:", error);
            //setError(error.message || "Something went wrong");
        }
    }


    return (
        <div>
            <div>
                <h4>UserName :-</h4>
                <input placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <   h4>Password :-</h4>
                <input placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={validate} >Login</button>
        </div>
    )
}

export default LoginPage;