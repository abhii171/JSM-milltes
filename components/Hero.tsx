export default function Hero() {
  return (
    <section className="relative bg-[#0F3D2E] text-white pt-12 pb-20 md:py-24 overflow-hidden border-b-4 border-amber-500/30" id="home">
      {/* Decorative Backdrop Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E5A91E 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Hero Copy Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="h-9" aria-hidden="true"></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-stone-100">
              Quality you can taste. <br />
              <span className="text-[#E5A91E]">Hygiene you can trust.</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              JSM Millet Tiffins and Ragimuddha, Hyderabad, is a food brand dedicated to bringing the goodness of traditional millet-based food into modern everyday life. We also preserve the traditional experience—serving our food on steel plates with banana leaves, groundnut and tomato chutneys, and karampodi.
            </p>
            {/* Key Metric Highlights */}
            <div className="pt-2 grid grid-cols-3 gap-4 border-y border-emerald-800/80 py-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400">100%</span>
                <span className="text-xs text-stone-300 uppercase tracking-wider"> Quality Millets &amp; Branded Pulses </span>
              </div>
              <div className="text-center border-x border-emerald-800/80">
                <span className="block text-2xl font-bold text-amber-400">Pure</span>
                <span className="text-xs text-stone-300 uppercase tracking-wider"> Sunflower Oil, Homemade Masalas</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400">₹20</span>
                <span className="text-xs text-stone-300 uppercase tracking-wider">Starting From</span>
              </div>
            </div>
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a className="w-full sm:w-auto px-8 py-3.5 text-base font-bold rounded-full bg-[#E5A91E] text-stone-950 hover:bg-[#C99214] shadow-lg hover:shadow-xl transition-all duration-200 text-center" href="#menu">
                View Menu
              </a>
              <a className="w-full sm:w-auto px-8 py-3.5 text-base font-bold rounded-full border-2 border-emerald-400 text-stone-100 hover:bg-emerald-900/60 transition-all duration-200 text-center" href="#locations">
                Find a Store
              </a>
            </div>
          </div>
          {/* Hero Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              {/* Golden accent halo ring */}
              <div className="relative bg-emerald-950 p-3 rounded-2xl border border-emerald-700/60 shadow-2xl overflow-hidden group">
                <img alt="Crispy golden Ragi Dosa served on fresh banana leaf with traditional chutneys and podi" className="w-full h-[460px] object-cover object-center rounded-xl transition duration-500 group-hover:scale-105" src="/images/menu/crispy-ghee-ragi-dosa.png" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F3D2E]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-600/40 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-300">Signature serving</p>
                      <h2 className="text-base font-bold text-white">Crispy Ghee Ragi Dosa</h2>
                    </div>
                    <span className="text-lg font-bold text-amber-400">₹50</span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1">Served with stone-ground peanut chutney, tangy tomato paste &amp; gun powder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
