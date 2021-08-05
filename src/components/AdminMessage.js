export default function AdminMessage({username, messageObject}){
    return(
        <div className="message-wrapper admin-message">
            {username} <span className="admin-message-message">{messageObject.message}</span>
        </div>
    )
}