import NewsLetter from "../basic/NewsLetter"

export default function Footer() {

    const footerLinks = [
        { name: "Product Support", href: "/#" },
        { name: "Order Support", href: "/#" },
        { name: "Terms", href: "/#" },
        { name: "Privacy", href: "/#" },
    ]

    return (
        <footer className="bg-black text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col-reverse gap-6">
                <div>
                    {/* Disclaimer Text */}
                    <div className="mb-12 text-gray-300 leading-relaxed text-sm">
                        <p>
                            Statements found on this website have not been evaluated by the Food and Drug Administration. Products on
                            this website are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant,
                            nursing, taking medication, or have a medical condition, consult your physician before using our products.
                            Emerging Biology LLC is located in the USA and used by permission. Emerging Biology's role as retailer does
                            not constitute an endorsement, approval or review of these products or any claim, statement or opinion used
                            in promotion of these products.
                        </p>
                    </div>

                    {/* Footer Navigation */}
                    <nav>
                        <ul className="flex flex-wrap md:gap-8 gap-5">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white hover:text-gray-300 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="lg:w-[175%]">
                    <NewsLetter />
                </div>
            </div>
        </footer>
    )
}

