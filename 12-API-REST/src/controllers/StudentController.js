import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      return res.json(student);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      await student.destroy();
      return res.json({ deleted: true });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new StudentController();
