import * as bigInt from 'big-integer';

export function createBigIntAccessor(applicableColumns) {
  let bigIntColumns: Set<String> = new Set(applicableColumns);
  return (item, property) => {
    if (bigIntColumns.has(property)) {
      return bigInt(item[property]);
    } else {
      return item[property];
    }
  }
}
