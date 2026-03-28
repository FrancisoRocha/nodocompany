import { motion } from "framer-motion";

interface Service {
  num: string;
  title: string;
  description: string;
  benefits: string[];
}

const SERVICES: Service[] = [
  {
    num: "01",
    title: "automatizaciones",
    description:
      "conectamos tus herramientas para que trabajen solas. whatsapp, email, facturación, crm — todo en flujo automático.",
    benefits: [
      "reduce hasta 80% del trabajo manual repetitivo",
      "cero errores humanos en procesos críticos",
      "tus clientes reciben respuesta en segundos, no horas",
      "reportes automáticos sin tocar una hoja de cálculo",
      "se conecta con las herramientas que ya usas",
    ],
  },
  {
    num: "02",
    title: "desarrollo web",
    description:
      "landing pages que convierten y sitios web que reflejan la calidad de tu negocio. rápido, responsive, sin templates.",
    benefits: [
      "diseño personalizado — no es una plantilla más",
      "optimizado para cargar en menos de 2 segundos",
      "se ve perfecto en cualquier dispositivo",
      "seo básico incluido para que te encuentren en google",
      "fácil de escalar cuando tu negocio crezca",
    ],
  },
  {
    num: "03",
    title: "soporte al cliente",
    description:
      "tu equipo de atención al cliente sin la nómina. gestión profesional de inbox, whatsapp y redes sociales.",
    benefits: [
      "atención profesional sin contratar personal fijo",
      "respuesta rápida en todos tus canales",
      "equipo con experiencia real en soporte de alto volumen",
      "reportes mensuales de satisfacción y métricas",
      "tu cliente siempre recibe atención, tú nunca te distraes",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-bg p-8 transition-colors duration-300 hover:bg-bg-card">
      <span className="mb-6 block text-[0.65rem] tracking-widest text-text-tertiary">
        {service.num}
      </span>
      <h3 className="mb-4 text-[1.05rem] font-medium tracking-tight">
        {service.title}
      </h3>
      <p className="mb-5 text-[0.82rem] leading-relaxed text-text-secondary">
        {service.description}
      </p>
      <ul className="flex flex-col gap-2">
        {service.benefits.map((benefit, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[0.75rem] leading-normal text-text-secondary"
          >
            <span className="mt-0.5 shrink-0 text-green">→</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
            servicios
          </span>
          <h2 className="mb-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
            soluciones que funcionan
            <br />
            desde el día uno.
          </h2>
          <p className="max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
            no vendemos promesas. entregamos herramientas que ahorran tiempo,
            reducen errores y escalan contigo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-border bg-border md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
