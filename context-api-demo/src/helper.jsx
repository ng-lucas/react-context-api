export function convertToUSD(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

export function capitalizeFirstChar(chars) {
  const chars_arr = chars.split(' ');
  for (let i = 0; i < chars_arr.length; i++) {
    chars_arr[i] = chars_arr[i][0].toUpperCase() + chars_arr[i].slice(1)
  }
  return chars_arr.join(' ')
} 