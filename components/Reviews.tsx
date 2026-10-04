import { reviews } from '@/lib/data';

export default function Reviews() {
  return (
    <section className="py-20 bg-[#FAF6EC] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0F3D2E] uppercase">What Hyderabadi Foodies Say</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">Real Reviews from Happy Diners</h2>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-2">
            <div className="flex text-amber-400">★★★★★</div>
            <span className="text-sm font-semibold text-stone-800">4.8 / 5 on Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div key={rev.author} className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm relative space-y-4">
              <div className="flex text-amber-400 text-sm">{rev.rating}</div>
              <p className="text-stone-700 text-sm leading-relaxed italic">
                {rev.text}
              </p>
              <div className="pt-2 border-t border-stone-100">
                <p className="text-sm font-bold text-stone-900">{rev.author}</p>
                <p className="text-xs text-stone-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
