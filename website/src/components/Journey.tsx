import JourneyStep from "./JourneyStep";

export default function Journey() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        background: "#111827",
        color: "white",
      }}
    >
      <h2>Your Journey</h2>

      <p
        style={{
          maxWidth: 700,
          margin: "1rem auto 3rem",
        }}
      >
        Every creator begins as a traveler. Explore worlds, discover new ideas,
        and shape a world of your own.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        <JourneyStep
          icon="🧭"
          title="Explore"
          description="Travel through worlds created by other players."
        />

        <JourneyStep
          icon="✨"
          title="Bring Back"
          description="Gather ideas, resources and inspiration."
        />

        <JourneyStep
          icon="🌍"
          title="Create"
          description="Build a world that becomes uniquely yours."
        />
      </div>
    </section>
  );
}
