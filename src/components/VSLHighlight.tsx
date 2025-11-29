interface VSLHighlightProps {
  children: React.ReactNode;
}

const VSLHighlight = ({ children }: VSLHighlightProps) => {
  return (
    <span className="vsl-highlight">
      {children}
    </span>
  );
};

export default VSLHighlight;
