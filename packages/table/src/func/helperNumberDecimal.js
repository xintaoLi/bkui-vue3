function helperNumberDecimal (numStr) {
  return (numStr.split('.')[1] || '').length
}

export default helperNumberDecimal
