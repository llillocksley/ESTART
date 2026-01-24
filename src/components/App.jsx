import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer"; // ✅ adjust path if needed

function App() {
  return (
    <>
      <Helmet>
        <title>Test Page</title>
      </Helmet>

      <main>
        <h1>Hello World with Helmet</h1>
      </main>

      {/* ✅ Footer is now rendered */}
      <Footer />
    </>
  );
}

export default App;
