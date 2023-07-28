import { Box } from "@mui/material"
import AdminHeader from "../../components/dashComponents/AdminHeader"
import GeographyChart from "../../components/dashComponents/GeographyChart"

function Geography() {
  return (
    <Box m="20px">
      <AdminHeader title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
