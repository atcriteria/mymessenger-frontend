import ChatBox from "./ChatBox";
import TextField from "./TextField";

export default function UserWindow({username, colorScheme, filterLanguage}){
    return(
        <div className="user-window-wrapper">
            <div className="user-window-content-wrapper">
                <h2 className="user-title">You are registered as <span className="username-span">{username}</span></h2>
                <ChatBox username={username} colorScheme={colorScheme} filterLanguage={filterLanguage} />
                <TextField username={username} colorScheme={colorScheme} />
            </div>
        </div>
    )
}