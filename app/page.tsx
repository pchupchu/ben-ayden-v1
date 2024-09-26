import About from '@/components/about';
import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Services from '@/components/services';
import Work from '@/components/work';

export default function Home() {
  return (
    <div className='overflow-hidden bg-site bg-cover bg-no-repeat'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />

      <div className='h-[4000px]'></div>
    </div>
  );
}
