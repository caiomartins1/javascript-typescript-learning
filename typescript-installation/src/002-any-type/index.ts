/* eslint-disable */

// Example where TS cannot infer the type
function displayMsg(msg) { // Implicit any
  return msg;
}


// Explicit any (allowed but try to avoid)
function displayMsgExplicit(msg: any) {
  return msg;
}