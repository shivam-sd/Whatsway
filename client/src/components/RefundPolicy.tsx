// RefundPolicy.tsx
import React from "react";
import { 
  RefreshCw, 
  CreditCard, 
  AlertCircle, 
  CheckCircle, 
  Mail, 
  Globe, 
  Clock, 
  Shield,
  Calendar,
  XCircle,
  Headphones,
  FileText,
  Scale,
  Zap,
  Settings
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mt-8">
              <RefreshCw className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Refund Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Refund Policy
            </h1>
            {/* <p className="text-lg text-green-100 max-w-2xl">
              Clear, transparent policies about payments, refunds, and cancellations
            </p> */}
            <div className="flex items-center gap-2 mt-6 text-green-100 text-sm">
              <Clock className="w-4 h-4" />
              <span>Last Updated: March 2026</span>
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
              <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                At AI Nurtures, we believe in transparency and fairness. This Refund Policy outlines 
                the terms and conditions regarding payments, refunds, and cancellations for our CRM platform 
                and services. We encourage you to read this policy carefully before making any purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Free Trial Section */}
        <Section
          icon={<Calendar className="w-6 h-6" />}
          title="1. Free Trial"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            AI Nurtures may offer a free trial period for new users to explore the platform, including 
            CRM features, automation tools, and AI workflows.
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "No payment is required to start the trial (if applicable)",
              "Users can evaluate the platform before subscribing",
              "Users can cancel anytime during the trial without being charged"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
            <p className="text-sm text-green-700">
              💡 <strong className="font-semibold">Pro Tip:</strong> Take advantage of our free trial to explore all features 
              and ensure the platform meets your business needs before committing to a paid subscription.
            </p>
          </div>
        </Section>

        {/* Subscription Services */}
        <Section
          icon={<CreditCard className="w-6 h-6" />}
          title="2. Subscription Services"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            Once a user subscribes to any paid plan of AI Nurtures:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "All payments are non-refundable",
              "The free trial ensures users can test the platform before committing",
              "If unsatisfied, users should cancel before the billing cycle starts"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-700">
              ⚠️ <strong className="font-semibold">Important:</strong> Subscription fees are charged in advance and are non-refundable. 
              You can cancel your subscription at any time to avoid future charges.
            </p>
          </div>
        </Section>

        {/* Non-Refundable Services */}
        <Section
          icon={<XCircle className="w-6 h-6" />}
          title="3. Non-Refundable Services"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            The following services are strictly non-refundable:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              "Subscription plan fees",
              "Add-ons and premium features",
              "AI automation credits",
              "Third-party integrations",
              "One-time setup or onboarding fees"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            These services involve immediate access to platform features and resources, 
            making refunds impractical once the service has been provided.
          </p>
        </Section>

        {/* Technical Issues */}
        <Section
          icon={<Settings className="w-6 h-6" />}
          title="4. Technical Issues"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            If a user faces continuous technical issues:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Must be reported to support",
              "May be eligible for partial/full refund at discretion"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700">
              🔧 <strong className="font-semibold">Need Help?</strong> Our support team is available to help resolve any 
              technical issues. Contact us at support@ainurtures.com for assistance.
            </p>
          </div>
        </Section>

        {/* Unauthorized Charges */}
        <Section
          icon={<Shield className="w-6 h-6" />}
          title="5. Unauthorized Charges"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            If unauthorized charges occur:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "Contact support immediately",
              "Verified cases will receive a full refund"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-700">
              🛡️ <strong className="font-semibold">Security Alert:</strong> If you notice any unauthorized charges on your account, 
              please contact us immediately at support@ainurtures.com.
            </p>
          </div>
        </Section>

        {/* Cancellation Policy */}
        <Section
          icon={<RefreshCw className="w-6 h-6" />}
          title="6. Cancellation Policy"
          color="green"
        >
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">How to Cancel</h3>
            </div>
            <p className="text-gray-600 mb-3">
              You can cancel your subscription at any time through your account settings or by contacting our support team.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Cancellation takes effect at the end of the current billing cycle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>No further payments will be charged after cancellation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Access to the platform continues until the end of the paid period</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>No refunds for partial months or unused credits</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Contact Section */}
        <Section
          icon={<Mail className="w-6 h-6" />}
          title="7. Contact & Support"
          color="green"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
            <div className="p-2 bg-green-200 rounded-lg">
              <Headphones className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Support Hours</p>
              <p className="text-gray-800 font-medium">Monday - Friday, 9:00 AM - 6:00 PM (IST)</p>
            </div>
          </div>
        </Section>

        {/* Refund Request Process */}
        <Section
          icon={<FileText className="w-6 h-6" />}
          title="8. Refund Request Process"
          color="green"
        >
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Submit Request
              </h3>
              <p className="text-gray-600 pl-8">
                Email us with your transaction details and reason for refund request.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Review Process
              </h3>
              <p className="text-gray-600 pl-8">
                Our team will review your request within 3-7 business days.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Resolution
              </h3>
              <p className="text-gray-600 pl-8">
                We'll notify you of the decision and process any approved refunds within 5-10 business days.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-700">
              ⏱️ <strong className="font-semibold">Response Time:</strong> 3-7 business days for initial response.
            </p>
          </div>
        </Section>

        {/* Policy Updates */}
        <Section
          icon={<Clock className="w-6 h-6" />}
          title="9. Policy Updates"
          color="green"
        >
          <p className="text-gray-600 mb-3">
            AI Nurtures may update this policy at any time. When changes are made:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              "The revised policy will be posted on our website",
              "The effective date will be updated",
              "Material changes will be communicated via email to active subscribers"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-3">
            Your continued use of the platform after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        {/* Legal Compliance */}
        <Section
          icon={<Scale className="w-6 h-6" />}
          title="10. Legal Compliance"
          color="green"
        >
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-gray-600 mb-3">
              AI Nurtures complies with applicable laws and regulations regarding refunds and consumer protection.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">CCPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Consumer Protection Laws</span>
              </div>
            </div>
          </div>
        </Section>

        

        
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

export default RefundPolicy;