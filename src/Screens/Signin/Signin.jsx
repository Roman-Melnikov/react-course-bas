import { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { FormAuth } from "../../Components/FormAuth/FormAuth";

export const Signin = () => {
    const [error, setError] = useState("");

    const handleSubmit = async (email, password) => {
        setError("");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <p>Fill in the form below to login to your account.</p>
            <FormAuth handleSubmit={handleSubmit} />
            {error && <p>{error}</p>}
            <p>Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up</Link></p>
        </>
    )
}