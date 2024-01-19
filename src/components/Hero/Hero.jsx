import React from 'react'
import Navbar from '../Navbar/navbar'
import strawberryImage from '../../assets/strawberry.png';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";



const Hero = () => {
  const [sidebar , setSidebar] = React.useState(false);
  return (
    <main className='bg-primaryDark md:py-6 md:px-12'>
      <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl'>
        <div className='container'>
          <Navbar sidebar={sidebar}
           setSidebar={setSidebar} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]'>
            <div className='text-white space-y-4 p-4 md:mt-0'>
              <h1 data-aos="fade-up" data-aos-delay="300" className='text-3xl pt-6 md:pl-14  mt-[100px]'>01 ________</h1>
              <h1 data-aos="fade-up"  data-aos-delay="300" className='text-5xl uppercase font-bold text-shadow'>A Healthy Fruit</h1>
              <p data-aos="fade-up"  data-aos-delay="600" className='text-sm'>Strawberries are tasty red fruits <br></br>
                that are sweet and juicy.
                Making them a <br></br> delicious and enjoyable snack.</p>
              <button data-aos="fade-up"  data-aos-delay="900" className='border border-white px-4 py-2 rounded-lg'>Shop Now</button>
            </div>
            <div>
              <img data-aos="zoom-in" src={strawberryImage} alt="Strawberry" className='w-[400px] relative z-[1] img-shadow'/>
            </div>
            <div className='md:hidden'></div>
          </div>
        </div>
        <h1 data-aos="zoom-in" className='text-center text-[50px] text-white font-bold sm:text-[120px] md:text-[110px] xl-text[180px] absolute bottom-0 w-full z-0 text-shadow'>BERRIES</h1>

        {
          sidebar &&(
            <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-6'>
            <div className='w-[1px] h-[70px] bg-white'></div>
            <div className='inline-block rounded-full p-2 cursor-pointer border-white text-white'><CiFacebook className='text-2xl' /></div>
            <div className='inline-block rounded-full p-2 cursor-pointer border-white text-white'><CiLinkedin className='text-2xl' /></div>
            <div className='inline-block rounded-full p-2 cursor-pointer border-white text-white'><CiInstagram className='text-2xl' /></div>
            <div className='w-[1px] h-[70px] bg-white'></div>


            </div>
            </div>
          )
        }
      </section>
    </main>
  )
}

export default Hero
