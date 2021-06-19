type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// TS wont look for the type User, but will look for the properties required for the method
const bdUser = {
  username: 'John',
  password: 'test',
};
const sentUser = {
  username: 'John',
  password: 'test',
  example: 'asdkhaskdjhasd',
};

const loggedIn = verifyUser(bdUser, sentUser);

export { bdUser };
