import React from 'react'
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

const App = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              {/* <Route path="/premium" element={<Premium />} /> */}
              {/* <Route path="/chat/:targetUserId" element={<Chat />} /> */}
            </Route>
          </Routes>
    </div>
  )
}

export default App