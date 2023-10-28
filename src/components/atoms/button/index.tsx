import React from 'react'
import {Button as MuiButton,ButtonProps} from "@mui/material";
interface MuiButtonProps extends ButtonProps{

}
const Button = (props:MuiButtonProps) => {
  return (
    <MuiButton {...props} />
  )
}

export default Button