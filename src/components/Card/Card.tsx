import { Box, CardContent, Typography } from '@mui/material';
import { Container } from './Card.styled';


interface CardProps {
  title: string,
  text: string,
  data: string,
}


export const Card = ({title, data, text}: CardProps) => {
    return (
    <Container sx={{ minWidth: 275 }} className='card'>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
          <Typography>
            {title}
          </Typography>
          
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography>{text}</Typography>
          <Typography variant="body2">
            {data}
          </Typography>
        </Box>
      </CardContent>
    </Container>
    )
}