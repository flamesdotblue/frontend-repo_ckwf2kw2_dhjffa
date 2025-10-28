import { ShieldCheck, Stars, HeartHandshake, Award } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'One-stop solution',
    desc: 'From decor to catering—single, reliable team for everything you need.',
  },
  {
    icon: Stars,
    title: 'Trusted expertise',
    desc: '4.9-star rating on Google. 1,000+ events expertly delivered across NCR.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized planning',
    desc: 'Tailored to your style, culture, and budget. Every detail, just right.',
  },
  {
    icon: Award,
    title: 'Quality & experience',
    desc: 'Serving since 2016 with passion, professionalism, and perfection.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-20 bg-rose-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-700">
              We blend creativity with meticulous planning to deliver stress-free, unforgettable celebrations.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-600 shadow">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white via-rose-50 to-fuchsia-50 p-1 shadow-lg ring-1 ring-rose-100">
              <div className="h-full w-full rounded-[14px] bg-white p-6 flex flex-col justify-center">
                <p className="text-2xl font-semibold text-gray-900">Who are we?</p>
                <p className="mt-3 text-gray-700">
                  R Celebrations – Wedding Planners, Event Managers & Caterers in Ghaziabad & Noida. We turn special moments into lifelong memories.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>End-to-end event planning and management</li>
                  <li>Custom decor and theme production</li>
                  <li>Premium catering with diverse cuisines</li>
                  <li>Entertainment, artists, and engaging activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
