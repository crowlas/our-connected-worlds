type Props = {
  title: string;
  description: string;

  icon?: string;

  titleLevel?: 3 | 4;
};

export default function Card({
  title,
  description,
  icon,
  titleLevel = 3,
}: Props) {
  const TitleTag = titleLevel === 3 ? "h3" : "h4";

  return (
    <div className="card">
      <div className="text-center">
        {icon && <div className="card-icon">{icon}</div>}

        <TitleTag>{title}</TitleTag>

        <p>{description}</p>
      </div>
    </div>
  );
}
