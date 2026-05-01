import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left cursor-pointer hover:bg-stone-800 transition"
      >
        <h3 className="text-white text-lg font-bold">{question}</h3>
        <span
          className={`text-orange-500 text-2xl transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-stone-800 mx-6 pt-4 pb-6">
            <p className="text-stone-400">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
