/**
 * Recursive Function: A function that calls itself.
 */
function rec(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  rec(max);
}

rec(0);
