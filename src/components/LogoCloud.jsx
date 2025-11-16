import { motion } from "framer-motion";

const logos = [
  {
    name: "Slovenská sporiteľňa",
    src: "https://images.unsplash.com/photo-1595511211956-b02dc24e8604?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbG92ZW5zayVDMyVBMSUyMHNwb3JpdGUlQzQlQkUlQzUlODhhfGVufDB8MHx8fDE3NjMzMTUwMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "Tatra banka",
    src: "https://images.unsplash.com/photo-1595511211956-b02dc24e8604?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbG92ZW5zayVDMyVBMSUyMHNwb3JpdGUlQzQlQkUlQzUlODhhfGVufDB8MHx8fDE3NjMzMTUwMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "HB Reavis",
    src: "https://images.unsplash.com/photo-1761241494934-31857bd33c98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYXRyYSUyMGJhbmthfGVufDB8MHx8fDE3NjMzMTUwMDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "JTRE",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JTRE_logo.svg/512px-JTRE_logo.svg.png",
  },
  {
    name: "Penta Real Estate",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Penta_Investments_logo.svg/512px-Penta_Investments_logo.svg.png",
  },
];

export default function LogoCloud() {
  return (
    <section aria-label="Dôverujú nám" className="py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">Dôverujú nám</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-80">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-7 w-auto grayscale contrast-125 opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
