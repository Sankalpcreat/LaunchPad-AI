'use client'

import { Button } from "./components/ui/Button1"
import { Card, CardContent } from "./components/ui/Card1"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import FAQ from "./components/FAQ";
import { useRouter } from "next/navigation"
import Footer from "./components/ui/Footer"
import Image from "next/image"; 
import { AnimatedBeamMultipleOutputDemo } from "./components/animatedBeam" 
 

import BoxReveal from "./components/ui/box-reveal"
import { MarqueeSection } from "./components/MarqueeSection"; 
import {FloatingNav} from "./components/ui/floating-navbar"; 



const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function LandingPage() {
  const router=useRouter();
  const handleClick=()=>{
    router.push("/generatePitch");
  }
  return (
   
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
  className="flex justify-between items-center p-4" // Reduced padding from p-6 to p-4
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="flex items-center space-x-2">
    <Image
      src="/logo1.png" // Path to your image
      alt="LaunchPad AI Logo"
      width={40} // Adjust values
      height={32} // Adjust values
      className="rounded-md ml-7 "
    />
    <span className="text-4xl  font-bold">LaunchPad AI</span>
  </div>

  {/* Floating Navbar Component */}
  <FloatingNav
    navItems={[
      { name: "Home", link: "/" },
      { name: "Features", link: "/features" },
      { name: "About", link: "/about" },
    ]}
  />

  
</motion.header>


      {/* Hero Section */}
                    <motion.section
                      className="flex items-center justify-between p-12"
                      initial="initial"
                      animate="animate"
                      variants={staggerChildren}
                    >
                      <div className="max-w-2xl">
                      <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
                <motion.h1 className="text-5xl font-bold mb-4" variants={fadeIn}>
                  Your AI-Powered
                  <br />
                  <span className="text-purple-500">Startup Pitch</span> Generator
                  </motion.h1>
              </BoxReveal>

              <BoxReveal boxColor={"#7C3AED"} duration={0.5}>
                <motion.p className="text-xl mb-6" variants={fadeIn}>
                Empower your startup journey. Effortlessly generate compelling and data-driven pitches with advanced AI technology.

                </motion.p>
              </BoxReveal>

                                <motion.div variants={fadeIn}>
                                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleClick}>Get Started</Button>
                                
                                    </motion.div>
                                </div>
                                  <motion.div
                                className="w-1/3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
              

              <div className="w-full h-80 relative">
              <Image
                  src="/image.jpeg" // Replace with your image path
                  alt="AI Design Assistant"
                  fill // Replaces layout="fill"
                  style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
                  className="rounded-lg transition-transform duration-500 hover:scale-105" // Adding hover scale animation
                />
                  </div>

        </motion.div>
      </motion.section>

      {/* Unleash Your Creativity Section */}
     
      {/* Transforming Imagination Section */}
      <section className="p-12">
  <motion.h2
    className="text-4xl font-bold mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Transforming
    <br />
    Imagination into <span className="text-purple-500">Reality</span>
  </motion.h2>

  <motion.p
    className="text-xl mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    Unlock the full potential of your creativity with our AI-powered startup pitch generator. Explore the limitless potential of AI as it transforms your ideas into compelling pitches.
  </motion.p>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
    variants={staggerChildren}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    {[
      { title: "Witness the Future", description: "Dive into the world of AI where design possibilities are limitless. Let cutting-edge technology transform your ideas into compelling pitches." },
      { title: "Visualize the Impossible", description: "Step beyond the ordinary with pitches that defy conventions. Our AI crafts innovative presentations that redefine the startup narrative." },
      { title: "Synergy and Style", description: "Experience the perfect blend of form and function. Our AI ensures every pitch not only resonates but also presents your ideas with precision." },
      { title: "Timeless Precision", description: "Embrace the elegance of meticulously crafted pitches. Our AI polishes every idea to bring a timeless quality to your startup presentations." }
      
    ].map((item, index) => (
      <motion.div key={index} variants={fadeIn}>
        <div className="relative bg-zinc-900 p-6 group overflow-hidden">
          <div className="absolute inset-0 w-full h-full border border-transparent animate-border-spin border-color-transparent group-hover:border-purple-500"></div>

          <Card className="relative z-10 p-6 bg-zinc-900 border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400 mb-4">{item.description}</p>
              <ArrowUpRight className="text-purple-500" />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>



      <MarqueeSection />

      {/* Seamless Tool Integration Section */}
      <section className="p-12 bg-black flex items-center justify-center">
  <div className="max-w-2xl text-center">
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Seamless Tool Integration
    </motion.h2>
    <motion.p
      className="text-xl mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      LaunchPad AI effortlessly integrates with various design tools, ensuring a smooth workflow. Your creative process is
      enhanced, allowing you to focus on what you do best: creating!
    </motion.p>
  </div>
  
  <div className="flex-grow flex items-start justify-end">
    <AnimatedBeamMultipleOutputDemo className="bg-black" />
  </div>
</section>
      {/* FAQs Section */}
     <FAQ/>

      {/* Footer */}
      <Footer />
    </div>

  )
}
