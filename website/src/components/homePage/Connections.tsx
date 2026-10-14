import Card from "../common/Card";
import PageContainer from "../common/PageContainer";
import Section from "../common/Section";

export default function Connections() {
  return (
    <Section>
      <PageContainer>
        <div className="connections text-center">
          <h2>Connections Are Optional</h2>

          <p className="content-narrow">
            Creators decide what can travel between worlds, and what should
            remain unique to their own experience.
          </p>

          <div className="card-row">
            <Card
              icon="📦"
              title="Resources"
              description="Allow players to bring materials, currencies, collectibles or crafting components from other worlds."
            />

            <Card
              icon="🧙"
              title="Characters"
              description="Continue the journey of the same character across multiple worlds, or create a brand new hero."
            />
          </div>

          <div className="connections-examples">
            <h3>What Does That Mean?</h3>

            <div className="card-row">
              <Card
                title="A Sequel"
                description="Continue a story started in another world."
                titleLevel={4}
              />

              <Card
                title="A New Region"
                description="Expand an existing universe with a new map or kingdom."
                titleLevel={4}
              />

              <Card
                title="A Different Experience"
                description="Change the gameplay completely while keeping your progression."
                titleLevel={4}
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
