import './App.css'
import { CardDashboard } from './components/CardDashboard/CardDashboard'
import { TableDashboard } from './components/TableDashboard/TableDashboard'

function App() {

  return (
    <>
      <div className='cardContainer'>
        <CardDashboard title='Monthly Budget' text='28330' data='+12%'/>
        <CardDashboard title='Monthly Budget' text='28330' data='+12%'/>
        <CardDashboard title='Monthly Budget' text='28330' data='+12%'/>
        <CardDashboard title='Monthly Budget' text='28330' data='+12%'/>
      </div>
      <TableDashboard/>
    </>
  )
}

export default App
