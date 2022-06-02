import './App.css';
import CashForm from 'components/cashForm/CashForm';
import { useState } from 'react';
import CashRegister from 'components/cashRegister/CashRegister';

const initialDb = [
  {id: 1, manicure: "mel", income: 20, exit: 30, credit: true}
]

function App() {
  const [db, setDb] = useState(initialDb);

  const createData = (data)=>{
    data.id = Date.now()
    setDb([...db, data])
  }
  
  return (
    <div className="App">
     <CashForm createData={createData}/>
     {db &&(
     <CashRegister db={db}/>)}
    </div>
  );
}

export default App;
