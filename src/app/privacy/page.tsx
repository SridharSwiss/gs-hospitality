import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — GS Hospitality',
  description: 'Privacy policy for GS Hospitality, Davos Summit hospitality specialists.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="font-serif text-4xl font-semibold text-white mb-8">Privacy Policy</h1>
      <div className="space-y-6" style={{ color: 'rgba(240,237,232,0.7)', lineHeight: '1.8' }}>
        <p>Last updated: October 2026</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly to us when you contact us via WhatsApp, email, or our contact form. This includes your name, email address, phone number, company name, and the content of your enquiry.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
        <p>We use the information we collect to respond to your enquiries, provide the services you have requested, and communicate with you about our offerings for the Davos Annual Meeting 2027.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">3. Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide the services you have requested.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">4. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including providing our services and complying with legal obligations.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">5. Your Rights</h2>
        <p>Under the Swiss Federal Act on Data Protection (FADP) and applicable EU/EEA regulations, you have rights including access to your data, correction, deletion, and the right to object to processing. Contact us at hello@gs-hospitality.ch to exercise these rights.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">6. Contact</h2>
        <p>For privacy-related enquiries, contact us at <a href="mailto:hello@gs-hospitality.ch" style={{ color: '#C5A059' }}>hello@gs-hospitality.ch</a>.</p>
      </div>
    </main>
  );
}
