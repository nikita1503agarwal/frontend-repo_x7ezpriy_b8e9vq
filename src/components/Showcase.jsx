import { motion } from "framer-motion";

const listings = [
  {
    id: 1,
    title: "Moderný 4-izbový dom so záhradou",
    location: "Bratislava - Ružinov",
    price: "489 000 €",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Svetlý 2-izbový byt v novostavbe",
    location: "Košice - Západ",
    price: "199 900 €",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Priestranný penthouse s terasou",
    location: "Bratislava - Staré Mesto",
    price: "879 000 €",
    img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="listings" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vybrané ponuky</h2>
            <p className="mt-2 text-gray-600">Starostlivo kurátorované nehnuteľnosti, ktoré zaujmú na prvý pohľad.</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Zobraziť všetky</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <motion.article
              key={l.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="relative">
                <img src={l.img} alt="" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow ring-1 ring-black/5">
                  {l.location}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900">{l.title}</h3>
                <div className="mt-2 text-sm text-gray-600">{l.location}</div>
                <div className="mt-3 text-lg font-bold text-gray-900">{l.price}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
