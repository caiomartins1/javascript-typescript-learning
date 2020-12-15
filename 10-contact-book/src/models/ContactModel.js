const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  phoneNumber: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: Date.now() },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

Contact.searchById = async function (id) {
  if (typeof id !== 'string') return;
  const user = await ContactModel.findById(id);
  return user;
};

Contact.prototype.register = async function () {
  this.validate();

  if (this.errors.length > 0) return;

  this.contact = await ContactModel.create(this.body);
};

Contact.prototype.validate = function () {
  this.cleanUp();

  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push('Invalid E-mail');
  }

  if (!this.body.firstName) {
    this.errors.push('First name required!');
  }

  if (!this.body.email && !this.body.phoneNumber) {
    this.errors.push('At least one contact must exist: Email or phone number');
  }
};

Contact.prototype.cleanUp = function () {
  for (let key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    firstName: this.body.firstName,
    lastName: this.body.lastName,
    email: this.body.email,
    phoneNumber: this.body.phoneNumber,
  };
};

module.exports = Contact;
