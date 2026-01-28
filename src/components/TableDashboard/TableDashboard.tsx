import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
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
    <TableContainer component={Paper} sx={{ width: '85%' }}>
    <Box sx={{ padding: '1rem' }}>
    <Typography variant='h5' sx={{ textAlign: 'start' }}>Recent Tools</Typography>
    </Box>
      <Table sx={{ minWidth: 615 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tool</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Users</TableCell>
            <TableCell align="right">Monthly Cost</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.owner_department}</TableCell>
              <TableCell align="right">{item.active_users_count ?? '0'}</TableCell>
              <TableCell align="right">{item.monthly_cost ?? '0'}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}