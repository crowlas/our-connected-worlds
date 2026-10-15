import { useState, type ReactNode } from "react";

type Props = {
  highlighted?: boolean;
  title: string;
  description: string;
  icon?: string;
  detailsTitle?: string;
  details?: ReactNode;
  titleLevel?: 3 | 4;
};

export default function Card({
  highlighted = false,
  icon,
  title,
  description,
  detailsTitle,
  details,
  titleLevel = 3,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const TitleTag = titleLevel === 3 ? "h3" : "h4";

  const hasDetails = !!details;

  let className = "card";

  if (highlighted) {
    className += " card-highlighted";
  }

  return (
    <div className={className}>
      <div className="text-center">
        {icon && <div className="card-icon">{icon}</div>}

        <TitleTag>{title}</TitleTag>

        <p>{description}</p>

        {hasDetails && (
          <button
            className="card-details-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Hide Requirements" : "Show Requirements"}
          </button>
        )}
      </div>

      {expanded && (
        <div className="card-details">
          <h4>{detailsTitle ?? "Requirements"}</h4>

          {details}
        </div>
      )}
    </div>
  );
}
