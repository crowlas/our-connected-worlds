import Card from "../common/Card";

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
    <Card>
      <div className="journey-step">
        <div className="journey-step-icon">{icon}</div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </Card>
  );
}
