function floydstriangle(rows) {
  var num = 1;
  for (let i = 0; i < rows; i++) { //Loop for rows
    for (let j = 0; j < i; j++) { //Loop for columns
      console.log(num);
      num++;
    }
  }
}