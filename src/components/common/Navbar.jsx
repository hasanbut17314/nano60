import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"
import logo from "/logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Ingredients", href: "/ingredients" },
        { name: "FAQ", href: "/faq" },
    ]
    return (
        <nav className="w-full bg-[#EDE8F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-14 w-14"
                            />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex md:items-center gap-6">
                        <ul className="flex space-x-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="px-4 py-2 rounded-md"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/order"
                            className="inline-flex items-center px-6 py-2.5 rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pb-3 space-y-1 sm:px-3">
                    <ul className="flex flex-col items-center space-y-3 mb-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="px-4 py-2 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/order"
                        className="block px-4 py-2 text-center text-white bg-purple-600 hover:bg-purple-700 rounded-md"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </nav>
    )
}

