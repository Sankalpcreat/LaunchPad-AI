// src/components/ui/accordion.tsx

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-zinc-700">
      <AccordionTrigger onClick={toggleAccordion} isOpen={isOpen} title={title} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <AccordionContent>{children}</AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionTriggerProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionTrigger = ({ title, isOpen, onClick }: AccordionTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
    >
      <span className="text-xl font-semibold">{title}</span>
      <span className="text-2xl">{isOpen ? "−" : "+"}</span>
    </button>
  );
};

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  return <div className="pb-4 text-zinc-400">{children}</div>;
};

interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  return <div className="bg-zinc-800 rounded-lg">{children}</div>;
};
