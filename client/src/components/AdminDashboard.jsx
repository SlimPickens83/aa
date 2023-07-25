import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { ColorModeContext, useMode } from "../theme"
import { CssBaseline, ThemeProvider, dividerClasses } from "@mui/material"
import Topbar from "../scenes/global/Topbar"
import Dashboard from "../scenes/dashboard"
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

function AdminDashboard() {
  const [theme, colorMode] = useMode()
  const initialState = {
    dashboard: true,
    team: false,
    contacts: false,
    invoices: false,
    form: false,
    bar: false,
    pie: false,
    line: false,
    faq: false,
    geography: false,
    calendar: false,
    stateCounter: 0
  }

  function dashboardReducer(draft, action) {
    switch (action.type) {
      case "dashboard":
        draft.dashboard = true
        return
    }
  }

  const [state, dispatch] = useImmerReducer(dashboardReducer, initialState)

  useEffect(() => {
    state.dashboard = false
    state.team = false
    state.contacts = false
    state.invoices = false
    state.form = false
    state.bar = false
    state.pie = false
    state.line = false
    state.faq = false
    state.geography = false
    state.calendar = false
  }, [state.stateCounter])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="adminDashboard">
          <main className="content">
            <Topbar />
            {state.dashboard ? <Dashboard /> : state.team ? <Team /> : state.contacts ? <Contacts /> : state.invoices ? <Invoices /> : state.form ? <Form /> : state.bar ? <Bar /> : state.pie ? <Pie /> : state.line ? <Line /> : state.faq ? <FAQ /> : state.geography ? <Geography /> : state.calendar ? <Calendar /> : <Dashboard />}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminDashboard
