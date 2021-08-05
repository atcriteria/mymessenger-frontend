import Message from "./Message"
import { socket } from '../util/socket';
import {useState, useEffect} from 'react';
import AdminMessage from "./AdminMessage";
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

export default function ChatBox({username, colorScheme, filterLanguage}){
    // let initialValues = [{username, message: `welcome back ${username}`}];
    const [chats, setChats] = useState([])

    useEffect(() => {
        socket.on("receive-message", message => {
            setChats(prevChats => [...prevChats, message])
        })
    }, [])
    useEffect(() => {
        socket.on("admin-message", message => {
            setChats(prevChats => [...prevChats, message])
        })
    }, [])
    if(chats.length > 1 && !chats[chats.length -1].adminMessage){
        let prevChat = chats[chats.length-2]
        let currentChat = chats[chats.length-1]
        if(prevChat.username === currentChat.username){
            chats[chats.length-2].message.push(chats[chats.length-1].message[0])
            chats.pop();
        }
    }
    
    return(
        <div className="chat-box-wrapper">
            <div className="chat-box-inner-wrapper" id="chatBox">
                {
                    chats.map((messageObject) => {
                        if(messageObject.adminMessage){
                            return <AdminMessage key={Math.random()} username={"<SYSTEM>"} messageObject={messageObject} />
                        } else {
                            return <Message messageObject={messageObject} username={username} filterLanguage={filterLanguage} key={Math.random()} />
                        }
                    })
                }
            </div>
        </div>
    )
}