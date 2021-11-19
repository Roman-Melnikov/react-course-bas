import { useDispatch } from "react-redux"
import { addChatWithFirebase } from "../Store/Chats";

export const useAddChat = () => {
    const dispatch = useDispatch();
    return (newChatName) => dispatch(addChatWithFirebase(newChatName));
}