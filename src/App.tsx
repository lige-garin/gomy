/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-tech-bg)] text-white font-sans selection:bg-[var(--color-tech-accent)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <Coverage />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
