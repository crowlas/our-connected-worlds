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
            The question is no longer whether you can travel. It is : "Which
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
            <Card>
              <div className="">
                <div className="card-icon">🌱</div>

                <h3>Starter Village</h3>

                <p>Simple resources.</p>

                <p>Affordable travel.</p>
              </div>
            </Card>

            <Card>
              <div className="">
                <div className="card-icon">⚒️</div>

                <h3>Crafting Region</h3>

                <p>Specialized materials.</p>

                <p>Moderate travel cost.</p>
              </div>
            </Card>

            <Card>
              <div className="">
                <div className="card-icon">🏰</div>

                <h3>Ancient Kingdom</h3>

                <p>Rare opportunities.</p>

                <p>Demanding access.</p>
              </div>
            </Card>
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
            <Card>
              <h3>For Travelers</h3>

              <p>
                There is always a meaningful destination adapted to your current
                journey.
              </p>
            </Card>

            <Card>
              <h3>For Creators</h3>

              <p>
                Worlds can specialize in different stages of progression without
                controlling the entire player experience.
              </p>
            </Card>
          </div>

          <p className="content-narrow">
            A creator who builds an introductory world is just as valuable as a
            creator who builds a legendary destination.
          </p>

          <p className="content-narrow hero-question">
            Every world contributes a different piece of the journey.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
