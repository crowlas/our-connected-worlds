import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";
import Connections from "../components/homePage/Connections";
import Hero from "../components/homePage/Hero";
import Journey from "../components/homePage/Journey";
import WorldUniverse from "../components/homePage/WorldUniverse";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <Hero />
      <Section>
        <PageContainer>
          <div className="universe-panel">
            <WorldUniverse />
          </div>
        </PageContainer>
      </Section>
      <Journey />
      <Connections />

      <Link to="/travel" className="primary-button">
        Learn How Travel Works →
      </Link>
    </main>
  );
}

export default HomePage;
