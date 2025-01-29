import pic4 from "/diagram/4.png"
import pic3 from "/diagram/3.png"
import pic2 from "/diagram/2.png"

const InfoCard = ({ image, alt, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center">
        <div className="w-full h-52 mb-4 rounded-lg overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain" />
        </div>
        <p className="text-center text-gray-800 leading-relaxed">{description}</p>
    </div>
)

export default function InfoCards() {
    const cards = [
        {
            image: pic4,
            alt: "C60 fullerene molecular structure",
            description:
                "Our pristine C60 fullerene particles are manufactured using the Huffman Kratschmer method, then purified using 3-step sublimation. No more guesswork about the purity and origin of your C60! We are always available and we welcome your questions!",
        },
        {
            image: pic3,
            alt: "Shilajit resin",
            description:
                'Shilajit is a mineral-rich, organic resin found in many mountain ranges, on every continent. It has been used medicinally for thousands of years. It means "destroyer of weakness" in Sanskrit, and is very important in eastern medicine. Most importantly, hundreds of scientific studies have been done verifying its remarkable health benefits.',
        },
        {
            image: pic2,
            alt: "Colloidal gold solution bottles",
            description:
                "Our gold nanoparticles are manufactured using a glucose binding agent to reduce Gold Chloride to a colloidal state, producing a ruby-red, 14nm colloid, at 75ppm. Prior to dehydration, our nanoparticles are tethered to a plant-based protein to prevent aggregation.",
        },
    ]

    return (
        <div className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <InfoCard key={index} image={card.image} alt={card.alt} description={card.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

