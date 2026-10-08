import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const scenes = ['Interior', 'Street', 'Landscape'];
const lenses = ['Wide', 'Normal', 'Telephoto'];
const lists = {
  Interior: {
    Wide: ['Master wide from doorway', 'Reveal practical lamps'],
    Normal: ['Two-shot at table', 'Insert on hands'],
    Telephoto: ['Close on eyes', 'Rack to background door'],
  },
  Street: {
    Wide: ['Crossing wide', 'Hold for traffic'],
    Normal: ['Follow from sidewalk', 'Stop at corner'],
    Telephoto: ['Compress the avenue', 'Pick out one face'],
  },
  Landscape: {
    Wide: ['Horizon lock-off', 'Cloud move'],
    Normal: ['Foreground rock', 'Pan to ridge'],
    Telephoto: ['Isolate peak', 'Sun flare edge'],
  },
};

export default function AIDemo() {
  const [scene, setScene] = useState('Interior');
  const [lens, setLens] = useState('Wide');
  const [done, setDone] = useState(false);
  const shots = lists[scene][lens];
  return (
    <section id="demo" className="scroll-mt-24 bg-surface-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="AI Trial" title="Turn a Still into a Shot List" subtitle="Scene and lens change the coverage notes." />
        <div className="mt-8 rounded-3xl border border-primary/15 bg-surface-100 p-6">
          <div className="flex flex-wrap gap-2">{scenes.map((item) => <button key={item} type="button" onClick={() => { setScene(item); setDone(false); }} className={`rounded-md px-3 py-2 text-sm ${scene === item ? 'bg-primary text-white' : 'border border-primary/20'}`}>{item}</button>)}</div>
          <div className="mt-3 flex flex-wrap gap-2">{lenses.map((item) => <button key={item} type="button" onClick={() => setLens(item)} className={`rounded-md px-3 py-2 text-sm ${lens === item ? 'bg-secondary text-surface-50' : 'border border-primary/20'}`}>{item}</button>)}</div>
          <img src="/images/hero/product.jpg" alt="Scene still" className="mt-4 aspect-video w-full rounded-xl object-cover" />
          <button type="button" onClick={() => setDone(true)} className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white">Build shot list</button>
          {done && (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-soft">
              {shots.map((shot) => <li key={shot}>{shot} · {lens} · {scene}</li>)}
            </ol>
          )}
          <p className="mt-3 text-center text-xs text-ink-muted">Simulated planner. Change scene or lens and rebuild.</p>
        </div>
      </div>
    </section>
  );
}
