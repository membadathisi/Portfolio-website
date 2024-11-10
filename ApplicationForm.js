import React, { useState, useRef } from 'react';
import './ApplicationForm.css'; // Create a CSS file for styling the form

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gradeReport: null,
    idDocument: null,
    parentIdDocument: null,
    proofOfAddress: null,
  });

  // Use refs to directly reset the file input fields
  const gradeReportRef = useRef(null);
  const idDocumentRef = useRef(null);
  const parentIdDocumentRef = useRef(null);
  const proofOfAddressRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value, //Use files[0] for file
    });
  };

  const handleRemoveFile = (fieldName, inputRef) => {
    setFormData({
      ...formData,
      [fieldName]: null,
    });
    if (inputRef && inputRef.current) {
      inputRef.current.value = ''; // Clear the file input in the DOM
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server or API.
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      gradeReport: null,
      idDocument: null,
      parentIdDocument: null,
      proofOfAddress: null,
    });
    alert('Thank you for your application! We will get back to you soon.');
  };

  return (
    <div className="application-form-container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="gradeReport">Grade Report:</label>
          <input
            type="file"
            id="gradeReport"
            name="gradeReport"
            onChange={handleChange}
            required
          />
          {formData.gradeReport && (
            <button
              type="button"
              onClick={() => handleRemoveFile('gradeReport', gradeReportRef)}
            >
              Remove File
            </button>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="idDocument">ID Document:</label>
          <input
            type="file"
            id="idDocument"
            name="idDocument"
            onChange={handleChange}
            required
          />
          {formData.idDocument && (
            <button
              type="button"
              onClick={() => handleRemoveFile('idDocument', idDocumentRef)}
            >
              Remove File
            </button>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="parentIdDocument">Parent's ID Document:</label>
          <input
            type="file"
            id="parentIdDocument"
            name="parentIdDocument"
            onChange={handleChange}
            required
          />
          {formData.parentIdDocument && (
            <button
              type="button"
              onClick={() =>
                handleRemoveFile('parentIdDocument', parentIdDocumentRef)
              }
            >
              Remove File
            </button>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="proofOfAddress">Proof of Address:</label>
          <input
            type="file"
            id="proofOfAddress"
            name="proofOfAddress"
            onChange={handleChange}
            required
          />
          {formData.proofOfAddress && (
            <button
              type="button"
              onClick={() =>
                handleRemoveFile('proofOfAddress', proofOfAddressRef)
              }
            >
              Remove File
            </button>
          )}
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
