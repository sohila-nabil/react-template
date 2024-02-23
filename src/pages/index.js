import React from 'react'
import Home from './../components/home/Home';
import Work from './../components/work/Work';
import Portfolio from './../components/portfolio/Portfolio';
import About from './../components/about/About';
import Footer from './../components/footer/Footer';
import SocialMedia from './../components/social media/SocialMedia';
import Profile from '../components/porofile/Profile';

export default function Index() {
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Profile/>
      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
}
