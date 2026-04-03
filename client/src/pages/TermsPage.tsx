// TermsConditions.tsx
import React from "react";
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  CreditCard, 
  Database, 
  Server, 
  ExternalLink, 
  Scale, 
  Mail, 
  Globe, 
  Clock,
  UserCheck,
  Zap,
  Lock,
  Building2,
  Gavel,
  XCircle
} from "lucide-react";

export const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 mt-8">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Terms & Conditions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <div className="flex items-center gap-2 mt-6 text-green-100 text-sm">
              <Clock className="w-4 h-4" />
              <span>Effective Date: March 25, 2026</span>
              <span className="mx-2">•</span>
              <Globe className="w-4 h-4" />
              <span>https://ainurtures.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to AI Nurtures</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms & Conditions govern your use of our website, CRM platform, and related services. 
                By accessing or using AI Nurtures, you agree to be bound by these terms. If you do not agree, 
                please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Acceptance of Terms */}
        <Section
          icon={<CheckCircle className="w-6 h-6" />}
          title="1. Acceptance of Terms"
          color="green"
        >
          <p className="text-gray-600">
            By using AI Nurtures, you agree to comply with and be bound by these Terms & Conditions, 
            our Privacy Policy, and any additional terms that may apply to specific services. 
            If you are using our services on behalf of an organization, you represent that you have 
            the authority to bind that organization to these terms.
          </p>
        </Section>

        {/* Section 2: Services Overview */}
        <Section
          icon={<Zap className="w-6 h-6" />}
          title="2. Services Overview"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            AI Nurtures provides a comprehensive suite of business tools including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "CRM tools for customer relationship management",
              "AI automation for workflow optimization",
              "Integrations with third-party applications",
              "Analytics and reporting dashboards",
              "Contact management and segmentation",
              "Communication and collaboration tools"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-3">
            We reserve the right to modify, suspend, or discontinue any feature of our services at any time.
          </p>
        </Section>

        {/* Section 3: User Accounts */}
        <Section
          icon={<UserCheck className="w-6 h-6" />}
          title="3. User Accounts"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            To access our services, you must create an account. You agree to:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            {[
              "Provide accurate, current, and complete information during registration",
              "Maintain the security and confidentiality of your account credentials",
              "Promptly update your account information if changes occur",
              "Accept responsibility for all activities that occur under your account",
              "Notify us immediately of any unauthorized use of your account"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-700">
              ⚠️ <strong className="font-semibold">Important:</strong> You are responsible for maintaining the confidentiality 
              of your login credentials. AI Nurtures is not liable for any loss or damage arising from unauthorized 
              access to your account.
            </p>
          </div>
        </Section>

        {/* Section 4: Subscription & Payments */}
        <Section
          icon={<CreditCard className="w-6 h-6" />}
          title="4. Subscription & Payments"
          color="green"
        >
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-green-600" />
                Billing Terms
              </h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Subscription-based billing (monthly or annual plans)",
                  "Payments are processed in advance of each billing cycle",
                  "All payments are non-refundable except as provided in our Refund Policy",
                  "Payment processing via Razorpay and Stripe"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <div className="p-2 bg-green-200 rounded-lg">
                <Shield className="w-5 h-5 text-green-700" />
              </div>
              <p className="text-sm text-green-700">
                <strong>Secure Payments:</strong> All transactions are processed through industry-standard 
                secure payment gateways. We do not store your payment card details.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 5: Refund Policy */}
        <Section
          icon={<AlertCircle className="w-6 h-6" />}
          title="5. Refund Policy"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            Please refer to our dedicated Refund Policy for complete details. In summary:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Payments are generally non-refundable",
              "Free trial available for new users to evaluate the platform",
              "Technical issues may qualify for refund review",
              "Unauthorized charges will be fully refunded after verification"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a 
              href="/refund-policy" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Read Full Refund Policy
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Section>

        {/* Section 6: Acceptable Use */}
        <Section
          icon={<Shield className="w-6 h-6" />}
          title="6. Acceptable Use"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            You agree not to use our services for any prohibited activities, including but not limited to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              "Illegal or fraudulent activities",
              "Spam or unsolicited communications",
              "Harassment, abuse, or harm to others",
              "Uploading malicious code or viruses",
              "Infringing on intellectual property rights",
              "Interfering with service operations",
              "Attempting to bypass security measures",
              "Reverse engineering our platform"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-red-50 rounded-lg p-3">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Violation of these terms may result in immediate account suspension or termination.
          </p>
        </Section>

        {/* Section 7: Data Protection */}
        <Section
          icon={<Database className="w-6 h-6" />}
          title="7. Data Protection"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            AI Nurtures is committed to protecting your data. We comply with:
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">GDPR (EU)</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">India IT Act, 2000</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CCPA (California)</span>
          </div>
          <p className="text-gray-600">
            Users are responsible for ensuring that their use of our services complies with applicable 
            data protection laws. You retain ownership of your data, and we process it according to your instructions.
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700">
              🔒 <strong className="font-semibold">Data Ownership:</strong> You retain all rights to your data. 
              We do not claim ownership over any content you upload or create using our services.
            </p>
          </div>
        </Section>

        {/* Section 8: Security */}
        <Section
          icon={<Lock className="w-6 h-6" />}
          title="8. Security"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            We implement industry-standard security measures to protect your information, including:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            {[
              "TLS/SSL encryption for data transmission",
              "AES-256 encryption for data at rest",
              "Regular security audits and vulnerability scanning",
              "Role-based access controls",
              "Multi-factor authentication options"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-700">
              ⚠️ <strong className="font-semibold">Disclaimer:</strong> While we use robust security measures, 
              no system is 100% secure. We cannot guarantee absolute protection against all security threats.
            </p>
          </div>
        </Section>

        {/* Section 9: Third-Party Services */}
        <Section
          icon={<ExternalLink className="w-6 h-6" />}
          title="9. Third-Party Services"
          color="green"
        >
          <p className="text-gray-600">
            Our platform may integrate with third-party services, applications, and APIs. We are not responsible for:
          </p>
          <ul className="space-y-2 text-gray-600 mt-3">
            {[
              "The privacy practices of third-party services",
              "The availability or reliability of third-party integrations",
              "Any issues arising from your use of third-party services",
              "Data breaches or security incidents occurring on third-party platforms"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-3">
            Your use of third-party services is subject to their respective terms and policies.
          </p>
        </Section>

        {/* Section 10: Limitation of Liability */}
        <Section
          icon={<Gavel className="w-6 h-6" />}
          title="10. Limitation of Liability"
          color="green"
        >
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-gray-600 mb-3">
              To the maximum extent permitted by law, AI Nurtures and its affiliates shall not be liable for:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Indirect, incidental, or consequential damages",
                "Loss of profits, revenue, or business opportunities",
                "Data loss or corruption",
                "Service interruptions or downtime",
                "Any unauthorized access to your account or data"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-3">
              Our total liability shall not exceed the amount you paid us during the twelve (12) months 
              preceding the claim.
            </p>
          </div>
        </Section>

        {/* Section 11: Termination */}
        <Section
          icon={<XCircle className="w-6 h-6" />}
          title="11. Termination"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            We reserve the right to suspend or terminate your account in the following circumstances:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            {[
              "Violation of these Terms & Conditions",
              "Non-payment of subscription fees",
              "Engaging in prohibited activities",
              "Suspected fraudulent or illegal activity",
              "Upon request for account closure"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Upon termination, you will lose access to your account and data. You may export your data 
            before termination when possible.
          </p>
        </Section>

        {/* Section 12: AI Disclaimer */}
        <Section
          icon={<Zap className="w-6 h-6" />}
          title="12. AI Disclaimer"
          color="green"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">AI-Generated Content</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Our platform includes AI-powered features that generate content, suggestions, and automations. 
                  Please note:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• AI outputs are generated based on your inputs and may not always be accurate</li>
                  <li>• You are responsible for reviewing and validating AI-generated content</li>
                  <li>• We do not guarantee the accuracy, completeness, or suitability of AI outputs</li>
                  <li>• AI features are provided as-is and may evolve over time</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 13: Governing Law */}
        <Section
          icon={<Scale className="w-6 h-6" />}
          title="13. Governing Law"
          color="green"
        >
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-gray-600 mb-2">
              These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <div className="flex items-center gap-3 mt-3 p-3 bg-white rounded-lg">
              <Building2 className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Jurisdiction</p>
                <p className="text-sm text-gray-600">Delhi, India</p>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              Any disputes arising out of or relating to these Terms shall be subject to the exclusive 
              jurisdiction of the courts in Delhi, India.
            </p>
          </div>
        </Section>

        {/* Section 14: Contact Information */}
        <Section
          icon={<Mail className="w-6 h-6" />}
          title="14. Contact Us"
          color="green"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-green-100 rounded-lg">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <a href="mailto:Info@ainurtures.com" className="text-gray-800 font-medium hover:text-green-600 transition-colors">
                  Info@ainurtures.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Website</p>
                <a href="https://ainurtures.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-green-600 transition-colors">
                  https://ainurtures.com
                </a>
              </div>
            </div>
          </div>
          {/* <div className="mt-4 p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-green-700 text-center">
              For questions, concerns, or legal inquiries, please contact us at{" "}
              <a href="mailto:Info@ainurtures.com" className="font-semibold underline">Info@ainurtures.com</a>
            </p>
          </div> */}
        </Section>

        {/* Footer Note */}
        {/* <div className="mt-8 text-center border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-400">
            By using AI Nurtures, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Last Updated: March 25, 2026 | Version 1.0
          </p>
        </div> */}
      </div>
    </div>
  );
};

// Reusable Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  color?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, color = "green", children }) => {
  const colors = {
    green: {
      light: "bg-green-50",
      medium: "bg-green-100",
      dark: "text-green-600",
      border: "border-green-200"
    }
  };
  
  const theme = colors[color as keyof typeof colors];
  
  return (
    <div className="mb-8 scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 ${theme.light} rounded-xl ${theme.dark}`}>
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-12">
        {children}
      </div>
    </div>
  );
};