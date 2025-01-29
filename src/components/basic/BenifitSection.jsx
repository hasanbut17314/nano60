import { Check } from "lucide-react"
import logo from "/logo.png"

const Feature = ({ text }) => (
    <div className="flex items-center gap-2">
        <Check className="text-green-500 w-6 h-6" />
        <span className="text-lg">{text}</span>
    </div>
)

const Benefit = ({ text }) => (
    <div className="flex items-start gap-2">
        <span className="text-xl leading-none">*</span>
        <span className="text-lg">{text}</span>
    </div>
)

export default function BenefitsSection() {
    const features = [
        "Proprietary Formula",
        "Non-Habit Forming",
        "Natural Ingredients",
        "No Stimulants",
        "Non-GMO",
        "Simple To Apply",
    ]

    const benefits = [
        "Ultimate Antioxidant Protection",
        "Reduces Sensitivity To Environmental Toxins",
        "Provides Over 100 Trace Minerals",
        "Inhibits Tumor Formation",
        "Enhances Pineal Gland Function",
        "Repairs DNA",
        "Reduces Inflammation",
        "Enhances Libido And Sexual Function",
        "Restores Hormonal Balance",
        "Strengthens Immune System",
        "Increases Energy And Focus",
    ]

    return (
        <div className="bg-[#efeafa] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Features */}
                    <div className="relative">
                        <div className="flex flex-col gap-8">
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <img
                                    src={logo}
                                    alt="μ-60 molecule"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <Feature key={index} text={feature} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider - Hidden on Mobile */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

                    {/* Right Column - Benefits */}
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <Benefit key={index} text={benefit} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

