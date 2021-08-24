import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodoAC } from '../redux/actionCreators/deleteWorkerAC';

export const OneRow = ({ worker }) => {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers);

  const deleteHandler = async() => {
    const action = deleteTodoAC(worker._id);
    dispatch(action);
  }
  return (
    <>
        <tr>
          <td>{worker.name}</td>
          <td>{worker.dateBirth}</td>
          <td>{worker.salary}</td>
          <td>{worker.tax}</td>
          <div className="btnCont">
          <button 
          type="button" 
          className="btn btn-warning deleteBtn"
          onClick={deleteHandler}
          ></button>
          </div>
        </tr>
    </>
  );
};

