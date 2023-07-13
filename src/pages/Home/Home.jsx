import React from 'react';
import carosel1 from './/..//..//..//public//img//carosel 1.jpg'
import carosel2 from './/..//..//..//public//img//carosel 2.jpg'
import carosel3 from './/..//..//..//public//img//carosel 3.jpg'
import carosel4 from './/..//..//..//public//img//carosel 4.jpg'
import Banner from './Banner/Banner';
import Galllery from './Gallery/Galllery';
import Category from './Category/Category';
import SectionHero from './Section/SectionHero';
import Addition from './Section/Addition';
import Contract from './Section/Contract';
import Services from './Section/Services';

const Home = () => {
    return (
        <div>
      <Banner></Banner>

      <Category></Category>
      {/* <SectionHero></SectionHero> */}
      <Galllery></Galllery>
      <Services></Services>
       <Addition></Addition>
       <Contract></Contract>
      </div>
    );
};

export default Home;