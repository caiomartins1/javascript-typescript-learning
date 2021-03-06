import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'First name should contain min of 3 characters and max 255.',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Last name should contain min of 3 characters and max 255.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email already exists.',
          },
          validate: {
            isEmail: {
              msg: 'Invalid Email.',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Age must be a number',
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Weight must be a number',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Height must be a number',
            },
          },
        },
      },
      { sequelize },
    );
    return this;
  }
}
