import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  // State for managing modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Modal styles to customize its appearance
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '1200px', // Adjust the maximum width as needed
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  };

  // Effect to manage body overflow based on modal status
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    // Cleanup function to restore body overflow when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div id="about" className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <span
              key={`${section.name}-${index}`}
              onClick={openModal}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </span>
          ))}
        </div>
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Section Modal"
        style={modalStyles} // Apply the custom styles
      >
<div>
  <h1>Privacy Policy</h1>
  <p><strong>1. Introduction</strong></p>
  <p>[Fool's Pizza] ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data, especially when using Google Analytics.</p>

  <p><strong>2. What is Google Analytics?</strong></p>
  <p>Google Analytics is a web analytics service provided by Google Inc. ("Google"). It uses cookies and other technologies to collect and analyze information about the use of our website. This information is used to generate reports and statistics to help us understand how visitors interact with our site.</p>

  <p><strong>3. Data Collected by Google Analytics</strong></p>
  <p>Google Analytics may collect various types of data, including:</p>
  <ul>
    <li>IP addresses</li>
    <li>Browser types</li>
    <li>Operating systems</li>
    <li>Device types</li>
    <li>Geographic locations</li>
    <li>Page views and interactions</li>
  </ul>
  <p>This data is collected anonymously and does not personally identify you. However, it may be considered personal data under the GDPR.</p>

  <p><strong>4. Legal Basis for Processing</strong></p>
  <p>The legal basis for processing personal data through the use of Google Analytics is our legitimate interest in understanding how visitors interact with our website and improving its functionality and content. We ensure that the data collected is used in a manner consistent with the purposes outlined in this Privacy Policy.</p>

  <p><strong>5. Your Consent</strong></p>
  <p>By using our website, you consent to the processing of your data by Google Analytics as described in this Privacy Policy.</p>

  <p><strong>6. Google's Data Processing Amendment</strong></p>
  <p>To comply with the GDPR, we have entered into a Data Processing Amendment (DPA) with Google. The DPA includes Google's commitment to process data in accordance with the GDPR requirements.</p>

  <p><strong>7. Your Rights under the GDPR</strong></p>
  <p>You have the right to:</p>
  <ul>
    <li>Access your personal data</li>
    <li>Rectify inaccuracies in your personal data</li>
    <li>Erase your personal data</li>
    <li>Restrict processing of your personal data</li>
    <li>Object to the processing of your personal data</li>
    <li>Receive your personal data in a structured, commonly used, and machine-readable format</li>
  </ul>
  <p>To exercise these rights or for any questions regarding our use of Google Analytics and compliance with the GDPR, please contact us at [your contact email/address].</p>

  <p><strong>8. Changes to this Policy</strong></p>
  <p>We reserve the right to update or modify this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any such changes will be effective immediately upon posting the updated Privacy Policy on our website.</p>
</div>

        <button onClick={closeModal}>Accept Policy</button>
      </Modal>
    </div>
  );
};

export default About;
