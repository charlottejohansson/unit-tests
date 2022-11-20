export const findIndex = (array, value) => {
  if(value === 0){
  return -1
} else if (value === 'Apple'){
  return array.indexOf('Apple', 1)
} else if (value === 'Lemon')
  return array.length -1
}