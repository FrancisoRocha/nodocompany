import { motion } from "framer-motion";

interface Member {
  initials: string;
  name: string;
  role: string;
  tags: string[];
}

const TEAM: Member[] = [
  {
    initials: "FR",
    name: "Francisco Rocha",
    role: "Co-Fundador & CTO",
    tags: ["react", "typescript", "n8n"],
  },
  {
    initials: "AP",
    name: "Abigail Paredes",
    role: "Directora Creativa",
    tags: ["ui/ux", "video", "branding"],
  },
  {
    initials: "GM",
    name: "Gilberto Martínez",
    role: "Backend & Infra",
    tags: ["sistemas", "backend"],
  },
  {
    initials: "AV",
    name: "Ana Velorio",
    role: "Backend & Infra",
    tags: ["java", "desarrollo"],
  },
  {
    initials: "AH",
    name: "Abraham Hernández",
    role: "Operaciones & CX",
    tags: ["ventas", "cx", "ops"],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="rounded-[10px] border border-border bg-bg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_8px_24px_rgba(37,37,36,0.06)]">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-accent-soft text-[0.85rem] font-medium text-text-secondary">
        {member.initials}
      </div>
      <h4 className="mb-1 text-[0.8rem] font-medium">{member.name}</h4>
      <p className="mb-3 text-[0.66rem] leading-snug tracking-wide text-text-tertiary">
        {member.role}
      </p>
      <div className="flex flex-wrap justify-center gap-1">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-green-soft px-2 py-0.5 text-[0.58rem] tracking-wide text-green"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="equipo" className="relative z-10 pb-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
            equipo
          </span>
          <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
            las personas detrás de nodo.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {TEAM.map((member) => (
            <MemberCard key={member.initials} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
