import React from "react";
import "./login.css";
import Footer from "../footer/Footer";
function Login() {
    /**
     * 
     * 
     * const eyeClick = document.querySelector("[data-password]");
    const password_elem = document.getElementById("password");

    eyeClick.onclick = () => {
        const icon = eyeClick.children[0];
        icon.classList.toggle("fa-eye-slash");
        if (password_elem.type === "password") {
            password_elem.type = "text";
        } else if (password_elem.type === "text") {
            password_elem.type = "password";
        }
    };
     */
    const [isLogin, changeIsLogin] = React.useState(true);
    return (
        <>
            <div className={!isLogin ? "login log " : "login sing"}>
                <main className="signup-container">
                    <h1 className="heading-primary">
                        {isLogin ? "Se Connecter" : "S'inscrire "}
                        <span className="span-blue">.</span>
                    </h1>
                    <p className="text-mute">
                        Saisissez vos identifiants pour{" "}
                        {isLogin ? "accéder à" : "créer"} votre compte.
                    </p>
                    <div className="login-wrapper">
                        <a href="#" className="btn btn-google">
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />
                            {isLogin
                                ? "Connectez-vous avec Google"
                                : "Inscrivez-vous avec Google"}
                        </a>
                        <div className="line-breaker">
                            <span className="line"></span>
                            <span>or</span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <form className="signup-form">
                        {!isLogin ? (
                            <label className="inp">
                                <input
                                    type="text"
                                    className="input-text"
                                    placeholder="&nbsp;"
                                ></input>
                                <span className="label">Username</span>
                                <span className="input-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                            </label>
                        ) : (
                            ""
                        )}
                        <label className="inp">
                            <input
                                type="email"
                                className="input-text"
                                placeholder="&nbsp;"
                            ></input>
                            <span className="label">Email</span>
                            <span className="input-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                        </label>
                        <label className="inp">
                            <input
                                type="password"
                                className="input-text"
                                placeholder="&nbsp;"
                                id="password"
                            ></input>
                            <span className="label">Password</span>
                            <span
                                className="input-icon input-icon-password"
                                data-password
                            >
                                <i className="fa-solid fa-eye"></i>
                            </span>
                        </label>
                        {!isLogin ? (
                            <label className="inp">
                                <input
                                    type="password"
                                    className="input-text"
                                    placeholder="&nbsp;"
                                    id="password"
                                ></input>
                                <span className="label">Confirm Password</span>
                                <span
                                    className="input-icon input-icon-password"
                                    data-password
                                >
                                    <i className="fa-solid fa-eye"></i>
                                </span>
                            </label>
                        ) : (
                            ""
                        )}
                        <button className="btn btn-login">
                            {" "}
                            {isLogin ? "Se Connecter" : "S'inscrire "}
                        </button>
                    </form>
                    <p className="text-mute">
                        Not a member?{" "}
                        <span
                            className="a"
                            onClick={() => {
                                changeIsLogin(!isLogin);
                            }}
                        >
                            Sign up
                        </span>
                    </p>
                </main>
                <div className="welcome-container">
                    <h1 className="heading-secondary">
                        Welcome to <br /> <span className="lg">TcfPrep!</span>
                    </h1>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;
