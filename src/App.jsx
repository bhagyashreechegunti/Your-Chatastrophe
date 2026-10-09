import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SummarizePage from './pages/SummarizePage';
import UrgentNewsPage from './pages/UrgentNewsPage';
import DecisionsPage from './pages/DecisionsPage';
import ActionItemsPage from './pages/ActionItemsPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summarize" element={<SummarizePage />} />
            <Route path="/urgent-news" element={<UrgentNewsPage />} />
            <Route path="/decisions" element={<DecisionsPage />} />
            <Route path="/action-items" element={<ActionItemsPage />} />
          </Routes>
        </div>

        <footer className="site-footer">
          <div className="footer-content">
            <p>
              <strong>Chatastrophe</strong> • Your chats are disaster and we fix them.
            </p>
            <p className="footer-sub">
              Stage 1 UI Prototype • React + Vite • Privacy focused & local-first
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
