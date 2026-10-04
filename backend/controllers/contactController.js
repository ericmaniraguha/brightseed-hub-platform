const Message = require('../models/Message');
const { sendEmail } = require('../utils/sendEmail');

// POST /api/v1/contact — Submit contact form (public)
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save message to database
    const newMessage = await Message.create({ name, email, subject, message });

    // Send notification email to admin
    await sendEmail({
      to: process.env.SMTP_FROM,
      subject: `[BrightSeed Hub] New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007BFF;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e2e8f0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #007BFF;">
            ${message}
          </div>
          <hr style="border: 1px solid #e2e8f0; margin-top: 24px;" />
          <p style="color: #64748b; font-size: 13px;">This message was sent via the BrightSeed Hub website contact form.</p>
        </div>
      `,
      text: `New contact from ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`
    });

    // Send auto-reply to the user
    await sendEmail({
      to: email,
      subject: `Thank you for contacting BrightSeed Hub`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007BFF;">Thank you, ${name}!</h2>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>Here's a summary of your inquiry:</p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <br/>
          <p>Best regards,<br/><strong>BrightSeed Hub Team</strong></p>
          <hr style="border: 1px solid #e2e8f0;" />
          <p style="color: #64748b; font-size: 12px;">BrightSeed Hub Ltd | info@brightseedhub.com</p>
        </div>
      `,
      text: `Thank you ${name}! We've received your message about "${subject}" and will respond within 24 hours.`
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: newMessage
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
};

// GET /api/v1/contact — Get all messages (admin)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

// PATCH /api/v1/contact/:id/read — Mark message as read
const markAsRead = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });

    message.read = true;
    await message.save();
    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update message' });
  }
};

// DELETE /api/v1/contact/:id — Delete a message
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });

    await message.destroy();
    res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

module.exports = { submitContact, getMessages, markAsRead, deleteMessage };
