interface SalesHighlightProps {
  children: React.ReactNode;
}

const SalesHighlight = ({ children }: SalesHighlightProps) => {
  return (
    <span className="vsl-highlight">
      {children}
    </span>
  );
};

export default SalesHighlight;
