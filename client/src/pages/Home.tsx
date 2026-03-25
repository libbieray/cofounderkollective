// CoFounder Kollective — Home Page (Updated)

import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import Opportunity from '../components/sections/Opportunity';
import HowItWorks from '../components/sections/HowItWorks';
import Equity from '../components/sections/Equity';
import Criteria from '../components/sections/Criteria';
import ApplyForm from '../components/sections/ApplyForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Opportunity />
      <HowItWorks />
      <Equity />
      <Criteria />
      <ApplyForm />
      <Footer />
    </div>
  );
}
