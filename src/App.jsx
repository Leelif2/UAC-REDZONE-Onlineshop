import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const products = [
        { id: 1, name: "UAC Elite Performance Hoodie", price: 69.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80", category: "Apparel" },
        { id: 2, name: "Utah Utes Sideline Tee", price: 34.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", category: "Athletics" },
        { id: 3, name: "Legacy Interlocking U Cap", price: 28.99, image: "https://images.unsplash.com/photo-1588850567047-1845a9ee02f9?auto=format&fit=crop&w=800&q=80", category: "Accessories" },
        { id: 4, name: "UAC Premium Red Zone Bag", price: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", category: "Gear" },
    ];

    const categories = [
        { name: "Basketball", icon: "🏀", bgColor: "#111" },
        { name: "Football", icon: "🏈", bgColor: "#CC0000" },
        { name: "Gym & Training", icon: "🏋️", bgColor: "#111" },
        { name: "Lifestyle", icon: "👕", bgColor: "#333" },
    ];

    return (
        <div className="min-h-screen flex flex-col selection:bg-[#CC0000] selection:text-white">
            {/* Red Alert Bar */}
            <div className="bg-[#CC0000] text-white text-[10px] sm:text-xs py-2.5 text-center uppercase tracking-[0.2em] font-black border-b border-black/10">
                Free Shipping on Orders Over $75 | <span className="underline decoration-2 underline-offset-4">Shop the Red Zone</span>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container flex items-center justify-between h-24">
                    <div className="flex items-center gap-6">
                        <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="bg-[#CC0000] p-2.5 rounded-sm transform group-hover:rotate-12 transition-transform duration-500">
                                <span className="text-white font-black text-2xl leading-none">U</span>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-black leading-none tracking-tighter">UAC SHOP</h1>
                                <p className="text-[9px] uppercase tracking-widest text-[#CC0000] font-black">Official Store</p>
                            </div>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-10 uppercase text-[13px] font-black tracking-widest">
                        {["New Arrivals", "Apparel", "Athletics", "UAC Exclusive", "Sale"].map((item) => (
                            <a key={item} href="#" className="relative group overflow-hidden">
                                <span className="group-hover:text-[#CC0000] transition-colors">{item}</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#CC0000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-5 sm:gap-8">
                        <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 group focus-within:border-[#CC0000] transition-colors">
                            <Search size={18} className="text-gray-400 group-focus-within:text-[#CC0000]" />
                            <input type="text" placeholder="SEARCH GEAR" className="bg-transparent border-none outline-none text-[10px] font-black w-24 ml-2 placeholder:text-gray-400" />
                        </div>
                        <button className="hover:text-[#CC0000] transition-transform hover:scale-110"><User size={24} /></button>
                        <button className="relative group" onClick={() => setCartCount(c => c + 1)}>
                            <ShoppingCart size={24} className="group-hover:text-[#CC0000] group-active:scale-90 transition-all" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#CC0000] border-2 border-white text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-3xl font-black uppercase">
                            {["New Arrivals", "Apparel", "Athletics", "UAC Exclusive", "Sale"].map(item => (
                                <a key={item} href="#" className="border-b-4 border-gray-50 pb-2 hover:border-[#CC0000] hover:text-[#CC0000] transition-all" onClick={() => setIsMenuOpen(false)}>{item}</a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                {/* Hero Section - High Resolution & Bold */}
                <section className="relative h-[85vh] bg-black overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=1920&q=80"
                        alt="University Campus"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="container relative h-full flex flex-col justify-center text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-block bg-[#CC0000] text-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-2xl">
                                The Heritage Collection
                            </div>
                            <h2 className="text-6xl md:text-9xl font-black mb-6 leading-[0.9] tracking-tighter">
                                REP THE <br />
                                <span className="text-white drop-shadow-[0_5px_15px_rgba(204,0,0,0.5)]">UTAH </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CC0000] to-red-400">RED.</span>
                            </h2>
                            <p className="max-w-2xl text-xl text-gray-300 mb-10 font-bold leading-relaxed uppercase tracking-wide">
                                Experience the intensity of the Utes. High-performance gear <br />
                                tailored for the University of Utah Asia Campus elite.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="group bg-[#CC0000] hover:bg-white text-white hover:text-[#CC0000] px-10 py-5 font-black uppercase tracking-widest text-sm transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(204,0,0,0.3)]">
                                    Shop Red Zone <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="border-4 border-white hover:border-[#CC0000] hover:bg-[#CC0000] text-white px-10 py-5 font-black uppercase tracking-widest text-sm transition-all">
                                    New Arrivals
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Large Background 'U' */}
                    <div className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-[20%] pointer-events-none opacity-10">
                        <span className="text-[60rem] font-black leading-none text-[#CC0000] select-none">U</span>
                    </div>
                </section>

                {/* Categories Grid - Shop by Sport */}
                <section className="py-24 bg-gray-50">
                    <div className="container">
                        <h3 className="text-3xl font-black mb-12 text-center">Shop by Category</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((cat) => (
                                <motion.div
                                    key={cat.name}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="relative aspect-square overflow-hidden cursor-pointer group shadow-xl"
                                    style={{ backgroundColor: cat.bgColor }}
                                >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                                        <span className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
                                        <h4 className="text-xl font-black uppercase tracking-tighter">{cat.name}</h4>
                                        <div className="mt-4 w-12 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Products - Refined Premium Styling */}
                <section className="py-32 bg-white">
                    <div className="container">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                            <div className="text-center md:text-left">
                                <span className="text-[#CC0000] font-black uppercase tracking-[0.4em] text-xs">Summer Performance</span>
                                <h2 className="text-5xl mt-3 font-black tracking-tighter">Elite Selections</h2>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"><ChevronRight className="rotate-180" /></button>
                                <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"><ChevronRight /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    whileHover={{ y: -15 }}
                                    className="group relative bg-[#FBFBFB] border-2 border-transparent transition-all duration-500 hover:border-[#CC0000] utah-border-hover"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        {/* Hover Button Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setCartCount(c => c + 1); }}
                                                className="w-full bg-[#CC0000] text-white py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-colors"
                                            >
                                                <ShoppingCart size={16} /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-8 bg-white border-t border-gray-50">
                                        <span className="text-[10px] font-black text-[#CC0000] uppercase tracking-widest">{product.category}</span>
                                        <h3 className="text-lg mt-1 mb-3 font-black tracking-tight group-hover:text-[#CC0000] transition-colors h-14 overflow-hidden">{product.name}</h3>
                                        <div className="flex justify-between items-end">
                                            <span className="font-black text-2xl tracking-tighter">${product.price}</span>
                                            <ChevronRight className="text-gray-300 group-hover:text-[#CC0000] group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Utah Power Section - Dark Theme */}
                <section className="py-40 bg-[#111] text-white overflow-hidden relative selection:bg-white selection:text-black">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </div>
                    <div className="container relative z-10 flex flex-col md:flex-row items-center gap-20">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-6 relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CC0000] opacity-20 blur-[100px]" />
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Students" className="rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                <img src="https://images.unsplash.com/photo-1525921429573-05911ad2ac0b?auto=format&fit=crop&w=800&q=80" alt="Campus Life" className="mt-12 rounded-sm shadow-2xl grayscale" />
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <span className="text-[#CC0000] font-black uppercase tracking-[0.5em] text-xs">UAC DNA</span>
                            <h2 className="text-6xl font-black mt-4 mb-8 leading-[0.9] tracking-tighter">IMAGINE.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">IT'S YOU.</span></h2>
                            <p className="text-xl mb-12 font-medium leading-relaxed text-gray-400">
                                UAC Online Shop represents the cutting edge of university culture in Asia.
                                Every stitch, every design, and every product carries the weight of a century-old
                                tradition of excellence from the University of Utah.
                            </p>
                            <button className="group relative px-10 py-5 font-black uppercase tracking-widest text-sm overflow-hidden">
                                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">Discover Our Story</span>
                                <span className="absolute inset-0 bg-white group-hover:bg-[#CC0000] transition-all duration-500" />
                                <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-[#CC0000] transition-transform duration-500" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer - Professional Dark Layout */}
            <footer className="bg-[#0A0A0A] text-white pt-32 pb-12 border-t-8 border-[#CC0000] selection:bg-[#CC0000]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#CC0000] p-3 rounded-sm">
                                    <span className="text-white font-black text-2xl">U</span>
                                </div>
                                <h1 className="text-2xl font-black tracking-tighter">UAC SHOP</h1>
                            </div>
                            <p className="text-gray-500 text-sm font-medium leading-loose">
                                The exclusive hub for University of Utah Asia Campus merchandise.
                                Defining athletic prestige and academic leadership through premium apparel.
                            </p>
                            <div className="flex gap-6">
                                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#CC0000] hover:-translate-y-1 transition-all duration-300">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: "Gear", links: ["New Arrivals", "Best Sellers", "Men's Gear", "Women's Gear", "Accessories"] },
                            { title: "Service", links: ["Order Status", "Shipping", "Returns", "Size Guide", "Support"] },
                        ].map(col => (
                            <div key={col.title}>
                                <h4 className="text-xs font-black mb-10 tracking-[0.3em] text-[#CC0000]">{col.title}</h4>
                                <ul className="space-y-5">
                                    {col.links.map(link => (
                                        <li key={link}><a href="#" className="text-[13px] text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="bg-[#1A1A1A] p-10 rounded-sm">
                            <h4 className="text-xs font-black mb-6 tracking-[0.3em] text-[#CC0000]">THE RED ZONE</h4>
                            <p className="text-gray-400 text-sm mb-8 font-medium">Early access, limited drops, and campus news.</p>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="ENTER EMAIL"
                                    className="bg-black/50 border border-gray-800 p-4 text-[10px] font-black placeholder:text-gray-600 outline-none focus:border-[#CC0000] transition-colors"
                                />
                                <button className="bg-[#CC0000] hover:bg-white hover:text-[#CC0000] text-white py-4 font-black text-xs uppercase tracking-widest transition-all">SIGN UP</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
                        <p>© 2024 University of Utah Asia Campus. All Rights Reserved.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white">Privacy</a>
                            <a href="#" className="hover:text-white">Terms</a>
                            <a href="#" className="hover:text-white">Accessibility</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
