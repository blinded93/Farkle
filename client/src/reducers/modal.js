const initialState = {
  modalShown: false,
  modalType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_SHOW':
      return {
        modalShown: true,
        modalType: action.modalType
      }

    case 'MODAL_CLOSE':
      return {
        ...state,
        modalShown: false
      }

    default:
      return state
  }
}