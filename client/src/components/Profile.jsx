import React, { useEffect, useContext } from "react"
import Page from "./Page"
import { useParams, NavLink, Routes, Route } from "react-router-dom"
import StateContext from "../StateContext"
import { useImmer } from "use-immer"
import Button from "react-bootstrap/Button"
import ClientDefault from "../components/ClientDefault"
import Jobs from "../components/Jobs"
import Fee from "../components/Fee"
import Invoice from "../components/Invoice"

function Profile() {
  const appState = useContext(StateContext)
  const [state, setState] = useImmer({
    jobs: false,
    jobsCounter: 0,
    fee: false,
    feeCounter: 0,
    invoice: false,
    invoiceCounter: 0
  })

  function viewJobs() {
    setState(draft => {
      draft.jobsCounter++
      draft.jobs = true
    })
  }

  function clearJobs() {
    setState(draft => {
      draft.fee = false
      draft.invoice = false
    })
  }

  function viewFee() {
    setState(draft => {
      draft.feeCounter++
      draft.fee = true
    })
  }

  function clearFee() {
    setState(draft => {
      draft.jobs = false
      draft.invoice = false
    })
  }

  function viewInvoice() {
    setState(draft => {
      draft.invoiceCounter++
      draft.invoice = true
    })
  }

  function clearInvoice() {
    setState(draft => {
      draft.jobs = false
      draft.fee = false
    })
  }

  useEffect(() => {
    clearJobs()
  }, [state.jobsCounter])

  useEffect(() => {
    clearFee()
  }, [state.feeCounter])

  useEffect(() => {
    clearInvoice()
  }, [state.invoiceCounter])

  return (
    <div id="profileContainer">
      <div id="profileWelcomeContainer">
        <div id="welcome">Welcome, {`${appState.user.username}`}!</div>
      </div>
      <div id="profileMain">
        <div id="profileSidebar">
          <Button onClick={viewJobs} id="currentJobs">
            Current Jobs
          </Button>
          <Button onClick={viewFee} id="feeStructure">
            Fee Structure
          </Button>
          <Button onClick={viewInvoice} id="dynamicInvoice">
            Invoices
          </Button>
        </div>
        <div id="profileDisplay">{state.jobs ? <Jobs /> : state.fee ? <Fee /> : state.invoice ? <Invoice /> : <ClientDefault />}</div>
      </div>
    </div>
  )
}

export default Profile
