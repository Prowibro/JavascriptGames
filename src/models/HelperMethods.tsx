
export const getAllIndexes = (arr: Array<number>, val: number): Array<number> => {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
}