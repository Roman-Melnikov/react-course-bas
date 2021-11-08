import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";
import { showNameAction } from "../../Store/Profile/actions";

export const Profile = () => {
    const { name, showName } = useSelector(profileSelector);
    const dispatch = useDispatch();

    const toogleShowName = () => {
        dispatch(showNameAction());
    }

    return (
        <>
            <h3>Profile Page</h3>
            <input type="checkbox" checked={showName} onChange={toogleShowName} />
            <div>{showName && name}</div>
        </>
    )
}