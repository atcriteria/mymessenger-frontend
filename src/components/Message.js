// A message component to house displayed messages
// from the ChatBox.js component

export default function Message({messageObject}){
    let username = messageObject.username
    let messages = messageObject.message
    return(
        <div className="message-wrapper">
            <h3>{messageObject.username}</h3>
            {
                messages.map(message => {
                    return <p key={Math.random()} >{message}</p>
                })
            }
        </div>
    )
}