import { Box, CardContent, Chip, Typography } from '@mui/material';
import { Container } from './Card.styled';
import type { ReactElement } from 'react';


interface CardProps {
  title: string,
  text: string,
  data: string,
  type?: number,
  icon?: ReactElement
  logo?: string,
}

export const Card = ({title, data, text, type, icon}: CardProps) => {
  return (
    <Container sx={{ minWidth: 275, minHeight: 125, height: 170, width: 285 }} className='card'>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
          <Typography>
            {title}
          </Typography>
          {type === 1 ? (
            <>
              <Chip icon={icon} color="success" />
            </>
            ) : type === 2 ? (
              <>
                <Chip  icon={icon} color="secondary" />
              </>

            ) : type === 3 ? (
              <>
                <Chip  label={icon} color="warning" />
              </>

            ) :(
              <>
                <Chip  icon={icon} color="error" />
              </>
          )}      
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography fontSize={'24px'} fontWeight={"bold"}>{text}</Typography>
          {type === 1 ? (
              <Chip sx={{ marginTop: '.4rem' }} label={data} color="success" />
            ) : type === 2 ? (
              <Chip sx={{ marginTop: '.4rem' }}  label={data} color="secondary" />
            ) : type === 3 ? (
              <Chip sx={{ marginTop: '.4rem' }}  label={data} color="warning" />
            ) :(
              <Chip sx={{ marginTop: '.4rem' }}  label={data} color="error" />
          )}          
        </Box>
      </CardContent>
    </Container>
  )
}


export const CardTools = ({title, data, text, logo}: CardProps) => {
  return (
    <Container sx={{ minWidth: 275, minHeight: 125, height: 170, width: 292 }} className='card'>
      <CardContent>
        <Box sx={{ display: 'flex',alignItems: 'center' , mb: '1rem' }}>
        <img
                        style={{ marginRight: '.3rem' }}
                        srcSet={`${logo}`}
                        src={`${logo}`}
                        width={20} 
                        height={20}
                    />
          <Typography fontWeight={"bold"}>
            {title}
          </Typography>
          
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography>{text}</Typography>
          {data === 'active' ? (
              <Chip sx={{ marginTop: '.4rem' }} label={data} color="success" />
            ) : data === 'expiring' ? (
              <Chip sx={{ marginTop: '.4rem' }}  label={data} color="warning" />
            ) : (
              <Chip sx={{ marginTop: '.4rem' }}  label={data} color="error" />
          )}          
        </Box>
      </CardContent>
    </Container>
  )
}