import Message from "./Message"
import { socket } from '../util/socket';
import {useState, useEffect} from 'react';
/*
    The chat box has two primary classNames
    1) chat-box-wrapper
    2) chat-box-inner-wrapper

    Nearly all of the styles are on the 
    chat-box-wrapper class, and there are
    only two different classes so we can
    keep the most recent/relevant messages
    rendering at the bottom of the chat 
    window's overflow. If we only had the
    one wrapper then the scrollage would
    both start at the top and the messages
    would be in reverse order.
*/
let initialValues = []

export default function ChatBox(){
    const [messages, setMessages] = useState(initialValues)

    socket.on("receive-message", message => {
        return setMessages([
            ...messages, message
        ])
    })
    useState(() => {
        console.log("something happened..")
    }, messages)
    
    console.log(messages)
    return(
        <div className="chat-box-wrapper">
            <div className="chat-box-inner-wrapper">
                {
                    messages.map((messageObject) => {
                        return <Message messageObject={messageObject} key={Math.random()} />
                    })
                }
            </div>
        </div>
    )
}