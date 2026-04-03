// PrivacyPolicy.tsx
import React from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Server,
  Cookie,
  Users,
  Building2,
  Scale
} from "lucide-react";

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 mt-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Privacy First</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            {/* <p className="text-lg text-green-100 max-w-2xl">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p> */}
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
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your Privacy Matters</h2>
              <p className="text-gray-600 leading-relaxed">
                AI Nurtures ("we," "us," or "our") is committed to protecting the personal information 
                of every individual who interacts with our Customer Relationship Management (CRM) 
                platform and services. This Privacy Policy explains what data we collect, how we use it, 
                and the choices you have regarding your information.
              </p>
            </div>
          </div>
        </div>

        {/* Scope Section */}
        <Section
          icon={<Scale className="w-6 h-6" />}
          title="1. Scope and Applicability"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            This Privacy Policy applies to all users of the AI Nurtures CRM platform, including:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Business customers who subscribe to our CRM services",
              "End users (employees, agents, contractors) who access the platform on behalf of a business",
              "Visitors to our website at https://ainurtures.com",
              "Individuals whose personal data is processed through our CRM tools"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4">
            By accessing or using our services, you agree to the practices described in this Privacy Policy.
          </p>
        </Section>

        {/* Information We Collect */}
        <Section
          icon={<Database className="w-6 h-6" />}
          title="2. Information We Collect"
          color="green"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Information You Provide Directly</h3>
              <p className="text-gray-600 mb-2">We collect information you provide when you register, subscribe, or interact with our platform:</p>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Full name, email address, phone number, and job title</li>
                <li>Company name, billing address, and payment details</li>
                <li>Login credentials (username and encrypted password)</li>
                <li>Communications you send to us (support tickets, emails, chat messages)</li>
                <li>Profile information and CRM preferences you configure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 CRM Data You Input</h3>
              <p className="text-gray-600 mb-2">As a CRM platform, AI Nurtures processes business data that you and your team enter, including:</p>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Contact records: names, email addresses, phone numbers, and company information of your customers or leads</li>
                <li>Sales pipeline data, deal stages, notes, and activity logs</li>
                <li>Communication history and customer interaction records</li>
                <li>Custom fields, tags, and segmentation data</li>
              </ul>
              <p className="text-gray-600 mt-2">This data belongs to you (the data controller). We act as a data processor on your behalf.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-2">We automatically collect technical data when you use our platform:</p>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>IP address, browser type, operating system, and device identifiers</li>
                <li>Pages visited, features used, session duration, and clickstream data</li>
                <li>Cookies, web beacons, and similar tracking technologies</li>
                <li>Log files recording access times and error events</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* How We Use Information */}
        <Section
          icon={<Eye className="w-6 h-6" />}
          title="3. How We Use Your Information"
          color="green"
        >
          <p className="text-gray-600 mb-4">AI Nurtures uses the collected information for the following purposes:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Service Delivery", "To provide, operate, and maintain the AI Nurtures CRM platform and its features"],
                  ["Account Management", "To create and manage your account, process subscriptions, and handle billing"],
                  ["Customer Support", "To respond to your inquiries, resolve issues, and provide technical assistance"],
                  ["Platform Improvement", "To analyze usage patterns, develop new features, and optimize performance"],
                  ["Security & Compliance", "To detect, prevent, and investigate fraud, abuse, or unauthorized access"],
                  ["Marketing & Communications", "To send product updates, newsletters, and promotional content (with your consent)"],
                  ["Legal Obligations", "To comply with applicable laws, regulations, and lawful government requests"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 font-medium text-gray-700">{row[0]}</td>
                    <td className="py-3 px-4 text-gray-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Legal Basis for Processing */}
        <Section
          icon={<Scale className="w-6 h-6" />}
          title="4. Legal Basis for Processing (GDPR)"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            For users in the European Economic Area (EEA) and United Kingdom, we process personal data under the following legal bases:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Contract Performance: Processing necessary to deliver our CRM services under your subscription agreement",
              "Legitimate Interests: Improving our platform, ensuring security, and preventing fraud",
              "Legal Obligation: Compliance with applicable laws and regulations",
              "Consent: For marketing communications and optional data analytics features"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* How We Share Information */}
        <Section
          icon={<Users className="w-6 h-6" />}
          title="5. How We Share Your Information"
          color="green"
        >
          <p className="text-gray-600 mb-4">AI Nurtures does not sell your personal data. We may share information only in the following circumstances:</p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">5.1 Service Providers</h3>
              <p className="text-gray-600">We engage trusted third-party vendors who assist in operating our platform, including cloud hosting providers, payment processors, email delivery services, and analytics tools. These providers are contractually bound to protect your data.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">5.2 Business Transfers</h3>
              <p className="text-gray-600">In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity. We will notify you before such a transfer occurs.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">5.3 Legal Requirements</h3>
              <p className="text-gray-600">We may disclose your information when required by law, court order, regulatory authority, or to protect the rights, safety, and property of AI Nurtures, our users, or the public.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">5.4 With Your Consent</h3>
              <p className="text-gray-600">We will share your information with other parties only when you have explicitly authorized us to do so.</p>
            </div>
          </div>
        </Section>

        {/* Cookies Section */}
        <Section
          icon={<Cookie className="w-6 h-6" />}
          title="6. Cookies and Tracking Technologies"
          color="green"
        >
          <p className="text-gray-600 mb-3">We use cookies and similar tracking technologies to enhance your experience on our platform. The types of cookies we use include:</p>
          <ul className="space-y-2 text-gray-600 mb-4">
            {[
              "Essential Cookies: Required for the platform to function (login sessions, security tokens)",
              "Performance Cookies: Collect anonymized analytics data to help us improve performance",
              "Functional Cookies: Remember your preferences and settings",
              "Marketing Cookies: Used to deliver relevant advertising (only with your consent)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">You can manage cookie preferences through your browser settings or our cookie consent manager. Disabling essential cookies may affect platform functionality.</p>
        </Section>

        {/* Data Retention */}
        <Section
          icon={<Clock className="w-6 h-6" />}
          title="7. Data Retention"
          color="green"
        >
          <p className="text-gray-600 mb-3">We retain personal data for as long as necessary to fulfill the purposes described in this policy:</p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Active account data: Retained for the duration of your subscription plus 90 days after termination",
              "CRM data you input: Retained as configured by you; deleted within 30 days of account closure upon request",
              "Financial and billing records: Retained for 7 years as required by applicable tax and accounting laws",
              "Logs and security data: Retained for up to 12 months"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4">You may request earlier deletion of your personal data, subject to legal retention requirements.</p>
        </Section>

        {/* Your Privacy Rights */}
        <Section
          icon={<Lock className="w-6 h-6" />}
          title="8. Your Privacy Rights"
          color="green"
        >
          <p className="text-gray-600 mb-4">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              "Access — Request a copy of your personal data we hold",
              "Correction — Request correction of inaccurate or incomplete information",
              "Deletion — Request erasure of your personal data (\"right to be forgotten\")",
              "Portability — Request transfer of your data in a machine-readable format",
              "Restriction — Request that we limit how we process your data",
              "Objection — Object to processing based on legitimate interests or for direct marketing",
              "Withdraw Consent — Withdraw consent at any time for consent-based processing"
            ].map((right, i) => (
              <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{right}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            To exercise your rights, contact us at privacy@ainurtures.com. We will respond within 30 days. 
            We may ask for identity verification before processing your request.
          </p>
        </Section>

        {/* Data Security */}
        <Section
          icon={<Server className="w-6 h-6" />}
          title="9. Data Security"
          color="green"
        >
          <p className="text-gray-600 mb-3">AI Nurtures employs industry-standard security measures to protect your information, including:</p>
          <ul className="space-y-2 text-gray-600 mb-4">
            {[
              "TLS/SSL encryption for all data in transit",
              "AES-256 encryption for data at rest",
              "Role-based access control and multi-factor authentication",
              "Regular security audits, vulnerability scanning, and penetration testing",
              "SOC 2 Type II-aligned security controls",
              "Incident response plan and breach notification procedures"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">While we take all reasonable precautions, no system is completely immune from security threats. We encourage you to use strong passwords and protect your account credentials.</p>
        </Section>

        {/* International Data Transfers */}
        <Section
          icon={<Globe className="w-6 h-6" />}
          title="10. International Data Transfers"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            AI Nurtures operates globally, and your data may be transferred to and stored in countries outside your home jurisdiction, including the United States. 
            Where such transfers occur, we ensure appropriate safeguards are in place, including:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Standard Contractual Clauses (SCCs) approved by the European Commission",
              "Adequacy decisions recognized by relevant data protection authorities",
              "Binding corporate rules or other lawful transfer mechanisms"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Children's Privacy */}
        <Section
          icon={<Users className="w-6 h-6" />}
          title="11. Children's Privacy"
          color="green"
        >
          <p className="text-gray-600">
            AI Nurtures services are intended for business use and are not directed at children under the age of 16. 
            We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal information, 
            please contact us immediately at privacy@ainurtures.com and we will promptly delete it.
          </p>
        </Section>

        {/* Third-Party Links */}
        <Section
          icon={<Building2 className="w-6 h-6" />}
          title="12. Third-Party Links and Integrations"
          color="green"
        >
          <p className="text-gray-600">
            Our CRM platform may include integrations with third-party applications (e.g., email clients, marketing tools, or payment processors). 
            When you connect such integrations, the third party's own privacy policy governs the data they collect. 
            AI Nurtures is not responsible for the privacy practices of third-party services.
          </p>
        </Section>

        {/* Changes to Policy */}
        <Section
          icon={<FileText className="w-6 h-6" />}
          title="13. Changes to This Privacy Policy"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
            When we make material changes, we will:
          </p>
          <ul className="space-y-2 text-gray-600 mb-3">
            {[
              "Post the revised policy on our website with an updated effective date",
              "Send a notification to your registered email address",
              "Display a prominent notice on the platform for at least 30 days"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Your continued use of our services after the effective date constitutes acceptance of the updated policy. 
            We encourage you to review this policy periodically.
          </p>
        </Section>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 md:p-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">14. Contact Us</h3>
                <p className="text-gray-600 mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong className="text-gray-800">Company:</strong> AI Nurtures</p>
                  <p className="text-gray-700"><strong className="text-gray-800">Website:</strong> https://ainurtures.com</p>
                  <p className="text-gray-700"><strong className="text-gray-800">Privacy Email:</strong> privacy@ainurtures.com</p>
                  <p className="text-gray-700"><strong className="text-gray-800">Support Email:</strong> support@ainurtures.com</p>
                  <p className="text-gray-700"><strong className="text-gray-800">Policy Version:</strong> Effective: March 25, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer
        <div className="mt-8 p-4 bg-gray-100 rounded-xl border border-gray-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Disclaimer</h4>
              <p className="text-sm text-gray-500">
                This Privacy Policy is provided for general information purposes. AI Nurtures recommends consulting a qualified 
                legal professional to ensure full compliance with applicable privacy laws in your jurisdiction, including GDPR, 
                CCPA, PDPA, and other regional regulations.
              </p>
            </div>
          </div>
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
