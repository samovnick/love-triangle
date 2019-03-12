/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    //walk to path
    let first, second, third;
    first = i + 1;
    second = preferences[first - 1];
    if (second == first) continue;
    third = preferences[second - 1];
    if (third == second) continue;
    if (preferences[third - 1] == first) {
      count++;
    }
  }

  return count / 3;
};
