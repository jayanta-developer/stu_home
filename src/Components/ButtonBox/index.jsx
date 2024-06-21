import { Box, Typography } from "@mui/material"
import "./style.css"


export const AppBtn = ({ btnText, bgColor, hoverColor, width, height }) => {
  return (
    <Box className="appBtn" sx={{ width: width || "207px", minHeight: height || "50px", background: bgColor || "#fdaf17", ":hover": { background: hoverColor || "#cc8e13" } }}>
      <Typography>{btnText}</Typography>
    </Box>
  )
}