import { menuItems } from '@/lib/data';
import MenuCard from './MenuCard';

export default function MenuSection() {
  return (
    <section className="py-20 bg-[#FAF6EC]" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0F3D2E] uppercase">Dine In &amp; Takeaway</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">Our Most Loved Breakfast Items</h2>
            <p className="text-stone-600 text-sm mt-2 max-w-xl">
              Freshly cooked on order. Prices are inclusive of traditional chutneys, gun powder, and fresh hot sambar.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-700 font-medium bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Dine-in on fresh Banana Leaves
            </span>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
