let data = [1, 32, 3, 4, 23, 4, 29];

function linearSearch(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log([arr[i]])
    if(arr[i]===val){
        return i
    }
  }
}


console.log("linera",linearSearch(3,data))