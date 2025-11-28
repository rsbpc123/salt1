interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'warning' | 'testimony';
}

const HighlightBox = ({ children, variant = 'primary' }: HighlightBoxProps) => {
  const variants = {
    primary: 'highlight-box',
    warning: 'warning-box',
    testimony: 'testimony-box'
  };

  return (
    <div className={variants[variant]}>
      {children}
    </div>
  );
};

export default HighlightBox;
