import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
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
import CPAlandingfunnel from "./pages/CPAlandingfunnel";
import TransportOptimizationDashboard from "./pages/TransportOptimizationDashboard";
import RequestDemo from "./pages/RequestDemo";

export default function App() {
  return (
    <div className="app" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar stays outside Routes so it persists */}
      <Navbar />

      {/* Main content */}
      <main style={{ flex: 1, width: "100%" }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Pages */}
          <Route path="/fleettracker" element={<FleetTracker />} />
          <Route path="/caseorganizer" element={<CaseOrganizer />} />
          <Route path="/datavisualizer" element={<DataVisualizer />} />
          <Route path="/transportcosttracker" element={<TransportCostTracker />} />
          <Route path="/datadrivendecision" element={<DataDrivenDecision />} />
          <Route path="/legaldocsformatter" element={<LegalDocsFormatter />} />
          <Route path="/smartcostanalyzer" element={<SmartCostAnalyzer />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/transportinsight" element={<TransportInsight />} />
          <Route path="/smartlogisticsfromds" element={<SmartLogisticsfromDS />} />
          <Route path="/transport-optimization-dashboard" element={<TransportOptimizationDashboard />} />
          <Route path="/cpalandingfunnel" element={<CPAlandingfunnel />} />
          <Route path="/requestdemo" element={<RequestDemo />} />


          {/* 🔥 Catch-all route (VERY IMPORTANT) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}