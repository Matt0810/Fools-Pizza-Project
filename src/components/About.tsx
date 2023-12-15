import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '1200px',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  };

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

      {isLocalStorageAvailable() && !localStorage.getItem('cookiePolicyAccepted') && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center">
          <p>
            We use cookies to improve your experience. By continuing to browse, you accept our{' '}
            <button onClick={openModal} className="underline focus:outline-none">
              cookie policy
            </button>
          </p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Section Modal"
        style={modalStyles}
      >
        <div>
          {/* Privacy Policy content */}
          <h1>Privacy Policy Section: Google Analytics and GDPR Compliance</h1>
          <p>1. Introduction</p>
          <p>[Fool's Pizza] ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data, especially when using Google Analytics.</p>

          <p>2. What is Google Analytics?</p>
          <p>Google Analytics is a web analytics service provided by Google Inc. ("Google"). It uses cookies and other technologies to collect and analyze information about the use of our website. This information is used to generate reports and statistics to help us understand how visitors interact with our site.</p>

          <p>3. Data Collected by Google Analytics</p>
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

          <p>4. Legal Basis for Processing</p>
          <p>The legal basis for processing personal data through the use of Google Analytics is our legitimate interest in understanding how visitors interact with our website and improving its functionality and content. We ensure that the data collected is used in a manner consistent with the purposes outlined in this Privacy Policy.</p>

          <p>5. Your Consent</p>
          <p>By using our website, you consent to the processing of your data by Google Analytics as described in this Privacy Policy.</p>

          <p>6. Google's Data Processing Amendment</p>
          <p>To comply with the GDPR, we have entered into a Data Processing Amendment (DPA) with Google. The DPA includes Google's commitment to process data in accordance with the GDPR requirements.</p>

          <p>7. Your Rights under the GDPR</p>
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

          <p>8. Changes to this Policy</p>
          <p>We reserve the right to update or modify this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any such changes will be effective immediately upon posting the updated Privacy Policy on our website.</p>
        </div>

        <button
          onClick={() => {
            if (isLocalStorageAvailable()) {
              localStorage.setItem('cookiePolicyAccepted', 'true');
            }
            closeModal();
          }}
        >
          Accept Policy
        </button>
      </Modal>
    </div>
  );
};

export default About;
