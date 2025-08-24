import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface FAQItem {
  question: string;
  answer: JSX.Element;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need specs or wireframes?",
    answer: (
      <>
        <span className="font-semibold text-white">No, you don’t!</span> <br />
        Specs or wireframes are <span className="text-green-300 font-semibold">not mandatory</span>. We co-create a lean scope on day 1. If you already have your wireframes ready, we’ll brainstorm on those and start from there.
      </>
    ),
  },
  {
    question: "What if requirements change mid-sprint?",
    answer: (
      <>
        <span className="font-semibold text-white">Scope changes? No problem.</span> <br />
        Two <span className="text-blue-300 font-semibold">scope pivots</span> are built into the 3-week process—<span className="text-purple-300">no extra fee</span>.
      </>
    ),
  },
  {
    question: "Do I need to code?",
    answer: (
      <>
        <span className="font-semibold text-white">Absolutely not.</span> <br />
        <span className="text-pink-300">Zero code.</span> We handle the rest; you focus on feedback and get your business up and running.
      </>
    ),
  },
];

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mt-10 space-y-3">
      {faqData.map((item, idx) => (
        <AccordionItem
          value={`item-${idx}`}
          key={item.question}
          className="border-b-0 rounded-lg bg-gray-900/80 border border-white/10 overflow-hidden transition-all duration-300"
        >
          <AccordionTrigger
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-md font-medium text-white/90 focus:outline-none hover:bg-white/5 hover:no-underline"
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-0 pb-4 text-white/70">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
