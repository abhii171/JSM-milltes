export default function Story() {
  return (
    <section className="py-20 bg-[#FAF6EC] border-b border-stone-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="story-label">
          Our Story
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E5A91E]/20 rounded-full blur-xl"></div>
              <div className="story-image-card overflow-hidden rounded-2xl shadow-xl border border-stone-200 bg-white">
                <img alt="JSM Millet Tiffins and Ragimuddha story poster" className="w-full h-auto object-contain" src="/images/jsm-story-poster.png" />
              </div>
            </div>
          </div>
          {/* Story Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="story-heading text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              <span className="story-heading-intro">From a family need</span>
              <span className="story-heading-main">to a <span className="story-heading-highlight">shared journey</span></span>
            </h2>
            <div className="story-narrative text-stone-700 text-base">
              <p>
                JSM Millet Tiffins &amp; Ragi Mudde started for a simple and personal reason — to support My Father-In-Law and Mother-In-Law family during a difficult time, help with their livelihood, and clear their debts.
              </p>
              <p>
                We started with zero investment, zero experience, and very little knowledge about running a food business. We only had the willingness to learn, work hard, and keep moving forward.
              </p>
              <p>
                What began as a way to support our family slowly became something much bigger. By God’s grace, today JSM supports more than 10 families who depend on this work for their livelihood.
              </p>
              <p>
                In just one and a half years, we have served 100+ orders, with our customers consistently giving us 5-star ratings. JSM has also grown to become one of the top-rated millet tiffin options on Google in Hyderabad — something we are truly grateful for.
              </p>
              <p>
                JSM is not just a business for us. It is our family’s journey, the livelihood of many families, and a reminder that you don’t always need a big investment or years of experience to start something. Sometimes, you just need the courage to begin and the determination to keep going.
              </p>
              <p>
                We are deeply thankful to every customer who has ordered, supported, shared, reviewed, and encouraged us along the way.
              </p>
              <div className="story-mission">
                <h3>Our Mission</h3>
                <p>
                  To make traditional millet food accessible, delicious, and affordable for everyday life while staying true to authentic flavours, quality, freshness, and customer satisfaction.
                </p>
              </div>
              <p className="story-closing">
                From zero investment. Zero experience. Zero knowledge.
                <span>To a journey supporting more than 10 families.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
