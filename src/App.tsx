import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProgressBar } from './components/ui/ProgressBar';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <ProgressBar />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;