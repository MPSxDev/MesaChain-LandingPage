import type React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using MesaChain's blockchain-based restaurant management platform,
                you agree to be bound by these Terms of Service and all applicable laws and
                regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600">
                MesaChain provides a blockchain-based platform for restaurant management, including
                but not limited to inventory tracking, supply chain management, and transaction
                processing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>You must be at least 18 years old to use our service</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Blockchain Transactions
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All blockchain transactions are irreversible</li>
                <li>You are responsible for maintaining the security of your private keys</li>
                <li>
                  We are not responsible for any loss of funds due to lost or stolen private keys
                </li>
                <li>Transaction fees may apply and are subject to change</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, features, and functionality of the MesaChain platform are owned by
                MesaChain and are protected by international copyright, trademark, and other
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Unauthorized access to the platform</li>
                <li>Interference with the platform's operation</li>
                <li>Use of the platform for illegal purposes</li>
                <li>Distribution of malicious software</li>
                <li>Attempting to bypass security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600">
                MesaChain shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages resulting from your use of or inability to use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to terminate or suspend your account and access to the platform
                at our sole discretion, without notice, for conduct that we believe violates these
                Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify users of any
                material changes by posting the new Terms on this page and updating the "Last
                Updated" date.
              </p>
              <p className="text-gray-600 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                For any questions about these Terms, please contact us at:
                <br />
                Email: <a href="mailto:legal@mesachain.com" className="text-blue-600 hover:underline">
                  legal@mesachain.com
                </a>
                <br />
                Address: 1234 MesaChain Blvd, Suite 100, Springfield, USA
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
