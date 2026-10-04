import { whyPillars } from '@/lib/data';

export default function WhyJSM() {
  return (
    <section className="benefits-frame" id="why-jsm">
      <div className="benefits-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">Quality Commitment</span>
            <h2 className="benefits-heading font-serif font-bold text-white mt-1">Why Hyderabad Chooses JSM</h2>
            <p className="text-stone-300 text-sm mt-2">Traditional preparation methods, zero compromise on hygiene, and authentic rural taste</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyPillars.map((pillar) => (
              <div key={pillar.title} className="benefit-card-html text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 mx-auto flex items-center justify-center text-2xl font-bold">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-base text-stone-100">{pillar.title}</h3>
                <p className="text-xs text-stone-300 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
