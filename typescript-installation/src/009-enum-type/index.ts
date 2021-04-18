enum Colors {
  Red, // 0
  Green, // 1
  Blue, // 2
}

console.log(Colors);
console.log(Colors.Red); // 0
console.log(Colors[0]); // Red !!!!!! Careful

enum StatusCode {
  NotFound = 404,
  OK = 200,
}

enum StatusCode {
  InternalServerError = 500,
}

// TS Will merge both StatusCode enums into 1

console.log(StatusCode.NotFound);
console.log(StatusCode[404]);
console.log(StatusCode[0]); // undefined
