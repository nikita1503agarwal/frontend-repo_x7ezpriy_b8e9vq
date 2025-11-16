import { Menu, Home, Building2, Phone, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-semibold text-gray-900"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-sm">
              <Home size={18} />
            </span>
            <span className="text-lg">RealEstate Pro</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Funkcie</a>
            <a href="#listings" className="hover:text-gray-900 transition-colors">Ponuky</a>
            <a href="#how" className="hover:text-gray-900 transition-colors">Ako to funguje</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Kontakt</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:shadow transition">
              <Search size={16} />
              Hľadať
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
              <Building2 size={16} />
              Pridať inzerát
            </button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 bg-white p-2 text-gray-700">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
