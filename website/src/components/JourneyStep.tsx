type JourneyStepProps = {
  icon: string;
  title: string;
  description: string;
};

export default function JourneyStep({
  icon,
  title,
  description,
}: JourneyStepProps) {
  return (
    <div
      style={{
        maxWidth: 250,
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}
