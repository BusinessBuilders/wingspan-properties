import React, { useState } from 'react';
import './App.css';

function App() {
  const handleDownloadVideo = () => {
    const link = document.createElement('a');
    link.href = 'wingspan-video.mp4';
    link.download = 'Wingspan-Properties-Hydroseeding.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="company-name">Wingspan Properties LLC</h1>
          <p className="tagline">Professional Home Construction</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="video-section">
            <h2>Your Project Video</h2>
            <div className="video-container">
              <video controls width="100%" height="auto">
                <source src="wingspan-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="download-section">
              <button className="download-btn" onClick={handleDownloadVideo}>
                📱 Download Video to Your Phone
              </button>
              <p className="download-note">
                Save this video to share with potential customers
              </p>
            </div>

            <div className="project-details">
              <h3>Professional Hydroseeding Project</h3>
              <p>
                This video showcases the professional hydroseeding work completed for your latest construction project.
                Quality landscaping services to complement your home building expertise.
              </p>
            </div>
          </div>

          <section className="contact-section">
            <h3>Quality Construction Deserves Quality Landscaping</h3>
            <div className="contact-info">
              <p>Professional hydroseeding services to complement your home construction projects</p>
              <div className="contact-details">
                <p>🏗️ <strong>Home Construction Excellence</strong></p>
                <p>🌱 <strong>Professional Landscaping Partner</strong></p>
                <p>⚡ <strong>Complete Project Solutions</strong></p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Wingspan Properties LLC. Professional Home Construction.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
