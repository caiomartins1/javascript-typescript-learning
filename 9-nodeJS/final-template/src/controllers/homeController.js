exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Injecting content on Views',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
};

exports.handlePost = (req, res) => {
  res.send(req.body);
};
