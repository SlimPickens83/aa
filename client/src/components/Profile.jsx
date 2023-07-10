import React, { useEffect, useContext } from "react"
import Page from "./Page"
import { useParams, NavLink, Routes, Route } from "react-router-dom"
import StateContext from "../StateContext"
import { useImmer } from "use-immer"

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
      <h1>Welcome, {`${appState.user.username}`}!</h1>
      <div id="currentJobs">
        <h2>Current *jobs*</h2>
        <ul>
          <li>Payroll</li>
          <li>Tax planning</li>
          <li>Consulting</li>
        </ul>
      </div>
      <div id="feeStructure">
        <h2>Fee structure</h2>
        <ul>
          <li>Payroll: $XX / hr</li>
          <li>Tax planning: $XX / hr</li>
          <li>Consulting: $XX / hr</li>
        </ul>
      </div>
      <div id="dynamicInvoice">
        <h2>Invoice</h2>
      </div>
    </div>
  )
}

export default Profile
