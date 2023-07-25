// console.log(import.meta.env.BACKENDURL)
import React, { useState, useReducer, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./admin.css"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:3000" || "https://aapbackend.onrender.com/"

import StateContext from "./StateContext.jsx"
import DispatchContext from "./DispatchContext.jsx"

// Components
import HeaderLoggedOut from "./components/HeaderLoggedOut.jsx"
import HeaderLoggedIn from "./components/HeaderLoggedIn.jsx"
import Footer from "./components/Footer.jsx"
import HomeGuest from "./components/HomeGuest.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Freq from "./components/Freq.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"
import ClientRegistration from "./components/ClientRegistration.jsx"
import Portal from "./components/Portal.jsx"
import Commissions from "./components/Commissions.jsx"
import Admin from "./components/Admin.jsx"
import AdminLogin from "./components/AdminLogin.jsx"
import AdminDashboard from "./components/AdminDashboard.jsx"

function App() {
  const initialState = {
    loggedIn: false,
    clientAuth: false,
    accountAuth: false,
    admin: false,
    user: {
      username: localStorage.getItem("aaUsername")
    },
    clientData: {
      clientName: localStorage.getItem("clientName")
    }
  }

  function mainReducer(draft, action) {
    switch (action.type) {
      case "adminAuthenticate":
        draft.admin = true
        return
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "register":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "clientAuth":
        draft.clientAuth = true
        draft.client = action.data
        return
      case "accountAuth":
        draft.clientAuth = true
        draft.accountAuth = true
        draft.client = action.data
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

  useEffect(() => {
    if (state.clientAuth) {
      localStorage.setItem("clientName", state.clientData.clientName)
    } else {
      localStorage.removeItem("clientName")
    }
  }, [state.clientAuth])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          {state.admin ? <></> : state.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
          <Routes>
            <Route path="/" element={state.admin ? <AdminDashboard /> : state.loggedIn ? <Portal /> : <HomeGuest />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Freq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/clientRegistration" element={<ClientRegistration />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/admin_login" element={<AdminLogin />} />
          </Routes>
          {state.admin ? <></> : <Footer />}
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
