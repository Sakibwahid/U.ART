import React from 'react';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { Context } from '../components/Context';
import Hero from '../components/Hero';
import Author from '../components/Author';
import About from '../components/About';
import ConcaveLens from '../components/ConcaveLens';
import Showcase from '../components/Showcase';
import FeatureSection from '../components/FeatureSection';

const Home = () => {
    const {theme} = useContext(Context);
    return (
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} h-fit`}>
           <Hero></Hero>
           <About></About>
           <Showcase></Showcase>
           <FeatureSection></FeatureSection>
           <Author></Author>
        </div>
    );
};

export default Home;