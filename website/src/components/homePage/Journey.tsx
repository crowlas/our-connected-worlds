import PageContainer from "../common/PageContainer";
import Section from "../common/Section";
import JourneyStep from "./JourneyStep";

export default function Journey() {
  return (
    <Section>
      <PageContainer>
        <div className="journey text-center">
          <h2 className="journey-title">Your Journey</h2>

          <p className="journey-description">
            Every creator begins as a traveler. Explore worlds, discover new
            ideas and resources, and shape a world of your own.
          </p>

          <div className="journey-steps">
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
              description="Build the next destination of the journey."
            />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
