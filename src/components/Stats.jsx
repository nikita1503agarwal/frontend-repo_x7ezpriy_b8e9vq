import { motion } from "framer-motion";

const stats = [
  { label: "Aktívne ponuky", value: "18 400+" },
  { label: "Overení makléri", value: "950+" },
  { label: "Priemerný čas predaja", value: "21 dní" },
  { label: "Ušetrené na poplatkoch", value: "3.1M €" },
];

export default function Stats() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
