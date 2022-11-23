import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

export default function produceReducer(state = {}, action) {
  // debugger;
  // console.log(produceData);
  Object.freeze(state);

  const nextState = { ...state };

  switch (action.type) {
    case POPULATE:
      return { ...nextState, ...action.produce };
    default:
      return state;
  }
}

export const populateProduce = () => ({
  type: POPULATE,
  produce: produceData,
});
