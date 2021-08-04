// A message component to house displayed messages
// from the ChatBox.js component

export default function Message({messageObject, username}){
    let messages = messageObject.message;
    let first = messageObject.colorScheme.first;
    let second = messageObject.colorScheme.second;
    let text = messageObject.colorScheme.text;
    return(
        <div style={{background: `linear-gradient(180deg, ${first}, ${second})`, color: `${text}`}} className="message-wrapper">
            <h3>{(username === messageObject.username) ? `${username} (You)`: messageObject.username }</h3>
            {
                messages.map(message => {
                    return <p key={Math.random()} >{message}</p>
                })
            }
        </div>
    )
}
