//From my previous version of insertion sort
//Samuel Gonzalez Garcia 2/13/2024

function insertionSortReverse(array) {
    //console.log("starting array: " + array)
      for(var i = (array.length - 2 ); i >= 0; i--) {
          var val = array[i];
          var j;
          for(j = i; j < array.length && val > array[j+1]; j++) {
            array[j] = array[j+1]
          }
          array[j] = val;
        }
        return array;
  }