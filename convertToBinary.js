// convert integer to binary
function convert(int) {
  let num = int;
  let bi = "";

  // Determine the highest mutliple of two smaller than the int to be converted
  let interval = 1;
  while (interval * 2 <= num) {
    interval = interval * 2;
  }

  // If the current multiple of two is less than the num, subtract it and add a 1 to the binary string, otherwise add a 0 and move to the next multiple of two.
  while (num >= 1) {
    if (num >= interval) {
      bi += "1";
      num -= interval;
    } else {
      bi += "0";
    }
    interval = interval / 2;
  }

  // If the num is zero but interval has not been divided down all the way, fill the binary string in the with zeroes and divide interval by 2 until the interval equals 1.
  // Without the loop below, the binary string for 1000 (1111101000), for example, would get outputted as 1111101.
  while (interval >= 1) {
    interval = interval / 2;
    bi += "0";
  }

  // return the binary string
  return bi;
}

let testInt = 1000;
console.log(convert(testInt));
