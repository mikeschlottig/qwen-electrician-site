import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [estimateOpen, setEstimateOpen] = useState(false);

  const openEstimate = () => setEstimateOpen(true);
  const closeEstimate = () => setEstimateOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header onOpenEstimate={openEstimate} />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenEstimate={openEstimate} />} />
          <Route path="/services/:slug" element={<ServicePage onOpenEstimate={openEstimate} />} />
          <Route path="/service-areas/:area" element={<LocationPage onOpenEstimate={openEstimate} />} />
          <Route path="*" element={<HomePage onOpenEstimate={openEstimate} />} />
        </Routes>
      </div>

      <Footer onOpenEstimate={openEstimate} />
      <EstimateModal isOpen={estimateOpen} onClose={closeEstimate} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
