exports.globalMiddleware = (req, res, next) => {
  res.locals.aGlobalVariable = 'A global variable';
  next();
};
