import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography, Box } from '@mui/material';
function InvalidRange(){
    return(
        <Box 
        display="flex" 
            alignItems="center" 
            bgcolor="#fddfdf" 
            color="#d32f2f" 
            padding={1} 
            borderRadius={1} 
            maxWidth={150}
            marginLeft={0} // Align to the left of its container
    >
        <ErrorOutlineIcon fontSize="small" />
        <Typography variant="body2" marginLeft={1}>
            Invalid Range
        </Typography>
    </Box>
    )
}

export default InvalidRange