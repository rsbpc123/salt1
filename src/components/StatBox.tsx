interface StatBoxProps {
  number: string;
  label: string;
  description?: string;
}

const StatBox = ({ number, label, description }: StatBoxProps) => {
  return (
    <div className="stat-box">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2">
        {number}
      </div>
      <div className="font-bold text-lg text-foreground mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
};

export default StatBox;