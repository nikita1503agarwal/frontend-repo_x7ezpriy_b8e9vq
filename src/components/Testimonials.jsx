import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Predaj bytu prebehol rýchlo a transparentne. Oceňujem prehľadnosť portálu a kvalitu leadov.",
    author: "Lucia, majiteľka bytu",
  },
  {
    quote:
      "Ako developer máme prehľad o dopytoch aj kampaniach v reálnom čase. Ušetrilo nám to kopec času.",
    author: "Peter, projektový manažér",
  },
  {
    quote:
      "Najlepšie vyhľadávanie na trhu. Filter podľa lokality a cien funguje skvelo.",
    author: "Marek, kupujúci",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Čo hovoria naši klienti</h2>
          <p className="mt-2 text-gray-600">Skúsenosti overené reálnymi príbehmi.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-blue-500/20" />
              <p className="text-gray-700">{t.quote}</p>
              <footer className="mt-4 text-sm font-medium text-gray-900">{t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
