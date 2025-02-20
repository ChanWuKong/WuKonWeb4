import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Hero from './components/Hero';
import AIModels from './components/AIModels';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import FloatingBubbles from './components/FloatingBubbles';
import SoundToggle from './components/SoundToggle';
import Auth from './pages/Auth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/" element={
            <>
              <FloatingBubbles />
              <Navbar />
              <main>
                <Hero />
                <AIModels />
                <Features />
                <Integrations />
                <Testimonials />
                <FAQ />
              </main>
            </>
          } />
        </Routes>
      </Router>
      <SoundToggle />
    </ThemeProvider>
  );
}

export default App;
