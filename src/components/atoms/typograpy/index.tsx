import React from "react";
import { Typography as MuiTypography,TypographyProps } from "@mui/material";
interface MuiTypographyProps extends TypographyProps{

}
const Typography= (props:MuiTypographyProps) => {
  return (
    <MuiTypography {...props} />
  )
};

export default Typography;
