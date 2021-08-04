import Message from "./Message"
import { socket } from '../util/socket';
import {useState, useEffect, useRef} from 'react';
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
let initialValues = [];

export default function ChatBox({username}){
    // let initialValues = [{username, message: `welcome back ${username}`}];
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState('')
    const socketClientRef = useRef()
    console.log("component mounted")

    useEffect(() => {
        socket.on("receive-message", message => {
            setChats(prevChats => [...prevChats, message])
        })
    }, [])
    

    return(
        <div className="chat-box-wrapper">
            <div className="chat-box-inner-wrapper">
                {
                    chats.map((messageObject) => {
                        return <Message messageObject={messageObject} key={Math.random()} />
                    })
                }
            </div>
        </div>
    )
}