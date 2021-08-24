import React,  { useState } from 'react';

export const OneInputRow = ({ nameState, setNameState, dateState, setDateState, salaryState, setsalaryState }) => {



  return (
    <>
      <tr>
        <td>
          <input  
          name='name'
          value={nameState} 
          type="text"
          onChange={({ target }) => setNameState((target.value))} 
          placeholder='Фамилия, имя'
          />
        </td>
        <td>
          <input 
          name='dateBirth'
          value={dateState} 
          type="date" 
          onChange={({ target }) => setDateState(target.value)} 
          /> 
        </td>
        <td>
           <input 
          name='salary'
          value={salaryState} 
          type="text" 
          onChange={({ target }) => setsalaryState((target.value))} 
          placeholder='50000руб'
          /> 
        </td>
      </tr>
    </>
  );
};

