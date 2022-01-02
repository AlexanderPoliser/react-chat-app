import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "./components/firebase";
import Title from "./components/Title";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

import "./App.css";
import "./styles/global.css";

function App() {
  const [user] = useAuthState(firebaseAuth);
  return (
    <div className="App">
      <header>
        <div>
          <Title />
        </div>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>;
    </div>
  );
}

export default App;
