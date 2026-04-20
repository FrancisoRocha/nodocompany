import { motion } from "framer-motion";
import type { Member } from "../../types";
import { TEAM } from "../../data/team";
import { EASE_OUT_EXPO } from "../../config/animations";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedAvatar } from "../ui/AnimatedAvatar";

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="rounded-[10px] border border-border bg-bg p-6 sm:p-7 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_8px_24px_rgba(37,37,36,0.06)]">
      <AnimatedAvatar
        initials={member.initials}
        gradient={member.gradient}
        glow={member.glow}
      />
      <h4 className="mb-1 text-[0.92rem] font-medium">{member.name}</h4>
      <p className="mb-4 text-[0.7rem] leading-snug tracking-wide text-text-tertiary">
        {member.role}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-accent-soft px-2 py-0.5 text-[0.6rem] tracking-wide text-accent"
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
        <SectionHeader
          className="mb-14"
          align="center"
          eyebrow="equipo"
          title="los fundadores de nodo."
          description="un equipo compacto que se mueve rápido. sin intermediarios, hablas directo con quien construye."
        />

        <motion.div
          className="mx-auto grid max-w-[640px] grid-cols-1 gap-5 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          {TEAM.map((member) => (
            <MemberCard key={member.initials} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
