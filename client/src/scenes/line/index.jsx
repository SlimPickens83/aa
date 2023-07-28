import { Box } from "@mui/material"
import AdminHeader from "../../components/dashComponents/AdminHeader"
import LineChart from "../../components/dashComponents/LineChart"
import { tokens } from "../../theme"
import { useTheme } from "@mui/material"

function Line() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <AdminHeader title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line
