import Hero from "./components/Hero";
import WorldUniverse from "./components/WorldUniverse";

function App() {
  return (
    <main>
      <Hero />

      <h2
        style={{
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
        A Universe of Connected Worlds
      </h2>

      <WorldUniverse />
    </main>
  );
}

export default App;
