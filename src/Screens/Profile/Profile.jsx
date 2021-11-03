import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigation } from "../../Components/Navigation";
import { profileSelector } from "../../Store/profile/selectors";
import { showNameAction } from "../../Store/profile/actions";

export const Profile = () => {
    const { name, showName } = useSelector(profileSelector);
    const dispatch = useDispatch();

    const toogleShowName = () => {
        dispatch(showNameAction());
    }

    return (
        <>
            <Navigation />
            <h3>Profile Page</h3>
            <input type="checkbox" checked={showName} onChange={toogleShowName} />
            <div>{showName && name}</div>
        </>
    )
}