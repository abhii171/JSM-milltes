import { navItems } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#0A2A1F] text-stone-300 pt-16 pb-12 border-t-2 border-emerald-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">
          {/* Brand Info */}
          <div className="space-y-4">
            <img
              alt="JSM Millet Tiffins &amp; Ragimuddha"
              className="h-16 w-auto object-contain rounded"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxwHPN2DrB2E26fuHoIQt7LgTVAPXmRrgTIrVxnBfv2FQyGssjrvkHhr_GKaKTsHF42IZb7WCGaUz_0ho_0WWNNy3kCZwuOGaxNssf92U1El6tuhk_ARi4LauQIjF8ITjk5TgLjrLXWqbbPSrDk0AxAUAp6VMbRUiN3LOx-jahuWuQG3dPiwlKhLbIwoomr9Xd5FOK8qlcqQRE_1YKawDzxEySCkMbouKoOLLIVrG-DUEr8PEMnUvodDa0K3GAJLMg2Q"
            />
            <p className="text-xs leading-relaxed text-stone-400">
              Bringing the traditional flavours of Andhra, Telangana, and Rayalaseema, along with wholesome millet breakfasts, back to Hyderabad.
            </p>
            <div className="space-y-2 text-xs">
              <p className="font-semibold text-amber-400">Founded with love by</p>
              <p className="text-stone-300"><span className="font-semibold text-white">Manoj Kumar Chinnamsetti</span><br />Founder &amp; CEO</p>
              <p className="text-stone-300"><span className="font-semibold text-white">Sowjanya Garnapudi</span><br />Co-Founder</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-amber-400 transition" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bulk & Event Catering */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Special Occasions</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Planning a family ceremony, wellness breakfast, or office gathering? We offer fresh, hot millet food counters and takeaway catering for all occasions. We undertake catering orders for events of all sizes, bringing delicious, nutritious, and traditional millet-based food to your special event.
            </p>
            <div className="pt-2">
              <span className="block text-xs text-stone-400">Direct Inquiries:</span>
              <span className="text-sm font-bold text-amber-300">+91 94917 33480</span>
            </div>
          </div>

          {/* Working Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operational Hours</h4>
            <p className="rounded-lg border border-amber-400/50 bg-amber-400/10 p-3 text-xs font-semibold leading-relaxed text-amber-200">
              Open 6 days a week, Monday to Saturday.<br />
              <span className="font-bold text-amber-300">Every Sunday is a holiday.</span>
            </p>
            <div className="bg-[#0F3D2E] p-3 rounded-lg border border-emerald-700/60 text-xs space-y-1">
              <div className="text-stone-300 font-semibold">Morning: 6:30 AM – 12:00 PM</div>
              <div className="text-stone-300 font-semibold">Evening: 5:00 PM – 11:30 PM</div>
            </div>
            <p className="text-xs text-stone-400">Hygiene Certified • Pure Veg Millet Cooking</p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400">
          <p>© 2026 JSM Millet Tiffins and Ragimuddha. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 text-center sm:text-right">
            <p>Opposite Viswanadha Garden, JPN Nagar, Miyapur</p>
            <p>Hyderabad, Telangana, India - 500049</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
