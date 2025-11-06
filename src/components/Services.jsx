import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = () => {
    const servicesData =[
        {
            title:'Advertising',
            description:'we turn bold ideas into powerfull digital solution that connect,engage...',
            icon:assets.ads_icon
        },
          {
            title:'Content marketing',
            description:'we help you execute your plan and deliver results.',
            icon:assets.marketing_icon
        },
          {
            title:'Content writing',
            description:'we help you create a marketing strategy that drives resuls.',
            icon:assets.content_icon
        },
          {
            title:'Social media',
            description:'we help you build strong social media presence and engage with your audience.',
            icon:assets.social_icon
        }
    ]

  return (
    <motion.div 
    initial='hidden'
whileInView="visible"
transition={{staggerChildren:0.2}}
viewport={{once:true}} 
    id='services' className='relative dark:text-white flex flex-col items-center gap-7 px-4 sm:px-12 lg:px:px-24 xl:px-40 pt-30 text-grey-700 dar:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
     
      <Title title='How i can help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
    
    <div className=' flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service,index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>
    
    </motion.div>
  )
}

export default Services
