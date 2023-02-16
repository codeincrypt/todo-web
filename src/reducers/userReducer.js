export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === 'TODOUSER') {
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  return state;
};