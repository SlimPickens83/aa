import React, { useContext, useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { ColorModeContext, useMode } from "../theme"
import { CssBaseline, ThemeProvider, dividerClasses } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import Topbar from "../scenes/global/Topbar"
import Dashboard from "../scenes/dashboard/index.jsx"
import Sidebar from "../scenes/global/Sidebar"
import Team from "../scenes/team"
import Invoices from "../scenes/invoices"
import Contacts from "../scenes/contacts"
import Bar from "../scenes/bar"
import Form from "../scenes/form"
import Line from "../scenes/line"
import Pie from "../scenes/pie"
import FAQ from "../scenes/faq"
import Geography from "../scenes/geography"
import Calendar from "../scenes/calendar"
import { columnsStateInitializer } from "@mui/x-data-grid/internals"
import { Satellite } from "@mui/icons-material"

function AdminDashboard(props) {
  const [theme, colorMode] = useMode()
  const appState = useContext(StateContext)

  // const initialState = {
  //   dashboard: true,
  //   team: false,
  //   contacts: false,
  //   invoices: false,
  //   form: false,
  //   bar: false,
  //   pie: false,
  //   line: false,
  //   faq: false,
  //   geography: false,
  //   calendar: false,
  //   clearCounter: 0
  // }

  // function draftReducer(draft, action) {
  //   switch (action.type) {
  //     case "dashboard":
  //       draft.dashboard = true
  //       return
  //     case "team":
  //       draft.team = true
  //       return
  //     case "contacts":
  //       draft.contacts = true
  //       return
  //     case "invoices":
  //       draft.invoices = true
  //       return
  //     case "form":
  //       draft.form = true
  //       return
  //     case "bar":
  //       draft.bar = true
  //       return
  //     case "pie":
  //       draft.pie = true
  //       return
  //     case "line":
  //       draft.line = true
  //       return
  //     case "faq":
  //       draft.faq = true
  //       return
  //     case "geography":
  //       draft.geography = true
  //       return
  //     case "calendar":
  //       draft.calendar = true
  //       return
  //     case "clear":
  //       draft.clearCounter++
  //       return
  //   }
  // }

  // const [state, dashDispatch] = useImmerReducer(draftReducer, initialState)

  // function clear() {
  //   dispatch({ type: "dashboard", value: false })
  //   dispatch({ type: "team", value: false })
  //   dispatch({ type: "contacts", value: false })
  //   dispatch({ type: "invoices", value: false })
  //   dispatch({ type: "form", value: false })
  //   dispatch({ type: "bar", value: false })
  //   dispatch({ type: "pie", value: false })
  //   dispatch({ type: "line", value: false })
  //   dispatch({ type: "faq", value: false })
  //   dispatch({ type: "geography", value: false })
  //   dispatch({ type: "calendar", value: false })
  // }

  // useEffect(() => {
  //   if (state.clearCounter) {
  //     clear()
  //   }
  // }, [state.clearCounter])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <DispatchContext.Provider value={dashDispatch}> */}
        <div className="adminDashboard">
          <Sidebar />
          <main className="content">
            <Topbar />
            {props.dashComponent}
            {/* {state.dashboard ? <Dashboard /> : state.team ? <Team /> : state.contacts ? <Contacts /> : state.invoices ? <Invoices /> : state.form ? <Form /> : state.bar ? <Bar /> : state.pie ? <Pie /> : state.line ? <Line /> : state.faq ? <FAQ /> : state.geography ? <Geography /> : state.calendar ? <Calendar /> : ""} */}
          </main>
        </div>
        {/* </DispatchContext.Provider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminDashboard
