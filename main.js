// Divides array
function mergeSort(arr){
  if (arr.length < 2){
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


function merge(array1, array2){
  let result = [];

  while(array1.length && array2.length){
    let minElement;

    if(array1[0] < array2[0]){
      minElement = array1.shift();
    }
    else{
      minElement = array2.shift();
    }

    result.push(minElement);
  }

  // If there is something left over;
  if (array1.length){
    result = result.concat(array1);
  }
  else{
    result = result.concat(array2);
  }

  return result;
}

const arr = [11, 7, 4, 1, 15, 12, 6000, -3]

mergeSort(arr)