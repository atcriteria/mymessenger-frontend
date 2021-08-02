import './App.css';
import {useState, useEffect} from 'react'
import UsernameForm from './components/UsernameForm';
import UserWindow from './components/UserWindow';
import socket from './util/socket';

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
      socket.connect();
    } else {
      return
    }
  }, [state])

  const submitUsername = username => {
    window.localStorage.setItem("username", username)
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
socket.on("connect", () => {
  console.log("connected successfully")
})
socket.on("disconnect", () => {
  console.log("disconnected successfully")
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
