import { useDispatch } from "react-redux"
import { addChatAction } from "../Store/Chats/actions";

export const useAddChat = () => {
    const dispatch = useDispatch();
    return (newChatName) => dispatch(addChatAction(newChatName));
}