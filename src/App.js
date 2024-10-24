import React, { useState } from 'react';
import './App.css'; // We'll include the CSS separately

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    certificateId: '',
    description: '',
    date: ''
  });

  const [showCertificate, setShowCertificate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEdit = () => {
    setShowCertificate(false);
  };

  return (
    <div className="container">
      {!showCertificate ? (
        <div className="form-container">
          <h2>Certificate Generator</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Recipient Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Certificate ID:</label>
              <input
                type="text"
                value={formData.certificateId}
                onChange={(e) => setFormData({ ...formData, certificateId: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <button type="submit">Generate Certificate</button>
          </form>
        </div>
      ) : (
        <div className="certificate-container">
          <div className="button-container no-print">
            <button onClick={handlePrint}>Download PDF</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
          <div className="certificate">
            <div className="certificate-content">
              <h1>Certificate of Internship</h1>
              <div className="logo">TUBLIAN CERTIFIED</div>
              <p className="recipient-text">successfully completed the 4-Week AI Internship Program at Tublian,
                demonstrating exceptional dedication and a commendable work ethic
                throughout the internship. The contributions made, including the development of
                an advanced chatbot, have added significant value to the AI community.</p>
              <h2 className="recipient-name">{formData.name}</h2>
              <p className="description">{formData.description}</p>
              <div className="certificate-footer">
                <div className="date-section">
                  <p>Date</p>
                  <span>{formData.date}</span>
                </div>
                <div className="certificate-id-section">
                  <p>Certificate ID</p>
                  <span>{formData.certificateId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;