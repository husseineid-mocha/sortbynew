export const mergeSortAnimations = (array: any) => {
  const animations: any = [];
  const copyArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, copyArray, animations);
  return animations;
};
const mergeSortHelper = (
  mainArray: any,
  start: any,
  end: any,
  copyArr: any,
  animations: any
) => {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);

  mergeSortHelper(copyArr, start, middle, mainArray, animations);
  mergeSortHelper(copyArr, middle + 1, end, mainArray, animations);
  mergeSort(mainArray, start, middle, end, copyArr, animations);
};

const mergeSort = (
  mainArray: any,
  start: any,
  middle: any,
  end: any,
  copyArr: any,
  animations: any
) => {
  let k = start;
  let i = start;
  let j = middle + 1;

  while (i <= middle && j <= end) {
    animations.push([i, j]);

    if (copyArr[i] <= copyArr[j]) {
      animations.push([
        [k, copyArr[i]],
        [k, copyArr[i]],
      ]);
      animations.push([i, j]);
      mainArray[k] = copyArr[i];
      i++;
    } else {
      animations.push([
        [k, copyArr[j]],
        [k, copyArr[j]],
      ]);
      animations.push([i, j]);
      mainArray[k] = copyArr[j];
      j++;
    }
    k++;
  }

  while (i <= middle) {
    animations.push([i, i]);
    animations.push([
      [k, copyArr[i]],
      [k, copyArr[i]],
    ]);
    animations.push([i, i]);
    mainArray[k] = copyArr[i];
    k++;
    i++;
  }

  while (j <= end) {
    animations.push([j, j]);
    animations.push([
      [k, copyArr[j]],
      [k, copyArr[j]],
    ]);
    animations.push([j, j]);
    mainArray[k] = copyArr[j];
    k++;
    j++;
  }
};
