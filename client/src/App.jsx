// console.log(import.meta.env.BACKENDURL)
import React, { useState, useReducer, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:3000"

import StateContext from "./StateContext.jsx"
import DispatchContext from "./DispatchContext.jsx"

// Components
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import HomeGuest from "./components/HomeGuest.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Freq from "./components/Freq.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"
import Profile from "./components/Profile.jsx"
import Commissions from "./components/Commissions.jsx"

function App() {
  const initialState = {
    loggedIn: false,
    user: {
      username: localStorage.getItem("aaUsername")
    }
  }

  function mainReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "register":
        alert("Congratulations on registering for your new account.")
        draft.loggedIn = true
        draft.user = action.data
        return
    }
  }

  const [state, dispatch] = useImmerReducer(mainReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("aaUsername", state.user.username)
    } else {
      localStorage.removeItem("aaUsername")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={state.loggedIn ? <Profile /> : <HomeGuest />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Freq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/commissions" element={<Commissions />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
