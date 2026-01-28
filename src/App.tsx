import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { HeaderDashboard } from './components/HeaderDashboard/HeaderDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'
import Tools from './pages/Tools'
import { Box, Typography } from '@mui/material'


function App() {

  return (
    <>
      <HeaderDashboard />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Box sx={{ color: 'grey' }}>
              <Typography>Internal tools dashboard</Typography>
              <Typography>Monitor and manage your organization's software tools and expenses</Typography>
            </Box>
            <div className="Container">
              <CardDashboard />
              <TableDashboard />
            </div>
            </>
          }
        />

        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  )
}

export default App
