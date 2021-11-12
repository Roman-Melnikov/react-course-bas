import { Button, CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catRandomSelector } from "../../Store/CatRandom";
import { getCatRequest } from "../../Store/CatRandom/actions";
import "./style.css"

export const CatRandom = () => {
    const { image: imageCat, loading, error } = useSelector(catRandomSelector);
    const dispatch = useDispatch();

    const handleGetCat = () => {
        dispatch(getCatRequest());
    }

    useEffect(() => dispatch(getCatRequest()), []);

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <Button onClick={handleGetCat}>Retry</Button>
            </>
        )
    }

    return (
        <div className="cat">
            <img className="cat-img" src={`https://cataas.com/${imageCat}`} alt="catRandom" />
            <Button  variant="contained" onClick={handleGetCat}>Change image</Button>
        </div>
    )
}