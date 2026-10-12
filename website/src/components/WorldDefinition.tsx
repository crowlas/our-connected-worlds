export default function WorldDefinition() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#0F172A",
        color: "white",
      }}
    >
      <h2>A World Can Be Anything</h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "1rem auto 4rem",
          lineHeight: 1.6,
        }}
      >
        Worlds are not restricted to a single genre. They are expressions of
        their creators.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <WorldCard
          icon="🏰"
          title="Fantasy Kingdom"
          description="Heroes, legends and ancient magic."
        />

        <WorldCard
          icon="🚀"
          title="Space Frontier"
          description="Technology, exploration and discovery."
        />

        <WorldCard
          icon="👻"
          title="Haunted Realm"
          description="Mysteries, fear and forgotten stories."
        />

        <WorldCard
          icon="🎀"
          title="Cozy Village"
          description="Friendship, creativity and community."
        />

        <WorldCard
          icon="❓"
          title="Something New"
          description="Create ideas nobody has imagined yet."
        />
      </div>
    </section>
  );
}

function WorldCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        width: 220,
        padding: "1.5rem",
        borderRadius: "1rem",
        background: "#1E293B",
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
