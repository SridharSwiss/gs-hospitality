import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — GS Hospitality',
  description: 'Terms and conditions for GS Hospitality, Davos Summit hospitality specialists.',
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="font-serif text-4xl font-semibold text-white mb-8">Terms of Service</h1>
      <div className="space-y-6" style={{ color: 'rgba(240,237,232,0.7)', lineHeight: '1.8' }}>
        <p>Last updated: October 2026</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using gs-hospitality.ch, you accept and agree to be bound by these Terms of Service. GS Hospitality provides premium accommodation and concierge services for the Davos Annual Meeting.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">2. Professional Use</h2>
        <p>Our services are intended exclusively for business professionals and organisations seeking hospitality services in connection with the Davos Annual Meeting. By using this site, you confirm you are accessing it for professional purposes.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">3. Service Provision</h2>
        <p>All bookings and services are subject to availability and confirmed only upon written confirmation from GS Hospitality. Enquiries via WhatsApp or email do not constitute a binding agreement until formal confirmation is provided.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">4. Pricing</h2>
        <p>All pricing is provided on request. Quoted prices are in Swiss Francs (CHF) and are subject to change until a formal booking confirmation is issued.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">5. Cancellation Policy</h2>
        <p>Cancellation terms are specified in individual booking confirmations. Please review your confirmation documents carefully. Late cancellations may be subject to fees as detailed therein.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">6. Limitation of Liability</h2>
        <p>GS Hospitality's liability is limited to the value of the services booked. We are not liable for indirect or consequential losses arising from service disruptions or changes to the Davos Annual Meeting programme.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">7. Governing Law</h2>
        <p>These terms are governed by Swiss law. Any disputes shall be subject to the jurisdiction of the courts of Switzerland.</p>

        <h2 className="font-serif text-xl font-semibold text-white mt-8">8. Contact</h2>
        <p>For questions about these terms, contact <a href="mailto:hello@gs-hospitality.ch" style={{ color: '#C5A059' }}>hello@gs-hospitality.ch</a>.</p>
      </div>
    </main>
  );
}
