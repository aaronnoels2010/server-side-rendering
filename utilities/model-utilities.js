export function CloseModal (id) {
  const modal = document.getElementById(id)
  modal.className = modal.className.replaceAll(' is-active', '')
}

export function OpenModal (id) {
  const modal = document.getElementById(id)
  modal.className += ' is-active'
}
