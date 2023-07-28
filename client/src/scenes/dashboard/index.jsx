import React, { useEffect } from "react"
import AdminHeader from "../../components/dashComponents/AdminHeader"
import { Box } from "@mui/material"

function Dashboard() {
  return (
    <Box m="20px" display="flex" justifyContent="spaceBetween" alignItems="center">
      <AdminHeader title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  )
}

export default Dashboard
