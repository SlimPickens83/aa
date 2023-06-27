import React, { useEffect } from "react"
import Page from "./Page"
import logo from "../assets/aa-p.png"
import pitt from "../assets/yuhan-du-yLcPSvJkGrM-unsplash.jpeg"

function HomeGuest() {
  return (
    <Page title="Welcome">
      <div id="splash">
        <img className="city" src={pitt} alt="" />
        <img className="logo" src={logo} alt="" />
        <div className="main"></div>
      </div>
    </Page>
  )
}

export default HomeGuest
