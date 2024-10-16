// src/components/ui/Footer.tsx

'use client'

import { Button } from "./button2"
import { Input } from "./input1"
import { motion } from "framer-motion"
import {   Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Footer() {  // This is a default export
  return (
    <motion.footer 
      className="bg-zinc-900 text-white py-16 px-6"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="flex items-center space-x-2">
          <Image
      src="/logo1.png"  // Path to your image
      alt="LaunchPad AI Logo"
      width={40}  // You can adjust these values
      height={32}  // to the desired size
      className="rounded-md "
    />
            <span className="text-xl font-bold">LaunchpadAI</span>
          </div>
          <p className="text-zinc-300">
            Empowering creativity with AI-driven design solutions.
          </p>
          <div className="flex space-x-4">
            
          <Image
        src="/twitter.jpg"  // Replace with your image path
        alt="Description of image"
        width={25}  // Desired width
        height={20}  // Desired height
        className="custom-class pb-10  hover:text-purple-500 cursor-pointer transition-colors  text-zinc-400"  // Optional: Add custom styles or Tailwind classes
      />
            <Instagram className="w-5 h-5 text-zinc-400 hover:text-purple-500 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-zinc-400 hover:text-purple-500 cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-zinc-400 hover:text-purple-500 cursor-pointer transition-colors" />
          </div>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3 className="font-semibold text-lg mb-4 ml-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">How it Works</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Features</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Pricing</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Blog</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">FAQs</Button></li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3 className="font-semibold text-lg mb-4 ml-4">Legal</h3>
          <ul className="space-y-2">
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Terms of Service</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Privacy Policy</Button></li>
            <li><Button variant="link" className="text-zinc-300 hover:text-purple-400 p-0">Cookie Policy</Button></li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-zinc-300 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
          <form className="space-y-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-purple-500"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">Subscribe</Button>
          </form>
        </motion.div>
      </div>
      <motion.div 
        variants={fadeInUp}
        className="mt-1 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm"
      >
        <p>© 2024 LaunchpadAI. All rights reserved.</p>
        <p className="mt-2">Made by Sankalp</p>
      </motion.div>
    </motion.footer>
  )
}
