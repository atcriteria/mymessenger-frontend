import './App.css';
import {useState, useEffect} from 'react'
import UsernameForm from './components/UsernameForm';
import UserWindow from './components/UserWindow';
import AdminMessage from './components/AdminMessage';
import {socket} from './util/socket';

const initialValues = {
  username: window.localStorage.getItem("username") || "",
  colorScheme: JSON.parse(window.localStorage.getItem("colorScheme")) || { first: "white", second: "white", text: "black"},
  filterLanguage: true
}

function App() {
  const [state, setState] = useState(initialValues)

  useEffect(() => {
    if (state.username !== ""){
      let username = state.username
      socket.auth = { username };
      socket.connect();
    } else {
      return
    }
  }, [state])

  const submitUsername = (values, randomColor) => {
    const username = values.username
    window.localStorage.setItem("username", username)
    window.localStorage.setItem("colorScheme", JSON.stringify(randomColor))
    return setState({
      ...state,
      username: username,
      colorScheme: randomColor
    })
  }
  socket.on("connect_error", (err) => {
    if(err.message === "invalid username"){
      console.log("invalid username")
        setState({
          ...state,
          "username": ""
        })
        console.log(state)
    }
  })
  

  return (
    <div className="App">
      {
        (state.username) ? <UserWindow username={state.username} colorScheme={state.colorScheme} filterLanguage={state.filterLanguage} /> : <UsernameForm submitUsername={submitUsername} />
      }
    </div>
  );
}

export default App;
