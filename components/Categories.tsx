import { categories } from '@/lib/data';

export default function Categories() {
  return (
    <section className="categories-frame" id="categories">
      <div className="category-panel mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto mb-0">
          <span className="text-xs font-bold tracking-widest text-[#0F3D2E]">Curated offerings</span>
          <h2 className="category-section-title font-serif font-bold text-stone-900 mt-1">Our Culinary Categories</h2>
          <div className="w-16 h-1 bg-[#E5A91E] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="category-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#0F3D2E] text-center flex flex-col justify-between">
              <div>
                <div className="category-icon flex items-center justify-center text-2xl" aria-hidden="true">{cat.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">{cat.text}</p>
              </div>
              <span className="inline-block min-h-10 py-2 px-4 bg-amber-100 text-amber-800 font-bold text-lg rounded-full border border-amber-300">
                {cat.price}
              </span>
              <a className="category-explore" href="#menu">Explore menu</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
