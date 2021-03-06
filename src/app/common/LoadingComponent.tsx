import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';


interface Props{
    content?: string;
}

export default function LoadingComponent({content}:Props) {
  return (
    <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center',  minHeight: '50vh'}}>
      <CircularProgress sx={{marginRight:'1em'}} />
      <Typography sx={{userSelect:'none'}} variant="caption" component="div" color="text.secondary" >
          {content}
       </Typography>
    </Box>
  );
}