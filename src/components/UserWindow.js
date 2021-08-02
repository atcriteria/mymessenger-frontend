import ChatBox from "./ChatBox";
import TextField from "./TextField";

export default function UserWindow({props}){
    return(
        <div className="user-window-wrapper">
            <h2>Welcome back {props.username}!</h2>
            <ChatBox />
            <TextField />
        </div>
    )
}