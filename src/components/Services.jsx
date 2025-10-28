import { PartyPopper, Utensils, CalendarCheck, Sparkles } from 'lucide-react';

const services = [
  {
    icon: PartyPopper,
    title: 'Party Planning & Decor',
    desc: 'From themes to traditions, we craft the special occasion of your dreams with immersive decor and flawless execution.',
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    desc: 'Exquisite multi-cuisine menus, crafted by seasoned chefs to delight every taste and dietary preference.',
  },
  {
    icon: CalendarCheck,
    title: 'Event Management',
    desc: 'Corporate events, birthdays, anniversaries, and more—planned end-to-end with precision and style.',
  },
  {
    icon: Sparkles,
    title: 'Fun Activities & Entertainment',
    desc: 'Photo booths, games, artists, and performers that add joy and energy to your celebrations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 bg-white">
      <div className="absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-b from-rose-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Services</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need under one roof—designed around your style, culture, and budget.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition ring-1 ring-transparent hover:ring-rose-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
