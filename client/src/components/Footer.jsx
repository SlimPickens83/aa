import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div style={{ fontSize: 14 }}>
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </div>
      <div style={{ fontSize: 10 }}>
        Images via <a href="https://www.freepik.com/">Freepik</a> & <a href="https://www.unsplash.com">Unsplash</a>
      </div>
    </footer>
  )
}

export default Footer
