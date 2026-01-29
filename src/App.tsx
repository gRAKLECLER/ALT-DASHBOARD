import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { HeaderDashboard } from './components/HeaderDashboard/HeaderDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'
import Tools from './pages/Tools'
import { Typography } from '@mui/material'
import Analytics from './pages/Analytics'


function App() {

  return (
    <>
      <HeaderDashboard />
      <Routes>
        <Route
          path="/"
          element={
            <div className='container'>
            <div className="content">
              <div className='mainText'>
                <Typography variant='h4' fontWeight={'bold'}>Internal tools dashboard</Typography>
                <Typography variant='caption' fontSize={'18px'}>Monitor and manage your organization's software tools and expenses</Typography>
              </div>
              <CardDashboard />
              <TableDashboard />
            </div>
            </div>
          }
        />

        <Route path="/tools" element={<Tools />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </>
  )
}

export default App
