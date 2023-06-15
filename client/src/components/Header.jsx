import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-primary container-md">
      <div>
        <h4>
          <Link to="/" className="text-white">
            {" "}
            AccountAbility Pittsburgh{" "}
          </Link>
        </h4>
      </div>
    </header>
  )
}

export default Header
