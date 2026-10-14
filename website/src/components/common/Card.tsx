type Props = {
  highlighted?: boolean;
  title: string;
  description: string;

  icon?: string;

  titleLevel?: 3 | 4;
};

export default function Card({
  highlighted,
  title,
  description,
  icon,
  titleLevel = 3,
}: Props) {
  const TitleTag = titleLevel === 3 ? "h3" : "h4";

  return (
    <div className={highlighted ? "card card-highlighted" : "card"}>
      <div className="text-center">
        {icon && <div className="card-icon">{icon}</div>}

        <TitleTag>{title}</TitleTag>

        <p>{description}</p>
      </div>
    </div>
  );
}
