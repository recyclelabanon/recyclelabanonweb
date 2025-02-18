import Contact from "../Models/Contact.js";
import validator from 'validator';

const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ error: "Contact with this email already exists" });
    }

    await Contact.create({ name, email, message });
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error retrieving contact data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteContactForm = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteContact = await Contact.findByIdAndDelete(id);
        if (!deleteContact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export { contactForm, getAllContacts, deleteContactForm };

