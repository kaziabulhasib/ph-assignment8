import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='form-container my-24'>
      <h2 className='form-header'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='form-label'>
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='form-textarea'
            required
          />
        </div>
        <button type='submit' className='form-submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
