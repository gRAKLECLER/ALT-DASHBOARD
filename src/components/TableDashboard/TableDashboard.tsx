import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import type { Tools } from '../../types/tools';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const TableDashboard = () => {
    const [data, setData] = useState<Tools[]>([])

    axios.get('https://tt-jsonserver-01.alt-tools.tech/tools').then(item => {
        setData(item.data)
    })


  return (
    <TableContainer component={Paper}>
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