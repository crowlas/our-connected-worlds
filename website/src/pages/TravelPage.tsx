import Card from "../components/common/Card";
import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";

export default function TravelPage() {
  return (
    <main>
      <HeroSection />
      <ChoosingDestinationSection />
      <WhyItMattersSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h1>Our Connected Worlds</h1>

          <h2>Travel Between Worlds</h2>

          <p className="content-narrow">
            You're alone in an empty world. There is no kingdom to save. No
            quest to complete. No treasure waiting for you.
            <br />
            Only a door that you cross.
            <br />
            Suddenly, an ocean of possibilities awakens before you. Countless
            worlds. Countless creators. Countless journeys.
            <br />
            The question is no longer whether you can travel. It is: "Which
            one?".
          </p>

          <div className="travel-portal">🌀</div>
        </div>
      </PageContainer>
    </Section>
  );
}

function ChoosingDestinationSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>Choosing A Destination</h2>

          <p className="content-narrow">
            Not every world is equally accessible...
          </p>

          <div className="card-row">
            <Card
              icon="🌱"
              title="Starter Village"
              description="Simple resources. Affordable travel."
            />

            <Card
              icon="⚒️"
              title="Crafting Region"
              description="Specialized materials. Moderate travel cost."
            />

            <Card
              icon="🏰"
              title="Ancient Kingdom"
              description="Rare opportunities. Demanding access."
            />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

function WhyItMattersSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>Why Does It Matter?</h2>

          <p className="content-narrow">
            Travel costs create a natural progression shared across the entire
            network.
          </p>

          <p className="content-narrow">
            Greater opportunities require greater preparation.
          </p>

          <div className="card-row">
            <Card
              title="For Travelers"
              description="There is always a meaningful destination adapted to your current journey."
            />

            <Card
              title="For Creators"
              description="Worlds can specialize in different stages of progression without controlling the entire player experience."
            />
          </div>

          <p className="content-narrow">
            A creator who builds an introductory world is just as valuable as a
            creator who builds a legendary destination.
          </p>

          <p className="content-narrow">
            Every world contributes a different piece of the journey.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
