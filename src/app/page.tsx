'use client'

import { Button } from "@/components/ui/Button1"
import { Card, CardContent } from "@/components/ui/Card1"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowUpRight, Upload, Wand2, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import Footer from '@/components/ui/Footer'

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
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        className="flex justify-between items-center p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-md"></div>
          <span className="text-xl font-bold">NajmAI</span>
        </div>
        <nav>
          <Button variant="ghost">More Templates</Button>
          <Button variant="ghost" className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="flex items-center justify-between p-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-2xl">
          <motion.h1 className="text-5xl font-bold mb-4" variants={fadeIn}>
            Your AI-Powered
            <br />
            <span className="text-purple-500">Design</span> Assistant
          </motion.h1>
          <motion.p className="text-xl mb-6" variants={fadeIn}>
            Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI
            technology.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            <Button variant="outline" className="ml-4">
              More Templates
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full h-64 bg-purple-500 rounded-lg"></div>
        </motion.div>
      </motion.section>

      {/* Unleash Your Creativity Section */}
      <section className="p-12 bg-zinc-900">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Unleash Your Creativity
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow
          these simple steps to turn your vision into reality.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { icon: <Upload className="w-6 h-6" />, title: "Upload Brief", description: "Share your project details and let our AI grasp your vision." },
            { icon: <Wand2 className="w-6 h-6" />, title: "Generate Designs", description: "Watch as our AI crafts unique design ideas tailored to you." },
            { icon: <Rocket className="w-6 h-6" />, title: "Refine Creation", description: "Perfect your chosen concept with easy-to-use AI tools." }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-zinc-800 border-none">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

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
          Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of
          design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into
          stunning realities.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { title: "Witness the Future", description: "Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals." },
            { title: "Visualize the Impossible", description: "Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity." },
            { title: "Synergy and Style", description: "Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves its purpose flawlessly." },
            { title: "Timeless Precision", description: "Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects." }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-zinc-900 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 mb-4">{item.description}</p>
                  <ArrowUpRight className="text-purple-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Seamless Tool Integration Section */}
      <section className="p-12 bg-zinc-900">
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
          NajmAI effortlessly integrates with various design tools, ensuring a smooth workflow. Your creative process is
          enhanced, allowing you to focus on what you do best: creating!
        </motion.p>
      </section>

      {/* FAQs Section */}
      <section className="p-12">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible>
          {[
            { question: "How does NajmAI work?", answer: "NajmAI utilizes advanced AI algorithms to generate unique design ideas based on your input." },
            { question: "Is there a learning curve?", answer: "No! NajmAI is designed to be user-friendly, making it easy for anyone to start creating." },
            { question: "Can I use my designs commercially?", answer: "Absolutely! You own the rights to all designs generated using NajmAI." }
          ].map((item, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
              <AccordionContent className="text-zinc-400">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
