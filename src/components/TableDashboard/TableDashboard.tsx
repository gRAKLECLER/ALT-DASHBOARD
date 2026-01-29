import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Chip, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Tools } from '../../types/tools';

export const TableDashboard = () => {
    const [data, setData] = useState<Tools[]>([])

    useEffect(() => {
        axios
          .get<Tools[]>(
            'https://tt-jsonserver-01.alt-tools.tech/tools'
          )
          .then(res => setData(res.data))
          .catch(err => {
            console.error('Erreur API analytics', err);
          });
      }, []);



  return (
   <TableContainer component={Paper} sx={{ boxShadow: '0px 0px 14px -7px rgba(0,0,0,1)', borderRadius: '10px' }}>
    <Box sx={{ padding: '1rem' }}>
    <Typography variant='h5' sx={{ textAlign: 'start' }}>Recent Tools</Typography>
    </Box>
      <Table sx={{ minWidth: 615 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '35%' }} align='left'>Tool</TableCell>
            <TableCell sx={{ width: '25%' }} align="left">Department</TableCell>
            <TableCell sx={{ width: '10%' }} align="left">Users</TableCell>
            <TableCell sx={{ width: '15%' }} align="left">Monthly Cost</TableCell>
            <TableCell sx={{ width: '15%' }} align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        style={{ marginRight: '.3rem' }}
                        srcSet={`${item.icon_url}`}
                        src={`${item.icon_url}`}
                        width={20} 
                        height={20}
                    />
                    {item.name}
                </Box>
              </TableCell>
              <TableCell align="left">{item.owner_department}</TableCell>
              <TableCell align="left">{item.active_users_count ?? '0'}</TableCell>
              <TableCell align="left">{item.monthly_cost ?? '0'}</TableCell>
            <TableCell align="left">
                {item.status === 'active' ? (
                    <Chip sx={{ marginTop: '.4rem' }} label={item.status} color="success" />
                    ) : item.status === 'expiring' ? (
                    <Chip sx={{ marginTop: '.4rem' }}  label={item.status} color="warning" />
                    ) : (
                    <Chip sx={{ marginTop: '.4rem' }}  label={item.status} color="error" />
                )}    
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}