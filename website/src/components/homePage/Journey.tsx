import Card from "../common/Card";
import PageContainer from "../common/PageContainer";
import Section from "../common/Section";

export default function Journey() {
  return (
    <Section>
      <PageContainer>
        <div className="journey text-center">
          <h2 className="journey-title">Your Journey</h2>

          <p className="content-narrow">
            Every creator begins as a traveler. Explore worlds, discover new
            ideas and resources, and shape a world of your own.
          </p>

          <div className="card-row">
            <Card
              icon="🧭"
              title="Explore"
              description="Travel through worlds created by other players."
            />

            <Card
              icon="✨"
              title="Bring Back"
              description="Gather ideas, resources and inspiration."
            />

            <Card
              icon="🌍"
              title="Create"
              description="Build a world that becomes uniquely yours."
            />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
