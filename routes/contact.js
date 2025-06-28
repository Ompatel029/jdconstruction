const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
  res.render('pages/contact'); 
});

router.post('/', async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;
    const contact = new Contact({ firstname, lastname, email, phone, message });
    await contact.save();
    console.log('✅ JD Constructions contact message saved.');
    res.redirect('/');
  } catch (err) {
    console.error("❌ JD Contact form error:", err.message);
    res.status(500).send("Form submission failed.");
  }
});

module.exports = router;
