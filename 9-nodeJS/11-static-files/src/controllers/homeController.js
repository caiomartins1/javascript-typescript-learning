exports.homePage = (req, res) => {
  res.render('index');
};

exports.handlePost = (req, res) => {
  res.send(`I'm the post handler`);
};
