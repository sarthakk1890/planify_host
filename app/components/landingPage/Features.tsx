import { UserPlus, Zap, ShieldCheck, Smile } from "lucide-react";

const features = [
  {
    name: "Sign Up Effortlessly",
    description:
      "Getting started with Planify is simple and free. Create an account in seconds and unlock seamless scheduling features.",
    icon: UserPlus, // Represents effortless sign-up
  },
  {
    name: "Lightning-Fast Scheduling",
    description:
      "Planify saves you time by making scheduling meetings incredibly quick and efficient. No more back-and-forth emails.",
    icon: Zap, // Represents speed and efficiency
  },
  {
    name: "Advanced Security with Nylas",
    description:
      "Your data is safe with us. Planify leverages Nylas to provide top-tier security and protect your sensitive information.",
    icon: ShieldCheck, // Represents security and trust
  },
  {
    name: "Intuitive and User-Friendly",
    description:
      "Designed for ease of use, Planify ensures a smooth and enjoyable experience for everyone, regardless of tech expertise.",
    icon: Smile, // Represents user-friendliness and satisfaction
  },
];

export function Features() {
  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Simplify Scheduling</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Your meetings, organized in moments
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Planify transforms the way you schedule meetings. In just a few clicks, create and manage appointments with ease, saving you time and effort.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
