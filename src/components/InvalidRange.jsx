import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
function InvalidRange(){
    return(
        <Box 
        display="flex" 
        alignItems="center" 
        bgcolor="#fddfdf" 
        color="#d32f2f" 
        padding={2} 
        borderRadius={1} 
        maxWidth={300}
        margin="auto"
    >
        <ErrorOutlineIcon fontSize="large" />
        <Typography variant="body1" marginLeft={1}>
            Invalid Range
        </Typography>
    </Box>
    )
}

export default InvalidRange