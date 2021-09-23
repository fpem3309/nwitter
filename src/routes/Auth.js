import { authService } from "fbase";
import React, { useEffect } from "react";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
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
            console.log(error);
        }
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                <button>Continue with Google (회원가입)</button>
                <button>Continue with Github (회원가입)</button>
            </div>
        </div>
    );
};
export default Auth;