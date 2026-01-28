import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField() {
  return (
    <Box
      component="form"
      sx={{ mr: '1rem' }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}