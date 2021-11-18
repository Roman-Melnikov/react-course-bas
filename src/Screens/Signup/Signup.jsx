import { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { FormAuth } from "../../Components/FormAuth/FormAuth";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => { setEmail(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <p>Fill in the form below to register new account.</p>
            <FormAuth email={email} password={password} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit} />
            {error && <p>{error}</p>}
            <p>Already have an account? <Link to={ROUTES.SIGNIN}>Sign in</Link></p>
        </>
    )
}