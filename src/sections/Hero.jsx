import { Suspense, useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import FallbackScene from "../components/FallbackScene";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import { scroller } from 'react-scroll';
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
    const [canvasError, setCanvasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024});

    const sizes = useMemo(() => 
      calculateSizes(isSmall,isMobile,isTablet), 
      [isSmall, isMobile, isTablet]
    );

    useEffect(() => {
      // Set a timeout to show fallback if loading takes too long
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 10000); // 10 seconds timeout

      return () => clearTimeout(timer);
    }, []);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Krishma <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient "> Full-Stack Web Developer </p>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-full absolute inset-0 mt-5">
      {/* <Leva/> */}
        {canvasError ? (
          <FallbackScene />
        ) : (
          <Canvas 
            frameloop="always"
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            gl={{ 
              antialias: false, 
              alpha: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: true
            }}
            onCreated={({ gl }) => {
              gl.setClearColor('#000000', 0);
              setIsLoading(false);
            }}
            onError={() => {
              console.error('Canvas error occurred');
              setCanvasError(true);
            }}
          >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera>
            <HackerRoom
             position={sizes.deskPosition} 
             scale={sizes.deskScale}
             rotation={[0,-Math.PI,0]}
             />
             </HeroCamera>
             <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition} />
             </group>

            <ambientLight intensity={1}/>

            <directionalLight position={[5,2,-3]} intensity={0.5}/>

          </Suspense>
          </Canvas>
        )}
      </div>



      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <div className="w-fit flex justify-center w-full">
        <Button name="Let's work together "
         isBeam containerClass="sm:w-fit w-full sm:min-w-96 "
         onClick={() => scroller.scrollTo('contact', {
           smooth: true,
           duration: 500,
           offset: -70
         })}/>
         </div>
      </div>
    </section>
  );
};

export default Hero;
