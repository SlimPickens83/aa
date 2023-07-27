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
import Team from "../scenes/team/"
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="adminDashboard">
          <Sidebar />
          <main className="content">
            <Topbar />
            {props.dashComponent}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminDashboard
