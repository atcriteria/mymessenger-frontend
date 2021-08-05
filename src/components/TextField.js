import {useState} from 'react';
import { socket } from '../util/socket';
import numericalMonthToText from '../util/numericalMonthToText';

const initialValues = {
    text: "",
    lastMessage: null
}

export default function TextField({username, colorScheme}){
    const [state, setState] = useState(initialValues)

    const handleChange = e => {
        return setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let currentTime = Date.now();
        let lastMessage = (state.lastMessage) ? currentTime - state.lastMessage : null
        if(!lastMessage || lastMessage >= 2000){
            let date = new Date();
            let processedDate = `${date.getDate()} ${numericalMonthToText(date.getMonth())} ${date.getFullYear()} @${date.getHours()}:${date.getMinutes()}`
            const message = {username: username, message: [{text: state.text, timestamp: processedDate}], colorScheme: colorScheme}
            if (message === ""){
                return
            }
            socket.emit("send-message", message)
            setState({
                text: "",
                lastMessage: Date.now()
            })
        } else {
            alert("You are trying to send messages too quickly")
        }
    }
    return(
        <div className="text-field-wrapper">
            <form className="text-field-form-wrapper" onSubmit={handleSubmit} >
                <input className="text-field-input" type="text" name="text" value={state.text} onChange={handleChange} placeholder="Enter your message here..." required maxLength="160" />
                <button className="send-button" type="submit" >Send</button>
            </form>
        </div>
    )
}