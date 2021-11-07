import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {

        const { target: { name, value } } = event;
        console.log(value)
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }

    };
    const onSubmit = async (event) => {
        event.preventDefault(); //기본행위 실행x
        let data;
        try {
            if (newAccount) {
                // account가 true면 새 계정 생성
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // 아니면 로그인
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        }
        catch (error) {
            setError(error.message);
        }
        console.log(data);
    };
    const toggleAccount = () => setNewAccount(prev => !prev); //이전값을 가져와서 그 값의 반대되는 것을 리턴
    const onSocialClick = async (event) => {
        const { target: { name }, } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div>
    );
};
export default Auth;