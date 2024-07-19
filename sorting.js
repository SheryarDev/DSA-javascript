console.log("=========Bubble sort===========");

//"============================================Bubble sort===================================="
//compare and swap to adjacent elements in array to sort it.
const data = [6, 1, 70, 50];

function bubbleSort(data) {
  for (let i = 0; i < data.length; i++) {
    for (j = 0; j < data.length; j++) {
      console.log(data);
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
}
//"============================================selection sort===================================="
//compare the first element of array with all other elements to find and replace it with min or max elem.so on..

function selectionSort(data) {
  for (let i = 0; i < data.length; i++) {
    let minElem = i;
    for (let j = i + 1; j < data.length; j++) {
      console.log(data);
      if (data[j] < [data[minElem]]) {
        minElem = j;
      }
    }
    let temp = data[minElem];
    data[minElem] = data[i];
    data[i] = temp;
  }
  console.log("data", data);
}

// selectionSort(data)

//"============================================Insertion sort===================================="
// find the min or max elem in array and insert it in its correct position

function InsertionSort(data) {
  let current;
  for (let i = 0; i < data.length; i++) {
    current=data[i];
    j = i - 1;
    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = current;
  }
  console.log(data)
}

InsertionSort(data)
