import { Box, Typography } from "@mui/material"
import "./style.css"


export const AppBtn = ({ btnText, bgColor, hoverColor, width, height, textColor, onClick }) => {
  return (
    <Box onClick={onClick} className="appBtn" sx={{ width: width || "207px", minHeight: height || "50px", background: bgColor || "#fdaf17", ":hover": { background: hoverColor || "#cc8e13" } }}>
      <Typography sx={{ color: textColor || "#000" }}>{btnText}</Typography>
    </Box>
  )
}