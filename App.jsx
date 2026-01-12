import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights"; // Added this import
import Contact from "./pages/Contact";
import FleetTracker from "./pages/FleetTracker";
import CaseOrganizer from "./pages/CaseOrganizer";
import DataVisualizer from "./pages/DataVisualizer";
import TransportCostTracker from "./pages/TransportCostTracker";
import DataDrivenDecision from "./pages/DataDrivenDecision";
import LegalDocsFormatter from "./pages/LegalDocsFormatter";
import Goals from "./pages/Goals";
import SmartCostAnalyzer from "./pages/SmartCostAnalyzer";
import TransportInsight from "./pages/TransportInsight";
import SmartLogisticsfromDS from "./pages/SmartLogisticsfromDS";
import TransportOptimizationDashboard from "./pages/TransportOptimizationDashboard";
import RequestDemo from "./pages/RequestDemo";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import CPAlandingfunnel from './pages/CPAlandingfunnel';


export default function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FleetTracker" element={<FleetTracker />} />
        <Route path="/CaseOrganizer" element={<CaseOrganizer />} />
        <Route path="/DataVisualizer" element={<DataVisualizer />} />
        <Route path="/TransportCostTracker" element={<TransportCostTracker />} />
        <Route path="/DataDrivenDecision" element={<DataDrivenDecision />} />
        <Route path="/LegalDocsFormatter" element={<LegalDocsFormatter />} />
        <Route path="/SmartCostAnalyzer" element={<SmartCostAnalyzer />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/TransportInsight" element={<TransportInsight />} />
        <Route path="/SmartLogisticsfromDS" element={<SmartLogisticsfromDS />} />
        <Route path="/transport-optimization-dashboard" element={<TransportOptimizationDashboard />} />
        <Route path="/requestdemo" element={<RequestDemo />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/CPAlandingfunnel" element={<CPAlandingfunnel />} />
      </Routes>
    </div>
  );
}
