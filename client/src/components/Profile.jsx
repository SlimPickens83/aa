import React, { useEffect, useContext } from "react"
import Page from "./Page"
import { useParams, NavLink, Routes, Route } from "react-router-dom"
import StateContext from "../StateContext"
import { useImmer } from "use-immer"
import Button from "react-bootstrap/Button"

function Profile() {
  const appState = useContext(StateContext)

  useEffect(() => {
    loggedIn()
  })

  function loggedIn() {
    console.log(`appState.loggedIn: ${appState.loggedIn}`)
  }

  return (
    <div id="profileContainer">
      <div id="profileWelcomeContainer">
        <div id="welcome">Welcome, {`${appState.user.username}`}!</div>
      </div>
      <div id="profileMain">
        <div id="profileSidebar">
          <Button id="currentJobs">Current Jobs</Button>
          <Button id="feeStructure">Fee Structure</Button>
          <Button id="dynamicInvoice">Invoices</Button>
        </div>
        <div id="profileDisplay">
          <p>Jobs, Fee & Invoice components will load here dynamically.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
