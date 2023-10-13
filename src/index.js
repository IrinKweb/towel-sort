
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix === undefined) {
    return result = []
  }

  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 === 0) {
      matrix[i].reverse()
    }
    for (let k = 0; k < matrix[i].length; k++) {
      result.push(matrix[i][k])
    }
  }
  return result;
}
