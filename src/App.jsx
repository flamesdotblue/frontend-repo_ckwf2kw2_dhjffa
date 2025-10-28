import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <main>
        <Services />
        <WhyChooseUs />
      </main>
      <Contact />
    </div>
  );
}

export default App;
