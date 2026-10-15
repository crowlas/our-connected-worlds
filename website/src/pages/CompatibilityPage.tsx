import Card from "../components/common/Card";
import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";

export default function CompatibilityPage() {
  return (
    <main>
      <HeroSection />
      <CompatibilitySection />
      <PromiseSection />
      <CollaborationSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h1 className="hero-title">
            <span className="hero-title-muted">What</span>

            <span className="hero-title-main">Our Connected Worlds</span>

            <span className="hero-title-muted">Is Not</span>
          </h1>

          <p className="content-narrow">
            Our Connected Worlds only provides a framework for compatibility. It
            does not magically make every game compatible with each others.
          </p>

          <p className="content-narrow">
            The platform offers a shared language for resources, progression and
            save exchange. Deeper continuity remains a creator decision.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}

function CompatibilitySection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>What The Platform Cannot Provide</h2>

          <p className="content-narrow">
            Connected Worlds is not a game engine.
          </p>

          <p className="content-narrow">
            It does not know how individual games implement inventory, quests,
            NPCs, combat systems, world states or object instances.
          </p>

          <div className="card-row">
            <Card
              icon="❌"
              title="Perfect Object Copies"
              description="The platform cannot automatically recreate complex game objects between different games."
            />

            <Card
              icon="❌"
              title="Quest Conversion"
              description="The meaning of quests, events and story choices belongs to each game."
            />

            <Card
              icon="❌"
              title="World State Synchronization"
              description="The platform cannot infer how a game's internal systems work."
            />
          </div>

          <p className="content-narrow">
            A save file may contain information that only the original world
            understands.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}

function PromiseSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>The Real Promise</h2>

          <p className="content-narrow">Connected Worlds can still help you.</p>

          <div className="card-row">
            <Card
              icon="📢"
              title="Distribution"
              description="Help creators publish their worlds and make them discoverable to travelers already exploring the ecosystem."
            />

            <Card
              icon="🌐"
              title="Shared Language"
              description="Provide common resource definitions and compatibility mechanisms understood by every connected world."
            />

            <Card
              icon="🤝"
              title="Mediator"
              description="Help creators discover each other and establish conventions when collaboration becomes possible."
            />
          </div>

          <p className="content-narrow">
            The platform does not create collaboration. It enables it.
          </p>

          <p className="content-narrow">
            A fantasy RPG and a farming simulator may appear unrelated. A
            survival game and a city builder may seem to have nothing in common.
            Yet they can still benefit from existing within the same ecosystem.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}

function CollaborationSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h2>When Creators Connect</h2>

          <p className="content-narrow">
            Creators decide how far they want collaboration to go.
          </p>

          <div className="card-row">
            <Card
              icon="📦"
              title="Shared Resources"
              description="Independent worlds exchange value through a common catalog."
            />

            <Card
              icon="💾"
              title="Save Import"
              description="A journey started in one world continues in another."
            />

            <Card
              icon="🗺️"
              title="New Region"
              description="Creators collaborate to expand an existing world."
            />
          </div>

          <p className="content-narrow">
            Each step requires more trust and more collaboration.
          </p>

          <p className="content-narrow">
            The platform provides the connection. Creators define its depth.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
