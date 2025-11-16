import { motion } from "framer-motion";
import { ShieldCheck, MapPin, BadgeDollarSign, Building2, Link as LinkIcon, Sparkles } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Overené ponuky",
    desc: "Každá nehnuteľnosť prechádza manuálnou aj automatickou kontrolou kvality.",
  },
  {
    icon: MapPin,
    title: "Presné lokality",
    desc: "Interaktívne mapy, školské obvody a občianska vybavenosť na pár klikov.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparentné ceny",
    desc: "História cien, odhady a porovnania v rámci lokality.",
  },
  {
    icon: Building2,
    title: "Pre developerov",
    desc: "Nástroje na správu projektov, leadov a marketingových kampaní.",
  },
  {
    icon: LinkIcon,
    title: "Bezproblémové prepojenia",
    desc: "API integrácie na CRM, analytiku a inzerciu na partnerských weboch.",
  },
  {
    icon: Sparkles,
    title: "Moderný dizajn",
    desc: "Rýchly, responzívny a prístupný UI postavený na najnovších štandardoch.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Prečo si vybrať nás</h2>
          <p className="mt-2 text-gray-600">Platforma navrhnutá pre realitky, developerov aj jednotlivcov.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
