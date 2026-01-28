import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'


function App() {

  return (
    <>
      <div className='cardContainer'>
        <CardDashboard/>
      </div>
      <TableDashboard/>
    </>
  )
}

export default App
