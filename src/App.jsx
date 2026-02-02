import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const products = [
        { id: 1, name: "UAC Essential Hoodie", price: 54.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80", category: "Apparel" },
        { id: 2, name: "Utah Utes Performance Tee", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", category: "Athletics" },
        { id: 3, name: "University Heritage Cap", price: 24.99, image: "https://images.unsplash.com/photo-1588850567047-1845a9ee02f9?auto=format&fit=crop&w=800&q=80", category: "Accessories" },
        { id: 4, name: "UAC Premium Backpack", price: 74.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", category: "Gear" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Banner */}
            <div className="bg-black text-white text-xs py-2 text-center uppercase tracking-widest font-bold">
                Free Shipping on Orders Over $75 | GO UTES!
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="container flex items-center justify-between h-20">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#BE0000] p-1.5 rounded-sm">
                                <span className="text-white font-black text-xl leading-none">U</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-black leading-none">UAC</h1>
                                <p className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">Online Shop</p>
                            </div>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 uppercase text-sm font-bold tracking-wider">
                        <a href="#" className="hover:text-[#BE0000]">New Arrivals</a>
                        <a href="#" className="hover:text-[#BE0000]">Apparel</a>
                        <a href="#" className="hover:text-[#BE0000]">Accessories</a>
                        <a href="#" className="hover:text-[#BE0000]">Athletics</a>
                        <a href="#" className="hover:text-[#BE0000]">UAC Exclusive</a>
                    </nav>

                    <div className="flex items-center gap-6">
                        <button className="hover:text-[#BE0000]"><Search size={22} /></button>
                        <button className="hover:text-[#BE0000] hidden sm:block"><User size={22} /></button>
                        <button className="relative hover:text-[#BE0000]" onClick={() => setCartCount(c => c + 1)}>
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#BE0000] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-xl font-black uppercase">
                            <a href="#" onClick={() => setIsMenuOpen(false)}>New Arrivals</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Apparel</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Accessories</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Athletics</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>UAC Exclusive</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[70vh] bg-black overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=1920&q=80"
                        alt="University Campus"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                    <div className="container relative h-full flex flex-col justify-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                                REP THE <span className="text-[#BE0000]">RED</span>.<br />
                                WEAR THE <span className="text-[#BE0000]">PRIDE</span>.
                            </h2>
                            <p className="max-w-xl text-lg text-gray-300 mb-8 font-medium">
                                Official UAC merchandise designed for students, alumni, and fans.
                                Premium quality university gear delivered directly to your door.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-[#BE0000] hover:bg-[#990000] text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center gap-2">
                                    Shop Now <ChevronRight size={18} />
                                </button>
                                <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all">
                                    New Arrivals
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-[#BE0000] font-black uppercase tracking-widest text-xs">Summer 2024 Collection</span>
                                <h2 className="text-4xl mt-2 font-black">Featured Gear</h2>
                            </div>
                            <a href="#" className="hidden sm:flex items-center gap-1 font-bold uppercase text-xs border-b-2 border-black pb-1 hover:text-[#BE0000] hover:border-[#BE0000]">
                                View All Collection <ChevronRight size={14} />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    whileHover={{ y: -10 }}
                                    className="group bg-white border border-gray-100 shadow-sm"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-md mb-2 group-hover:text-[#BE0000] transition-colors">{product.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="font-black text-xl">${product.price}</span>
                                            <button
                                                onClick={() => setCartCount(c => c + 1)}
                                                className="bg-black hover:bg-[#BE0000] text-white p-2 rounded-full transition-colors"
                                            >
                                                <ShoppingCart size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brand Section */}
                <section className="py-20 bg-[#BE0000] text-white overflow-hidden relative">
                    <div className="absolute right-[-10%] top-[-10%] opacity-10">
                        <span className="text-[40rem] font-black leading-none">U</span>
                    </div>
                    <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-5xl font-black mb-6">IMAGINE.<br />IT'S U.</h2>
                            <p className="text-xl mb-8 font-medium opacity-90">
                                UAC Online Shop is more than just a store. It's the home of Red Zone pride in Asia.
                                Every purchase supports student programs and campus life at the University of Utah Asia Campus.
                            </p>
                            <button className="bg-white text-[#BE0000] px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all">
                                Learn Our Story
                            </button>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Students" className="rounded-sm" />
                            <img src="https://images.unsplash.com/photo-1525921429573-05911ad2ac0b?auto=format&fit=crop&w=600&q=80" alt="Campus Life" className="mt-8 rounded-sm" />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white pt-20 pb-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="bg-[#BE0000] p-1.5 rounded-sm">
                                    <span className="text-white font-black text-xl leading-none">U</span>
                                </div>
                                <h1 className="text-xl font-black">UAC SHOP</h1>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 max-w-xs">
                                The official online marketplace for the University of Utah Asia Campus. Rep the U wherever you are.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-[#BE0000]"><Instagram size={20} /></a>
                                <a href="#" className="hover:text-[#BE0000]"><Twitter size={20} /></a>
                                <a href="#" className="hover:text-[#BE0000]"><Facebook size={20} /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-black mb-6 tracking-widest">SHOP</h4>
                            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-bold uppercase tracking-tighter">
                                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-white">Best Sellers</a></li>
                                <li><a href="#" className="hover:text-white">Men's Apparel</a></li>
                                <li><a href="#" className="hover:text-white">Women's Apparel</a></li>
                                <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-black mb-6 tracking-widest">SUPPORT</h4>
                            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-bold uppercase tracking-tighter">
                                <li><a href="#" className="hover:text-white">Track Order</a></li>
                                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                                <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-black mb-6 tracking-widest">NEWSLETTER</h4>
                            <p className="text-gray-400 text-sm mb-6">Get early access to drops and exclusive offers.</p>
                            <div className="flex border-b border-gray-700 pb-2">
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="bg-transparent border-none outline-none text-xs w-full placeholder:text-gray-600 font-bold"
                                />
                                <button className="text-[#BE0000] font-black text-xs">JOIN</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            © 2024 University of Utah Asia Campus. All Rights Reserved.
                        </p>
                        <div className="flex gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Use</a>
                            <a href="#" className="hover:text-white">Accessibility</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
