import { ArrowLeft, ArrowRight } from "lucide-react"
import hero from "/hero.png"
import pic1 from "/diagram/1.png"
import pic2 from "/diagram/2.png"
import pic3 from "/diagram/3.png"
import pic4 from "/diagram/4.png"

const ProductCard = ({ title, subtitle, benefits, image }) => (
    <div className="bg-white rounded-lg p-4 shadow-md">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-contain mb-4" />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{subtitle}</p>
        <ul className="space-y-1">
            {benefits.map((benefit, index) => (
                <li key={index} className="text-sm flex items-center">
                    <span className="text-[#6f4cce] mr-2">•</span>
                    {benefit}
                </li>
            ))}
        </ul>
    </div>
)

export default function ProductDiagram() {
    const products = {
        avocadoOil: {
            title: "100% Organic Avocado Oil",
            subtitle: "Persea americana",
            benefits: [
                "promotes healthy blood lipid profiles",
                "acts as a carrier for fat-soluble materials",
                "supports cardiovascular health",
            ],
            image: pic1,
        },
        colloidalGold: {
            title: "24kt Colloidal Gold",
            subtitle: "1nm, 50 PPM",
            benefits: [
                "antiviral and anticancer",
                "premier agent for trace mineral delivery",
                "neuroprotective and a cognitive enhancer",
            ],
            image: pic2,
        },
        shilajit: {
            title: "Himalayan Shilajit",
            subtitle: "20% Fulvic, 40% Humic Acids",
            benefits: ["regulates hormone levels", "cardioprotective", "chelates toxic materials from the body"],
            image: pic3,
        },
        fullerenes: {
            title: "Carbon 60 (C60) Fullerenes",
            subtitle: "Pristine, 99.9% Purity",
            benefits: ["boosts immune function", "supports brain health", "supports healthy blood glucose levels"],
            image: pic4,
        },
    }

    return (
        <div className="bg-[#efeafa] min-h-screen md:px-8 px-4 py-12">
            <div className="max-w-6xl mx-auto relative" id="ingredients">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <ProductCard {...products.avocadoOil} />
                    <ProductCard {...products.colloidalGold} />
                </div>

                {/* Center Product Image */}
                <div className="flex justify-center items-center my-8">
                    <img
                        src={hero}
                        alt="C-60 Fullerenes Product"
                        className="w-72 h-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <ProductCard {...products.shilajit} />
                    <ProductCard {...products.fullerenes} />
                </div>

                {/* Connecting Arrows */}
                <div className="hidden md:block">
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                        <ArrowLeft className="text-[#6f4cce] w-12 h-12" />
                    </div>
                    <div className="absolute top-1/3 right-1/2 transform translate-x-1/2">
                        <ArrowRight className="text-[#6f4cce] w-12 h-12" />
                    </div>
                    <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                        <ArrowLeft className="text-[#6f4cce] w-12 h-12" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/2 transform translate-x-1/2">
                        <ArrowRight className="text-[#6f4cce] w-12 h-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}

