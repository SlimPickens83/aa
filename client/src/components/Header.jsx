import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div>
        <h4>
          <Link to="/"> AccountAbility Pittsburgh </Link>
        </h4>
      </div>
    </header>
  )
}

export default Header
