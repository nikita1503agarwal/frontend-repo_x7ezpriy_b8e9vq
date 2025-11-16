import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="how" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.100),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-600 to-blue-600 p-1 shadow-xl ring-1 ring-black/10">
          <div className="grid lg:grid-cols-2 gap-0 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white">
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Predávate alebo prenajímate?</h3>
              <p className="mt-2 text-gray-600">Zverejnite svoju ponuku do niekoľkých minút a oslovte tisíce záujemcov.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition">Vytvoriť inzerát</motion.button>
                <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:shadow transition">Kontaktovať podporu</motion.button>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative p-10 lg:p-12">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg">
                <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop" alt="Handshake" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <div className="text-xs text-gray-500">Priemerná návštevnosť mesačne</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">1.2M+</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
