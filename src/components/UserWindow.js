import ChatBox from "./ChatBox";
import TextField from "./TextField";

export default function UserWindow({username, colorScheme}){
    return(
        <div className="user-window-wrapper">
            <h2>You are registered as <span className="username-span">{username}</span></h2>
            <ChatBox username={username} colorScheme={colorScheme} />
            <TextField username={username} colorScheme={colorScheme} />
        </div>
    )
}