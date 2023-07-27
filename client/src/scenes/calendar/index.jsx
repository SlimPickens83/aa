import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import AdminHeader from "../../components/AdminHeader"
import { tokens } from "../../theme"

const formatDate = date => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date)
}

function Calendar() {
  return <>Calendar</>
}

export default Calendar
