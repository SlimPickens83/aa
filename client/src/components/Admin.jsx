import React, { useEffect, useContext } from "react"
import StateContext from "../StateContext"
import { useImmer } from "use-immer"
import Button from "react-bootstrap/Button"
import ClientDefault from "../components/ClientDefault"
import Jobs from "../components/Jobs"
import Fee from "../components/Fee"
import Invoice from "../components/Invoice"

function Admin() {
  const appState = useContext(StateContext)
  const [state, setState] = useImmer({
    jobs: false,
    jobsCounter: 0,
    fee: false,
    feeCounter: 0,
    invoice: false,
    invoiceCounter: 0
  })

  return (
    <div id="adminContainer">
      <div id="adminWelcomeContainer">
        <div id="welcome">Welcome, {`${appState.user.username}`}!</div>
      </div>
      <div id="adminMain">
        <div id="adminSidebar">
          <Button id="addClient">Add New Client</Button>
          <Button id="addJob">Add New Job</Button>
          <Button id="currentJobs">Current Jobs</Button>
          <Button id="feeStructure">Fee Structure</Button>
          <Button id="dynamicInvoice">Invoices</Button>
        </div>
        <div id="adminDisplay">{state.jobs ? <Jobs /> : state.fee ? <Fee /> : state.invoice ? <Invoice /> : <ClientDefault />}</div>
      </div>
    </div>
  )
}

export default Admin
