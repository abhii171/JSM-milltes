import { outlets } from '@/lib/data';

export default function Outlets() {
  return (
    <section className="py-20 bg-[#F3EBD8]" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#0F3D2E] uppercase">Visit Us In Person</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">Our Hyderabad Outlets</h2>
          <p className="text-stone-600 text-sm mt-2">Dine-in fresh on traditional banana leaves or order takeaway</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet) => (
            <div key={outlet.name} className="bg-white rounded-2xl p-7 shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[#0F3D2E]">{outlet.name}</h3>
                  <span className={`px-2.5 py-0.5 font-bold text-xs rounded-full ${outlet.tagClass}`}>{outlet.label}</span>
                </div>
                <p className="text-xs text-stone-500 font-medium">{outlet.address}</p>
                <div className="pt-3 border-t border-stone-100 space-y-2 text-sm text-stone-700">
                  <div className="flex justify-between">
                    <span className="font-medium text-stone-500">Morning Session:</span>
                    <span className="font-semibold text-stone-800">{outlet.morning}</span>
                  </div>
                  {outlet.evening && (
                    <div className="flex justify-between">
                      <span className="font-medium text-stone-500">Evening Session:</span>
                      <span className="font-semibold text-stone-800">{outlet.evening}</span>
                    </div>
                  )}
                  <p className="pt-1 text-xs font-medium text-stone-500">{outlet.note}</p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-100">
                <a
                  className="inline-flex min-h-11 items-center justify-center px-5 py-3 text-sm font-bold rounded-lg bg-amber-100 text-[#0F3D2E] border border-amber-300 hover:bg-amber-200 transition"
                  href={outlet.maps}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get directions ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
