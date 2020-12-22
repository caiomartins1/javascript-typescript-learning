import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
