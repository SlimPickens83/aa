import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { ColorModeContext, useMode } from "../theme"
import { CssBaseline, ThemeProvider, dividerClasses } from "@mui/material"
import { Routes, Route } from "react-router-dom"
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
import DispatchContext from "../DispatchContext"
import { FamilyRestroomRounded } from "@mui/icons-material"

function AdminDashboard() {
  const [theme, colorMode] = useMode()
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
  //   stateCounter: 0
  // }

  // function dashboardReducer(draft, action) {
  //   switch (action.type) {
  //     case "dashboard":
  //       draft.stateCounter++
  //       draft.dashboard = true
  //       return
  //     case "team":
  //       draft.stateCounter++
  //       draft.team = true
  //       return
  //     case "contacts":
  //       draft.stateCounter++
  //       draft.contacts = true
  //       return
  //     case "invoices":
  //       draft.stateCounter++
  //       draft.invoices = true
  //       return
  //     case "form":
  //       draft.stateCounter++
  //       draft.form = true
  //       return
  //     case "bar":
  //       draft.stateCounter++
  //       draft.bar = true
  //       return
  //     case "pie":
  //       draft.stateCounter++
  //       draft.pie = true
  //       return
  //     case "line":
  //       draft.stateCounter++
  //       draft.line = true
  //       return
  //     case "faq":
  //       draft.stateCounter++
  //       draft.faq = true
  //       return
  //     case "geography":
  //       draft.stateCounter++
  //       draft.geography = true
  //       return
  //     case "calendar":
  //       draft.stateCounter++
  //       draft.calendar = true
  //       return
  //     case "clear":
  //       draft.dashboard = false
  //       draft.team = false
  //       draft.contacts = false
  //       draft.invoices = false
  //       draft.form = false
  //       draft.bar = false
  //       draft.pie = false
  //       draft.line = false
  //       draft.faq = false
  //       draft.geography = false
  //       draft.calendar = false
  //       return
  //   }
  // }

  // const [state, dashDispatch] = useImmerReducer(dashboardReducer, initialState)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="adminDashboard">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/adminDashboard/team" element={<Team />} />
              <Route path="/adminDashboard/contacts" element={<Contacts />} />
              <Route path="/adminDashboard/invoices" element={<Invoices />} />
              <Route path="/adminDashboard/form" element={<Form />} />
              <Route path="/adminDashboard/bar" element={<Bar />} />
              <Route path="/adminDashboard/pie" element={<Pie />} />
              <Route path="/adminDashboard/line" element={<Line />} />
              <Route path="/adminDashboard/faq" element={<FAQ />} />
              <Route path="/adminDashboard/geography" element={<Geography />} />
              <Route path="/adminDashboard/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminDashboard
