const Contact = require("../model/model");

module.exports.addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const result = await newContact.save();

    return res.send("sucess");
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    return res.send("sucess");
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.deleteContact = async (req, res) => {
  try {
    await Contact.findOneAndDelete({ phonenumber: req.params.phonenumber });
    return res.send("sucess");
  } catch (error) {
    res.send(error);
  }
};

module.exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.find();

    return res.send(contact);
  } catch (error) {
    res.send(error);
  }
};
