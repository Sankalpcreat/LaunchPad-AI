// src/components/FAQ.tsx

import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI generate designs?",
    answer: "Our AI uses advanced machine learning algorithms trained on vast datasets of design principles and trends. It analyzes your input, considers current design standards, and generates unique designs tailored to your specifications."
  },
  {
    question: "Can I customize the AI-generated designs?",
    answer: "While our AI creates initial designs, you have full control to modify and refine them. Our intuitive interface allows you to adjust colors, layouts, and elements to perfectly match your vision."
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 customer support via chat and email. For our premium users, we also provide dedicated phone support and one-on-one consultation sessions with our design experts."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial that gives you full access to all our features. This allows you to experience the power of our AI-driven design tools before committing to a subscription."
  },
  {
    question: "How secure is my data?",
    answer: "We take data security very seriously. All your data is encrypted both in transit and at rest. We use industry-standard security protocols and regularly undergo third-party security audits to ensure your information is always protected."
  },
  {
    question: "What integrations are available?",
    answer: "Our platform integrates seamlessly with popular design tools like Adobe Creative Suite, Figma, and Sketch. We also offer API access for custom integrations with your existing workflows and systems."
  }
];

export default function FAQ() {
  return (
    <section className="p-12 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-8 text-white">
        Frequently Asked
        <br />
        <span className="text-purple-500">Questions</span>
      </h2>
      <p className="text-xl mb-8 text-zinc-300">
        Have questions about our AI-Powered Design Assistant? Find answers to the most common questions and learn how our
        platform can enhance your creative process.
      </p>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
