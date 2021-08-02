import Message from "./Message"
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
export default function ChatBox(){
    return(
        <div className="chat-box-wrapper">
            <div className="chat-box-inner-wrapper">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message message="This is a custom message that I am setting for just this one to ensure it is the bottom message"/>
            </div>
        </div>
    )
}