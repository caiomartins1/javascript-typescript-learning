class HomeController {
  index(req, res) {
    res.json({
      working: true,
    });
  }
}

export default new HomeController();
