import React from 'react';
import { PiCertificateFill } from 'react-icons/pi';
import './Training.css';

const Training = () => {
  const trainingData = [
    {
      id: 1,
      title: 'Cyber Security Training Program',
      institution: 'Lovely Professional University (LPU)',
      duration: 'May\'25 - Jul\'25',
      points: [
        'Acquired foundational knowledge in Cyber Security concepts, threat landscapes, CIA Triad, cyber laws, and data privacy, improving security awareness by 40%.',
        'Practiced networking fundamentals including LAN, WAN, TCP/IP, OSI model, subnetting, and firewall configuration using Packet Tracer, boosting network analysis capability by 35%.',
        'Configured Windows and Linux environments, virtual machines, CLI tools, and system security controls, increasing system handling efficiency by 30%.',
        'Evaluated real-world cyber incidents such as WannaCry and Target Breach while researching certifications (CEH, Security+, OSCP, CISSP), strengthening industry readiness by 30%.'
      ]
    }
  ];

  return (
    <section className="training" id="training">
      <div className="container">
        <div className="training-header fade-in">
          <div className="training-icon">
            <PiCertificateFill size={60} />
          </div>
          <h2 className="training-title">Training & Certifications</h2>
        </div>

        <div className="training-list fade-in" style={{ animationDelay: '0.2s' }}>
          {trainingData.map((training, index) => (
            <div key={training.id} className="training-item" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="training-header-content">
                <div>
                  <h3 className="training-title-card">{training.title}</h3>
                  <p className="training-institution">{training.institution}</p>
                </div>
                <span className="training-duration">{training.duration}</span>
              </div>
              <ul className="training-points">
                {training.points.map((point, idx) => (
                  <li key={idx} className="training-point">
                    <span className="bullet">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
