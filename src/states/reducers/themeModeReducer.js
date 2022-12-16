const reducers = (state='light',action) => {
  if (action.type === 'toggle-theme'){
    return action.payload
  }
  else {
    return state
  }
}
export default reducers