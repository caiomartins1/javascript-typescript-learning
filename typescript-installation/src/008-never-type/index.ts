function genError(): never {
  // TS infers the type as void but is recommended to use never
  // to warn that this funcion throws an error that must be threated or has an infinite loop

  throw new Error('Error');
}
