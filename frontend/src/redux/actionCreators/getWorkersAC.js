import { GET_WORKERS, ADD_WORKER } from "../types";

export const getWorkersFetchAC = async () => {
  const response = await fetch("/tab/getworkers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};



export const getWorkersAC = () => async (dispatch) => {
  const { workers } = await getWorkersFetchAC();
    dispatch(
      {
      type: GET_WORKERS,
      payload: workers,
      });
};

export const addWorkerFetchAC = async (nameState, dateState, salaryState) => {
  console.log(nameState, dateState, salaryState);
  const response = await fetch("/tab/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nameState, dateState, salaryState }),
  })
    const result = await response.json();
    console.log(result);
    return result;
};

export const addWorkersAC = (nameState, dateState, salaryState) => async (dispatch) => {
  const { workers } = await addWorkerFetchAC(nameState, dateState, salaryState);
  console.log(workers);
    dispatch(
      {
      type: ADD_WORKER,
      payload: workers,
      });
};
