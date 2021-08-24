import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "./components/table";
import { getWorkersAC } from './redux/actionCreators/getWorkersAC';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getWorkersAC();
    dispatch(action);
  }, []);

  return (
    <div className="App">
      <Table />
    </div>
  );
}
