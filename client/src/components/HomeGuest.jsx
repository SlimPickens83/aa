import React, { useEffect } from "react"
import Page from "./Page"
import logo from "../assets/aa-p.png"

function HomeGuest() {
  return (
    <Page title="Welcome">
      <div id="splash">
        <img className="logo" src={logo} alt="" />
        <div className="main"></div>
      </div>
    </Page>
  )
}

export default HomeGuest
