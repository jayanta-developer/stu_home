import { Box, Typography } from "@mui/material"
import "./style.css"


export const YellowBtn = ({ btnText }) => {
  return (
    <Box className="yellowBtn">
      <Typography>{btnText}</Typography>
    </Box>
  )
}