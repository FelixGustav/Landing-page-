import { FC } from "react";
import { Info, Mail, Instagram } from "lucide-react";

const features = [
  {
    icon: <Instagram className="w-10 h-10 text-purple-600" />,
    title: "Instagram",
    
  },
  {
    icon: <Mail className="w-10 h-10 text-purple-600" />,
    title: "E-mail",
  },
  {
    icon: <Info className="w-10 h-10 text-purple-600" />,
    title: "informaçoes",
    desc: "Descubra mais sobre a Rosa do deserto.",
  },
];

const Features: FC = () => {
  return (
    <section className="py-20 px-10 grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white shadow-lg rounded-2xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">{f.icon}</div>
          <h3 className="text-xl font-bold mb-2">{f.title}</h3>
          <p className="text-gray-500">{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
