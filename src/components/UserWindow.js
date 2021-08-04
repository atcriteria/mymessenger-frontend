import ChatBox from "./ChatBox";
import TextField from "./TextField";

export default function UserWindow({props}){
    return(
        <div className="user-window-wrapper">
            <h2>You are registered as <span className="username-span">{props.username}</span></h2>
            <ChatBox username={props.username} />
            <TextField username={props.username} />
        </div>
    )
}