import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const[hasCopied,setHasCopied]=useState(false);

    const handleCopy=()=>{
        navigator.clipboard.writeText('krishma24604@gmail.com');

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        },2000)
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/general.pdf';
        link.download = 'Krishma_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <section  id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-5 
        md:grid-cols-2 grid-cols-1 gap-5 h-full mt-8'>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid1'
                    className='w-full sm:h-[276px] h=fit object-contain'/>

                    <div>
                        <p className='grid-headtext'>Hi, I'm Krishma</p>
                        <p className ='grid-subtext'>Passionate full-stack developer with expertise 
                            in MERN stack and a keen eye for UI/UX. Constantly exploring new technologies to build seamless web experiences. 🚀 </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px]
                    h-fit object-container'/>
                    <div>
                        <p className='grid-headtext'>Tech</p>
                        <p className='grid-subtext'>Skilled in MERN Stack (MongoDB, Express.js, React, Node.js), along with C++ and MySQL
                             . I build responsive UIs with React.js and develop efficient backend APIs with Node.js & Express.js,
                              ensuring seamless performance and scalability.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            lat: 23.47, lng: 77.94,
                            text:"I'm here!",
                            size:5000,
                        }]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>Remote & Ready </p>
                        <p className='grid-subtext'> Based in India, I'm open to remote opportunities, eager to collaborate,
                             and always learning to build impactful projects.</p>
                             <div className='w-fit' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt='grid-3'className='w-full sm:h-[266px] 
                    h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>My passion for coding</p>
                    <p className='grid-subtext'>"I thrive on solving complex problems and turning ideas into reality through code.
                         For me, coding isn’t just a skill—it’s a creative outlet that fuels my curiosity and drive."
                    </p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
    <div className='grid-container'>
        <img src='/assets/grid4.png' alt='grid-4' className='w-full
        md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>

        <div className='space-y-4'>
            {/* Download Resume Section */}
            <p className='grid-subtext text-center'>Download Resume</p>
            <div className='copy-container'>
                <a href="/general.pdf" download="Krishma_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
                        Download
                    </button>
                </a>
            </div>

            {/* Contact Me Section */}
            <p className='grid-subtext text-center'>Contact Me</p>
            <div className='copy-container' onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>krishma24604@gmail.com</p>
            </div>
        </div>
    </div>
</div>
 
        </div>
    </section>
  )
}

export default About