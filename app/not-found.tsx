export default function NotFound() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-2xl mx-auto text-center py-16">
        <p className="font-mono text-6xl text-tactical-blue font-bold mb-4">404</p>
        <p className="font-display text-lg text-text-primary mb-2">Page not found</p>
        <p className="text-sm text-text-secondary mb-6">
          The page you are looking for has been moved or does not exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
        >
          &larr; Return to Vampire Crawlers Guide
        </a>
      </div>
    </div>
  );
}
