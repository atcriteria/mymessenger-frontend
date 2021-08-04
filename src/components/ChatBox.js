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
// let initialValues = [];

export default function ChatBox({username}){
    let initialValues = [{username, message: [`welcome back ${username}`]}];
    const [messages, setMessages] = useState(initialValues)
    console.log("ChatBox component render")
    if(messages.length === 0){
        console.log("zero")
    } else {
        console.log(messages.length)
    }

    socket.on("receive-message", message => {
        let length = messages.length - 1;
        console.log(messages)
        if (length <= -1){
            console.log("less than 0")
            return setMessages([
                ...messages, message
            ])
        } else {
            let lastUser = messages[length].username || username
            if (lastUser && lastUser === message.username){
                console.log("appending path")
                let curMessages = messages[length].message
                curMessages.push(message.message[0])
                let stateCopy = [...messages]
                stateCopy[length].message = curMessages
                return setMessages(stateCopy)
            }
            console.log("normal path")
            return setMessages([
                ...messages, message
            ])
        }
    })

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