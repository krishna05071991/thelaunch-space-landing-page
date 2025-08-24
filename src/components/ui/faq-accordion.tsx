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
      <div className="space-y-4">
        <p className="text-lg font-semibold text-white leading-relaxed">
          No, you don't!
        </p>
        <p className="text-base text-white/90 leading-relaxed">
          Specs or wireframes are <span className="text-green-300 font-semibold">not mandatory</span>. We co-create a lean scope on day 1. If you already have your wireframes ready, we'll brainstorm on those and start from there.
        </p>
      </div>
    ),
  },
  {
    question: "What if requirements change mid-sprint?",
    answer: (
      <div className="space-y-4">
        <p className="text-lg font-semibold text-white leading-relaxed">
          Scope changes? No problem.
        </p>
        <p className="text-base text-white/90 leading-relaxed">
          Two <span className="text-blue-300 font-semibold">scope pivots</span> are built into the 3-week process—<span className="text-purple-300">no extra fee</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need to code?",
    answer: (
      <div className="space-y-4">
        <p className="text-lg font-semibold text-white leading-relaxed">
          Absolutely not.
        </p>
        <p className="text-base text-white/90 leading-relaxed">
          <span className="text-pink-300">Zero code.</span> We handle the rest; you focus on feedback and get your business up and running.
        </p>
      </div>
    ),
  },
];

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mt-10 space-y-4">
      {faqData.map((item, idx) => (
        <AccordionItem
          value={`item-${idx}`}
          key={item.question}
          className="border-b-0 rounded-lg bg-white border border-white/10 overflow-hidden transition-all duration-300 hover:bg-transparent"
        >
          <AccordionTrigger
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-md font-medium text-black focus:outline-none hover:bg-transparent hover:text-white hover:no-underline transition-all duration-300"
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-4 pb-6 text-white/70">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
