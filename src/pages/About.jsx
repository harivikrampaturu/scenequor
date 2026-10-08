import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle('About', 'Learn about Scenequor, a Vancouver product company shipping Cinematic planning product that turns a still into a shot list and camera notes.');
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading eyebrow="About Scenequor" title="A Product, Not a Services Desk" subtitle="Cinematic planning product that turns a still into a shot list and camera notes." />
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Story</h3>
          <p className="mb-4 text-ink-soft">Scenequor started in Vancouver with assistant directors who rebuilt shot lists from stills by hand.</p>
          <p className="mb-4 text-ink-soft">A still plus a lens should return coverage and camera notes.</p>
          <p className="text-ink-soft">That planner is a vision product, not a freelance storyboard desk.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
          <p className="mb-4 text-ink-soft">Scenequor reads a still with a vision model, then a planner proposes shots conditioned on lens and scene type.</p>
          <p className="mb-4 text-ink-soft">Planning models train offline. Each list is inference.</p>
          <p className="text-ink-soft">GPUs keep still encoding fast enough for on-set iteration. No NVIDIA partnership claimed.</p>
        </div>
        <SectionHeading eyebrow="Our Team" title="The People Behind Scenequor" subtitle="Based in Vancouver, Canada." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="glass-card rounded-xl p-6 text-center">
              <img src={member.avatar} alt={member.name} className="mx-auto mb-4 h-20 w-20 rounded-full" />
              <h4 className="font-display text-lg font-semibold text-ink">{member.name}</h4>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
