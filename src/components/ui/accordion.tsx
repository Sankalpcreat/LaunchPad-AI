// src/components/ui/accordion.tsx

import { ReactNode, useState } from "react"

interface AccordionItemProps {
  title: string
  content: ReactNode
}

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-zinc-700">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <span className="text-xl font-semibold">{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="pb-4 text-zinc-400">{content}</div>}
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return <div className="bg-zinc-800 rounded-lg">{children}</div>
}

// Additional components (if you plan to use them)
export const AccordionTrigger = AccordionItem; // If you need a separate trigger component
export const AccordionContent = AccordionItem; // If you need a separate content component
