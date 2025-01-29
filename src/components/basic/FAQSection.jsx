import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const FAQItem = ({ question, answer, isOpen, onClick, index }) => (
    <div className="bg-white rounded-xl sm:rounded-2xl md:p-6 p-4 shadow-sm transition-all duration-200 ease-out hover:shadow-md">
        <button
            id={`faq-button-${index}`}
            className="w-full flex justify-between items-center text-left rounded-lg transition-colors duration-200"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
        >
            <h3 className="sm:text-xl text-lg font-semibold text-[#170f49] pr-4">{question}</h3>
            <span className="bg-[#813bb7]/10 p-2 rounded-lg shrink-0">
                {isOpen ? (
                    <Minus className="w-5 h-5 text-[#813bb7]" aria-hidden="true" />
                ) : (
                    <Plus className="w-5 h-5 text-[#813bb7]" aria-hidden="true" />
                )}
            </span>
        </button>
        <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            aria-hidden={!isOpen}
        >
            <div className="pt-4 text-gray-600 leading-relaxed">
                {answer}
            </div>
        </div>
    </div>
)

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1)

    const faqs = [
        {
            question: "Is Mu-60 right for me?",
            answer:
                "If you have any desire to protect you or your family from oxidative damage, caused by nanoparticles, Mu-60 may be right for you. If you've noticed brain-fog, fatigue, weakened immune system, increased belly fat, compromised short-term memory or lack of drive, Mu-60 may be perfect for you. Mu-60 is a frontline defense against oxidative stress of all kinds, and could be the missing link which keeps you healthy!",
        },
        {
            question: "Is Mu-60 safe?",
            answer: "Yes, Mu-60 is manufactured using safe, natural ingredients and undergoes rigorous quality testing.",
        },
        {
            question: "How many bottles should I order?",
            answer:
                "We recommend ordering 6 bottles to get the best value and free shipping. This is what 96% of our customers choose.",
        },
        {
            question: "What is the best way to take Mu-60?",
            answer: "Follow the recommended dosage instructions on the bottle for optimal results.",
        },
        {
            question: "Is this a one-time payment?",
            answer: "Yes, this is a one-time purchase with no recurring charges or hidden fees.",
        },
        {
            question: "What do I do now?",
            answer: "Click the Order Now button to secure your supply of Mu-60 while stocks last.",
        },
    ]

    return (
        <div className="bg-[#efeafa] py-16 sm:px-4 px-3 md:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#813bb7] mb-12">FAQ</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}