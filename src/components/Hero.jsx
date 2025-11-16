import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.100),transparent_40%),radial-gradient(ellipse_at_bottom_left,theme(colors.indigo.100),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Nájdite svoj nový domov s istotou
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Profesionálny realitný portál so spoľahlivými ponukami, presným
              vyhľadávaním a moderným dizajnom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8"
            >
              <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-2 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="flex-1 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Lokalita (napr. Bratislava)"
                  />
                  <input
                    className="flex-1 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Typ nehnuteľnosti"
                  />
                  <input
                    className="w-full sm:w-40 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Cena do"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
                    <Search size={16} />
                    Vyhľadávať
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <span className="font-semibold text-gray-900">10,000+</span> spokojných
                zákazníkov
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop"
                alt="Modern home"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute -bottom-6 -right-6 hidden md:block"
            >
              <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-4">
                <div className="text-xs text-gray-500">Priemerná doba predaja</div>
                <div className="mt-1 text-2xl font-bold">21 dní</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
