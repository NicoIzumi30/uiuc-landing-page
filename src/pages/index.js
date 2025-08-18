import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '@/components/AboutUs';
import Facility from '@/components/Facility';
import StudyProgram from '@/components/StudyProgram';
import Collaboration from '@/components/Collaboration';
import Announcement from '@/components/Announcement';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Announcement />
      <AboutUs/>
      <Facility />
      <StudyProgram />
      <Collaboration />
      <Footer />
    </div>
  );
}