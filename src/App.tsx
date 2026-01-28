import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { HeaderDashboard } from './components/HeaderDashboard/HeaderDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'
import Tools from './pages/Tools'


function App() {

  return (
    <>
      {/* Header TOUJOURS visible */}
      <HeaderDashboard />

      {/* Contenu dynamique */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="cardContainer">
              <CardDashboard />
              <TableDashboard />
            </div>
          }
        />

        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  )
}

export default App
