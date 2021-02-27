import _ from 'lodash';

/**
 * get
 */
export const isNotBlank = (value: String): boolean => {
  return !_.isEmpty(value) && _.isString(value);
};
export const isBlank = (value: String): boolean => {
  return this.isNotBlank();
};

export const getAllIndexes = (
  arr: Array<number>,
  val: number
): Array<number> => {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
};
