import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const student = await Student.create({
      first_name: 'Caio',
      last_name: 'Cesar',
      email: 'caio@gmail.com',
      age: 18,
      weight: 70.5,
      height: 1.65,
    });

    res.json({
      student,
    });
  }
}

export default new HomeController();
