/* record the selection */

// in case init with no select, cannot be undefined
// state means ID here
export default (state=null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload // return the para in calling
    default:
      return state
  }
}