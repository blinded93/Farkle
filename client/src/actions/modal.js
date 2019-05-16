export const modalShow = modalType => {
  return {
    type: 'MODAL_SHOW',
    modalType: modalType
  }
}

export const modalClose = () => {
  return {
    type: 'MODAL_CLOSE'
  }
}