import {BadgeCheck, Clock3, ShieldCheck} from 'lucide-react';

const items = [
  {
    title: 'Artisan certifié',
    icon: BadgeCheck,
  },
  {
    title: 'Intervention rapide',
    icon: Clock3,
  },
  {
    title: 'Travail garanti',
    icon: ShieldCheck,
  },
];

export default function ReassuranceBar() {
  return (
    <section className="bg-[#f5f5f5] py-8 md:py-10">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 text-center sm:justify-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2f7d32]/15">
                  <Icon size={22} className="text-[#2f7d32]" />
                </div>

                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#222222] md:text-base">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
