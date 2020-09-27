exports.globalMiddleware = (req, res, next) => {
  res.locals.aGlobalVariable = 'A global variable';
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render('404');
  }

  next();
};

exports.csrfToken = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
