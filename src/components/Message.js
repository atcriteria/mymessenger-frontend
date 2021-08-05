// A message component to house displayed messages
// from the ChatBox.js component
import Filter from 'bad-words';
import {badWords, goodWords} from '../util/censoredWords';

let filter = new Filter();
filter.addWords(...badWords)
filter.removeWords(...goodWords)

export default function Message({messageObject, username, filterLanguage}){
    let messages = messageObject.message;
    let first = messageObject.colorScheme.first;
    let second = messageObject.colorScheme.second;
    let text = messageObject.colorScheme.text;
    return(
        <div style={{background: `linear-gradient(180deg, ${first}, ${second})`, color: `${text}`}} className="message-wrapper">
            <h3>{(username === messageObject.username) ? `${username} (You)`: messageObject.username }</h3>
            {
                messages.map(message => {
                    return <p key={Math.random()} >{(filterLanguage) ? filter.clean(message) : message}</p>
                })
            }
        </div>
    )
}
