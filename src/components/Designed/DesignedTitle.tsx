import React from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
  children?: React.ReactNode;
}
const Component:React.FC<IProps> = ({children}) => {
  return (
    <Divider sx={{my:2}} textAlign="left">
        <Typography
          sx={{opacity:0.5, color:'var(--color-primary)'}}
          variant="h4"
          children={children}
          />
    </Divider>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const DesignedTitle = Component
export default DesignedTitle
