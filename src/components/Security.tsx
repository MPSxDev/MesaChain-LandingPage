import type React from 'react';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Security</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Security Commitment</h2>
              <p className="text-gray-600">
                At MesaChain, we prioritize the security of your data and transactions. Our
                blockchain-based platform implements multiple layers of security measures to protect
                your information and ensure the integrity of your operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Immutable transaction records</li>
                <li>Distributed ledger technology</li>
                <li>Cryptographic verification of all transactions</li>
                <li>Smart contract security audits</li>
                <li>Regular blockchain network monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data centers with physical security measures</li>
                <li>Compliance with industry security standards</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Two-factor authentication (2FA)</li>
                <li>Secure password policies</li>
                <li>Session management and timeout</li>
                <li>IP-based access controls</li>
                <li>Account activity monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Best Practices for Users</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use strong, unique passwords</li>
                <li>Enable two-factor authentication</li>
                <li>Keep your private keys secure and never share them</li>
                <li>Regularly update your security settings</li>
                <li>Be cautious of phishing attempts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Incident Response</h2>
              <p className="text-gray-600">
                We maintain a dedicated security team that monitors our systems 24/7. In the event
                of a security incident, we have established procedures to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>Quickly identify and contain the incident</li>
                <li>Notify affected users promptly</li>
                <li>Investigate the root cause</li>
                <li>Implement corrective measures</li>
                <li>Prevent future occurrences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Security Certifications</h2>
              <p className="text-gray-600">
                Our platform undergoes regular security audits and maintains compliance with
                industry standards. We are committed to achieving and maintaining relevant security
                certifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Reporting Security Issues
              </h2>
              <p className="text-gray-600">
                If you discover a security vulnerability or have concerns about our security
                practices, please contact our security team at:
                <br />
                Email: security@mesachain.com
                <br />
                We appreciate your help in keeping our platform secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Updates to Security Measures
              </h2>
              <p className="text-gray-600">
                We continuously improve our security measures to address emerging threats and
                maintain the highest standards of protection for our users.
              </p>
              <p className="text-gray-600 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
