import './App.css';
import {useState, useEffect} from 'react'
import UsernameForm from './components/UsernameForm';
import UserWindow from './components/UserWindow';
import {socket, Socket } from './util/socket';

const initialValues = {
  username: window.localStorage.getItem("username") || ""
}

function App() {
  const [state, setState] = useState(initialValues)

  useEffect(() => {
    if (state.username !== ""){
      console.log(state.username)
      let username = state.username
      socket.auth = { username };
      socket.disconnect();
    } else {
      return
    }
  }, [state])

  const submitUsername = username => {
    window.localStorage.setItem("username", username)
    // socket.emit("send-message", `${username} was just created`)
    Socket.sendMessage(`${username} was just created`)
    return setState({
      ...state,
      username
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
      Main App<br />
      {
        (state.username) ? <UserWindow props={state} /> : <UsernameForm submitUsername={submitUsername} />
      }
    </div>
  );
}

export default App;
