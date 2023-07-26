import { Button } from '@components/common/button'
import useFilter from 'hooks/useFilter'
import React, { useState } from 'react'

interface PropsFilter {
    filterForTitle: () => void[]
}

const FilterSchedule = ({filterForTitle}: PropsFilter) => {
    const [search, setSearch] = useState("");
    const {handleButtonClick} = useFilter();
    
  return (
    <>
    <input
        type="text"
        value={search}
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterForTitle()?.map((turno: any) => (
        <table>
          <tr>
            <td>Clienta</td>
            <td>fecha</td>
            <td>Accion</td>
          </tr>
          <tr>
            <td>{turno.title}</td>
            <td>{new Date(turno.end).toLocaleString()}</td>
            <td>
              <Button onClick={() => handleButtonClick(turno.start)}>Ir</Button>
            </td>
          </tr>
        </table>
      ))}
    </>
  )
}

export default FilterSchedule