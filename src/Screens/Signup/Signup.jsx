import { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { FormAuth } from "../../Components/FormAuth/FormAuth";

export const Signup = () => {
    const [error, setError] = useState("");

    const handleSubmit = async (email, password) => {
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
            <FormAuth handleSubmit={handleSubmit} />
            {error && <p>{error}</p>}
            <p>Already have an account? <Link to={ROUTES.SIGNIN}>Sign in</Link></p>
        </>
    )
}