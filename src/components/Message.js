// A message component to house displayed messages
// from the ChatBox.js component

export default function Message({messageObject}){
    return(
        <div className="message-wrapper">
            <h3>{messageObject.username}</h3>
            <p>{messageObject.message}</p>
        </div>
    )
}