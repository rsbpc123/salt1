const ScientificBadges = () => {
  const badges = [
    "Nature Journal",
    "JNeurosci",
    "PubMed",
    "Clinical Studies",
    "University Research"
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      {badges.map((badge) => (
        <div key={badge} className="scientific-badge">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
};

export default ScientificBadges;