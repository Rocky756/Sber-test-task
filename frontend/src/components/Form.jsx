import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { OneInputRow } from './OneInputRow';
import { addWorkersAC } from '../redux/actionCreators/getWorkersAC';

export const Form = () => {

  const dispatch = useDispatch();
  const [numRows, setNumRows] = useState([1]);
  const [nameState, setNameState] = useState('');
  const [dateState, setDateState] = useState(Date);
  const [salaryState, setsalaryState] = useState('');


  const submitHandler = async (event) => {
    event.preventDefault();
    let action = addWorkersAC(nameState, dateState, salaryState);
    dispatch(action);
    setNameState('');
    setDateState(Date);
    setsalaryState('');


  };

  return (
    <div className='tableForm'>
      <form onSubmit={submitHandler}>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Фио</th>
              <th scope="col">Дата рождения</th>
              <th scope="col">Зарплата</th>
          </tr>
          </thead>
          <tbody>
            {numRows.map((num, index) => (
              <OneInputRow 
              key={num.index} 
              nameState={nameState} setNameState={setNameState}
              dateState={dateState} setDateState={setDateState}
              salaryState={salaryState} setsalaryState={setsalaryState}
              />
            ))}
          </tbody>
        </table>
        <section className='formBtns'>
          <button 
          type='submit' 
          className='btn btn-success'
          // onClick={((e) => submitHandler(e))}
          >Сохранить
          </button>
        </section>
      </form>
    </div>
  );
};


