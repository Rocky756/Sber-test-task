import { GET_WORKERS, ADD_WORKER, DELETE_WORKER } from "../types";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_WORKERS:
      return {
        ...state,
        workers: action.payload,
      };
    case ADD_WORKER:
      return {
        ...state, 
        workers: action.payload,
      }
    case DELETE_WORKER:
      const workers = state.workers.filter((worker) => worker._id !== action.payload);
      return {
        ...state,
        workers,
      }
    
    default:
      return state;
  }
};
