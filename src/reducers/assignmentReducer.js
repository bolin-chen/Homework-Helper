const assignment = (state, {type, title, content}) => {
  switch (type) {
    case 'ADD_ASSIGNMENT':
      return {
        title: title,
        content: content
      }
    default:
      return state
  }
}

const assignmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      return [
        ...state,
        assignment(undefined, action)
      ]
    case 'GET_ASSIGNMENTS_SUCCESS':
      return action.assignments
    default:
      return state
  }
}

export default assignmentReducer
