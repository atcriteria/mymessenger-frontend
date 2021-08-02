// A message component to house displayed messages
// from the ChatBox.js component

export default function Message({message}){
    return(
        <div className="message-wrapper">
            <h3>UsernameHere</h3>
            <p>{(message) ? `${message}` : "This is a bunch of random text that I am manually typing because I forgot the shortcut to inject lorem ipsum text in here. Hopefully this is enough to help me get an idea for how to set the message box width and taxt wrapping. lalalal let's see what happens."}</p>
        </div>
    )
}