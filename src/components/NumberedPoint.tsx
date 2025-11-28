interface NumberedPointProps {
  number: number;
  children: React.ReactNode;
}

const NumberedPoint = ({ number, children }: NumberedPointProps) => {
  return (
    <div className="numbered-point">
      <div className="number-badge">{number}</div>
      <div className="flex-1 text-foreground/80">{children}</div>
    </div>
  );
};

export default NumberedPoint;
