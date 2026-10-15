import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";

export default function FaqPage() {
  return (
    <main>
      <HeroSection />
      <QuestionsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section>
      <PageContainer>
        <div className="text-center">
          <h1>Frequently Asked Questions</h1>
        </div>
      </PageContainer>
    </Section>
  );
}

function QuestionsSection() {
  return (
    <Section>
      <PageContainer>
        <div className="content-wide">
          <h3>Can my game remain completely standalone?</h3>

          <p>
            Yes. Every world must work independently. Compatibility features are
            optional and remain under the control of each creator.
          </p>

          <h3>Do I need to share my source code?</h3>

          <p>
            No. Our Connected Worlds never requires creators to share source
            code, engines, tools or datasets. Sharing technical assets is always
            a creator decision.
          </p>

          <h3>Do Our Connected Worlds need to use the same game engine?</h3>

          <p>
            No. Compatibility is based on exchanged data and creator agreements,
            not on a specific game engine or technology stack.
          </p>

          <h3>Can I choose which worlds are compatible with mine?</h3>

          <p>
            Yes and no. An individual creators decide which worlds his world
            accept save from. He can't decide if his own save will be accepted
            by the same game or another.
          </p>

          <h3>Can I reject imported saves?</h3>

          <p>
            Absolutely. A world is never required to accept saves produced by
            another world. Save compatibility is always opt-in.
          </p>

          <h3>Can I create a sequel to another creator's game?</h3>

          <p>
            Yes and no. The first part is licensing. If a game explicitly
            indicate that it doesn't accept any kind of recuperation, you can't.
            When they authorize you, it is also possible that they define their
            own condition. Moreover, meaningful continuity usually requires
            cooperation with the original creator and access to technical
            information they choose to share. In all case, it is recommanded to
            contact the original author before using any recognysable element.
          </p>

          <h3>Can I create a new region for an existing world?</h3>

          <p>
            Yes and no. The problem is the same that with the previous question.
            Moreover, new regions generally require stronger compatibility
            because players are expected to travel back and forth between both
            experiences.
          </p>

          <h3>Who owns the data created by a world?</h3>

          <p>
            The creator of that world. Connected Worlds facilitates exchange but
            does not transfer ownership of worlds, content or technical assets.
          </p>

          <h3>What does a save file look like?</h3>

          <p>
            A save file is simply structured data exchanged between worlds.A
            simplified example could look like:
          </p>

          <pre>
            {`{
  "characterLevel": 12,
  "resources": {
    "healingPlant": 5,
    "healingPotion": 2
  },
  "worldData": {
    "completedQuest": true
  }
}`}
          </pre>

          <p>
            The aggregator only understands the information it was designed to
            track, such as shared resources and account progression. Everything
            else remains the responsibility of the world that created the save.
          </p>

          <h3>What is the purpose of the aggregator?</h3>

          <p>
            The aggregator is not a game engine. Its role is to provide
            distribution, a shared language for compatibility and a place where
            creators can discover collaboration opportunities.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
