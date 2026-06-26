import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vampire Crawlers Privacy Policy',
  description: 'Privacy policy for Vampire Crawlers Guide.',
};

export default function PrivacyPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-2xl font-bold text-text-primary mb-8">PRIVACY POLICY</h1>
        <div className="bg-abyss-light border border-border-subtle p-6 space-y-4 text-sm text-text-secondary">
          <p>Vampire Crawlers Guide uses Google Analytics to collect anonymized visit statistics for content optimization. No personal identity information is collected.</p>
          <p>Google Analytics uses first-party cookies that contain no personal identity information. You can disable cookies through browser settings.</p>
          <p>This site may contain external links to Afdian and other game guide sites. Third-party websites have their own privacy policies.</p>
          <p>This site has no affiliation with the developers of Vampire Crawlers (poncle and Nosebleed Interactive). This is an unofficial independent fan site.</p>
        </div>
      </div>
    </div>
  );
}
