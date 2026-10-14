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
      <div className="card-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </Card>
  );
}
