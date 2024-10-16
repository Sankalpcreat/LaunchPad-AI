import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does LaunchPad AI generate startup pitches?",
    answer: "LaunchPad AI leverages advanced algorithms trained on extensive datasets, allowing it to analyze input and generate tailored startup pitches based on current market trends and best practices."
  },
  {
    question: "Can I customize the AI-generated pitches?",
    answer: "Absolutely! You can easily modify the generated pitches, adjusting content, style, and structure to align with your vision and requirements."
  },
  {
    question: "What support options are available for users?",
    answer: "We provide comprehensive support through live chat and email. Premium users have access to dedicated phone support and personalized consultation with our pitch experts."
  },
 
  {
    question: "How secure is my data while using LaunchPad AI?",
    answer: "Your data security is our top priority. We utilize industry-standard encryption and regularly perform audits to ensure your information remains secure."
  },
  {
    question: "What integrations does LaunchPad AI support?",
    answer: "LaunchPad AI integrates seamlessly with popular tools and platforms, allowing for a smooth workflow. You can also use our API for custom integrations."
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
