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
    console.log('Jk Constructions contact message saved.');

    res.send(`
      <script>
        alert("Your message has been submitted successfully!");
        window.location.href = "/contact";
      </script>
    `);
  } catch (err) {
    console.error("Jk Contact form error:", err.message);
    res.send(`
      <script>
        alert("Failed to submit your message. Please try again.");
        window.location.href = "/contact";
      </script>
    `);
  }
});

module.exports = router;
