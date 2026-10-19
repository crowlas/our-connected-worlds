type Star = {
  id: number;
  x: number;
  y: number;
  r: number;
  opacity: number;
};

type Props = {
  stars: Star[];
};

export default function UniverseStars({ stars }: Props) {
  return (
    <>
      {stars.map((star) => (
        <circle
          key={star.id}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="white"
          opacity={star.opacity}
        />
      ))}
    </>
  );
}
