import Card from "../common/Card";
import PageContainer from "../common/PageContainer";
import Section from "../common/Section";

export default function Connections() {
  return (
    <Section>
      <PageContainer>
        <div className="connections">
          <h2>Connections Are Optional</h2>

          <p className="connections-description">
            Every world remains independent. Creators decide what can travel
            between worlds, and what should remain unique to their own
            experience.
          </p>

          <div className="connections-cards">
            <ConnectionCard
              icon="📦"
              title="Resources"
              description="Allow players to bring materials, currencies, collectibles or crafting components from other worlds."
            />

            <ConnectionCard
              icon="🧙"
              title="Characters"
              description="Continue the journey of the same character across multiple worlds, or create a brand new hero."
            />

            <ConnectionCard
              icon="💾"
              title="Progress"
              description="Reuse an existing save, extend a previous adventure, or start from a completely fresh experience."
            />
          </div>

          <div className="connections-examples">
            <h3>What Does That Mean?</h3>

            <div className="connections-example-cards">
              <ExampleCard
                title="A Sequel"
                description="Continue a story started in another world."
              />

              <ExampleCard
                title="A New Region"
                description="Expand an existing universe with a new map or kingdom."
              />

              <ExampleCard
                title="Another Perspective"
                description="Tell the same story through different characters."
              />

              <ExampleCard
                title="A Different Experience"
                description="Change the gameplay completely while keeping connections to previous worlds."
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

type ConnectionCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ConnectionCard({ icon, title, description }: ConnectionCardProps) {
  return (
    <Card>
      <div className="connection-card">
        <div className="connection-card-icon">{icon}</div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </Card>
  );
}

type ExampleCardProps = {
  title: string;
  description: string;
};

function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <Card>
      <h4>{title}</h4>

      <p
        style={{
          color: "#D1D5DB",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </Card>
  );
}
