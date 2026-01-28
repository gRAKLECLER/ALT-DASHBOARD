import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { HeaderDashboard } from './components/HeaderDashboard/HeaderDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'


function App() {

  return (
    <>
    <HeaderDashboard/>
      <div className='cardContainer'>
        <CardDashboard/>
      </div>
      <TableDashboard/>
    </>
  )
}

export default App
