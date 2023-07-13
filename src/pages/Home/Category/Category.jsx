import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import Hero from './CategoryCart/Hero';
import Marvel from './CategoryCart/Marvel';
import Transformer from './CategoryCart/Transformer';
import Avenger from './CategoryCart/Avenger';
import StarWar from './CategoryCart/StarWar';




const Category = () => {
    
    const [marvels, setMarvels] = useState([])
    const [starwars, setStarwars] = useState([])
    const [transformers, setTransformers] = useState([])
    const [avengers, setAvengers] = useState([])
    const [hero,setHero] = useState([])
    
    // Category data fetch
    useEffect(()=>{
        fetch('https://toy-marketplace-server-beta-one.vercel.app/alltoys')
        .then(res => res.json())
        .then(data =>{
            
            // console.log(data)
            setHero(data.filter(da=>da.category=== "Superheroes"));
            setMarvels(data.filter(da=>da.category=== "Marvel"));
            setStarwars(data.filter(da=>da.category=== "Star Wars"));
            setAvengers(data.filter(da=>da.category=== "Avengers"));
            setTransformers(data.filter(da=>da.category === "Transformers"));
                  } 
            )
    },[])
  
    
    return (
        <div className='my-10'>
            <h1 className='my-5 text-3xl font-bold text-center'>Shop By Category</h1>
           
           <Tabs>
    <TabList>
      <Tab>Superheroes</Tab>
      <Tab>Avenger</Tab>
      <Tab>Star wars</Tab>
      <Tab>Marvel</Tab>
      <Tab>Transformers</Tab>
    </TabList>

    <TabPanel>
      <div className='grid gap-5 md:grid-cols-3'>
        { 
     hero.map(superheroes => <Hero 
        key={superheroes._id}
        superheroes={superheroes}>
      </Hero> )
        }
       </div>
    </TabPanel>
    
    <TabPanel>
    <div className='grid gap-5 md:grid-cols-3'>
       
        
        { 
      avengers.map(avenger => <Avenger
        key={avenger._id}
        avenger={avenger}>
      </Avenger> )
        }
       </div>
    </TabPanel>
    
    <TabPanel>
    <div className='grid gap-5 md:grid-cols-3'>
        { 
      starwars.map(starwar => <StarWar 
        key={starwar._id}
        starwar={starwar}>
      </StarWar> )
        }
       </div>
    </TabPanel>
    <TabPanel>
      
    <div className='grid gap-5 md:grid-cols-3'>
    { 
      marvels.map(marvel => <Marvel 
        key={marvel._id}
      marvel={marvel}>
      </Marvel> )
        }
       </div> 
    </TabPanel>
    
    <TabPanel>
    <div className='grid gap-5 md:grid-cols-3'>
        { 
      transformers.map(transformer => <Transformer 
        key={transformer._id}
        transformer={transformer}>
      </Transformer> )
        }
       </div>
    </TabPanel>
  </Tabs>
           
        </div>
    );
};

export default Category;