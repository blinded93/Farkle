export const noneBlankStringValues = (modalType, obj) => {
  const nonBlankValues = {}

  for (const key in obj) {
    if (obj[key] !== '') {
      nonBlankValues[key] = obj[key]
    }
  }

  return { [modalType.toLowerCase()]: nonBlankValues }
}

export const isEmpty = (obj) => (
  obj && Object.keys(obj).length === 0
)