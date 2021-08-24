import React from 'react';
import { OneRow } from './oneRow';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Form } from './Form';

export default function Table() {

  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const workers = useSelector((state) => state.workers);

  return (
    <div className='tableCont'>
      <h3>Сотрудники</h3>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            {header?.map((head) => (
              <th scope="col">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workers?.map((worker) => (
            <OneRow key={worker._id} worker={worker}/>
          ))}
        </tbody>
      </table>
      <h5>Ввести данные по сотруднику</h5>
      <Form />
    </div>
  );
}
