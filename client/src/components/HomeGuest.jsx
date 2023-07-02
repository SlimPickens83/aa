import React, { useEffect } from "react"
import Page from "./Page"
import topImage from "../assets/9176032_6573.jpeg"
import secondImage from "../assets/3992745.jpg"

function HomeGuest() {
  return (
    <Page title="Welcome">
      <div id="main">
        <div id="splash">
          <div id="splashOne">
            <div id="topChild">
              <h2 style={{ color: "text-secondary" }}>Effective business accounting serving the Pittsburgh area.</h2>
              <p>Here you're going to read some flowery prose about how great we are. Take our word for it--we'll hook you up with the best accounting you've ever seen.</p>
            </div>
            <div id="topChild">
              <img id="topImage" src={topImage} alt="" />
            </div>
          </div>
          <div id="splashTwo">
            <div id="secondChild">
              <img id="secondImage" src={secondImage} alt="" />
            </div>
            <div id="secondChild">
              <h2 style={{ color: "text-secondary" }}>Gosh, money is hard ain't it?</h2>
              <p>That's why you need us. Set up a meet cute with one of our staff and we'll show you why you'll never have to worry about all those hard numbers anymore.</p>
            </div>
          </div>
          <div id="splashThree">
            <div id="thirdChild">
              <h3 style={{ color: "text-secondary" }}>This is what we do.</h3>
              <p>Numbers. Dollars. Spreadsheets. Blah blah blah. Who cares about this stuff? You just want to get paid, right? We make it easier.</p>
            </div>
            <div id="thirdChild">
              <h4 style={{ color: "text-secondary" }}>Consultation</h4>
              <p>Don't get us wrong, we're here to get ours too. We're begging you to come in so we can sucker you into using us to handle your filthy lucre. Dollar dollar bills, y'all!</p>
            </div>
            <div id="thirdChild">
              <h4 style={{ color: "text-secondary" }}>GIVE US YOUR MONEY</h4>
              <p>Give it here. Give it now. Give freely. Don't think about it. Just sign the check and nobody gets hurt.</p>
            </div>
          </div>
          <div id="splashFour">
            <div id="bottomChild">
              <h4>Would you like to know more?</h4>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
