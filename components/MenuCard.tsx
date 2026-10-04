import { MenuItem } from '@/lib/data';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article
      style={{ order: item.order }}
      className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition duration-200 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <img
          alt={item.imageAlt}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          src={item.image}
        />
        <span className="absolute top-3 right-3 bg-[#E5A91E] text-stone-950 font-extrabold text-sm px-3 py-1 rounded-full shadow">
          {item.price}
        </span>
        <span className={`absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded backdrop-blur-sm ${item.tagClass || 'bg-[#0F3D2E]/90 text-white'}`}>
          {item.tag}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-stone-900 font-serif">{item.title}</h3>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span>{item.metaLeft}</span>
          <span className="text-emerald-800 font-semibold">{item.metaRight}</span>
        </div>
      </div>
    </article>
  );
}
