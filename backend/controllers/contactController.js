const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, message, acceptedPrivacy } = req.body;

    if (!name || !email || !message || !acceptedPrivacy) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }

    const contact = new Contact({ name, email, phone, message, acceptedPrivacy });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
