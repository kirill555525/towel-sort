
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const lst = [];
  if (typeof(matrix) !== 'object') return lst;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) lst.push(...matrix[i]);
    else lst.push(...matrix[i].reverse());
  }

  return lst;
}
