import React from "react"

export default function AuthForm() {
    const [isLogin, setIsLogin] = React.useState(true);
    return(
        <div className ="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
                        login
                    </button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
                        register
                    </button>
                </div>
                {isLogin ? <>
                <div className = "form">
                    <h2>Login form</h2>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <a href="#">Forget password</a>
                    <button>Login</button>
                    <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>Register here</a></p>
                    
                </div>
                     </>: <>
                     <div className = "form">
                        <h2>Register form</h2>
                        <input type="text" placeholder="username"></input>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <input type="password" placeholder="confirm password"></input>
                        <button>Register</button>
                        <p>Already a member? <a href="#" onClick={() => setIsLogin(true)}>Login here</a></p>
                    </div>
                     </> }
            </div>
        </div>
    )
}
