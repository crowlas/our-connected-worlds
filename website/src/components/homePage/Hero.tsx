import PageContainer from "../common/PageContainer";
import Section from "../common/Section";

export default function Hero() {
  return (
    <Section>
      <PageContainer>
        <div className="hero text-center">
          <h1>Our Connected Worlds</h1>

          <p>You are not the hero of a single story.</p>

          <p>
            You are a traveler crossing countless worlds, gathering resources,
            knowledge and memories until one day you use everything to create a
            world of your own.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
