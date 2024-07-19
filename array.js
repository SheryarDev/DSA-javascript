console.log("array in ds");
console.log("array in ds");

const data = [30, 20, 45, , 76, 20, 80];

function deleteArrayElem(data) {
  let position = 3;
  for (let i = position; i < data.length - 1; i++) {
    console.log(i);
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
}

// deleteArrayElem(data);
