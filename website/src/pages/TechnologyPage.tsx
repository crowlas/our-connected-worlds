import Card from "../components/common/Card";
import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";

export default function TechnologyPage() {
  return (
    <main>
      <HeroSection />
      <ResourceCatalogSection />
      <WorldDataSection />
      <ClosingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h1>Our Connected Worlds</h1>

          <h2>A Shared Language</h2>

          <p className="content-narrow">
            Connected Worlds does not impose gameplay, stories or progression
            systems.
          </p>

          <p className="content-narrow">
            Instead, it provides a common language that allows independent
            worlds to exchange information while remaining completely
            autonomous.
          </p>

          <div className="travel-portal">📚</div>
        </div>
      </PageContainer>
    </Section>
  );
}

function ResourceCatalogSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>Shared Resource Catalog</h2>

          <p className="content-narrow">
            A shared economy requires a shared understanding of resources.
          </p>
          <p className="content-narrow">
            The aggregator defines a catalog of resources and entities that can
            be exchanged between worlds. Each item is described by a common set
            of properties understood by every connected world.
          </p>

          <div className="card-row">
            <Card
              icon="📦"
              title="Category"
              description="Define what is the item (plant, food, potion, sword, headgear, ...)"
            />

            <Card
              icon="✨"
              title="Effect"
              description="Define the effect of usage (heal, damage, buff, debuff)"
            />

            <Card
              icon="🎯"
              title="Target Stat"
              description="Used to define the target of usage (vitality, magicpool, endurance, attack, defense, ...)"
            />

            <Card
              highlighted
              icon="💰"
              title="Price"
              description="Numerical value used by the aggregator to estimate rarity, progression and economic impact across worlds."
            />
          </div>

          <p className="content-narrow">
            Every world understands the same identifiers but may rename or
            visually represent them differently. How these resources are used
            remains entirely up to the creator of each world.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}

function WorldDataSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>Independent World Data</h2>

          <p className="content-narrow">
            Every world remains responsible for its own internal systems and
            save structure. Additionally, a world may access account data and
            import save files produced by compatible worlds.
          </p>

          <div className="card-row">
            <Card
              icon="💾"
              title="Internal Save"
              description="Each world has his own data related to his own mechanics."
            />

            <Card
              icon="🔄"
              title="Imported Save"
              description="Save from compatible world can be imported to retreive your inventory and continue the journey."
            />

            <Card
              icon="👤"
              title="Account Data"
              description="Account data live outside of games but is always avaible to them to add transversal progression."
            />
          </div>

          <p className="content-narrow">
            The aggregator stores this data but does not attempt to understand
            or interpret it.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}

function ClosingSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>Shared Data, Independent Worlds</h2>

          <p className="content-narrow">
            Our Connected Worlds standardizes data. It does not standardize
            gameplay.
          </p>

          <p className="content-narrow">
            Every creator remains free to decide how resources, levels and
            transversal progression influence their own world.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
