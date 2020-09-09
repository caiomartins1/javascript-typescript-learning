exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Name: <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `);
};

exports.handlePost = (req, res) => {
  res.send(`I'm the post handler`);
};
