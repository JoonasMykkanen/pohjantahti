import { ShieldCheck, TrendingUp, Handshake, PiggyBank } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck size={48} className="text-blue-500" />,
    title: 'Tuottotakuu',
    description: 'Kaikissa kohteissa on 12 kuukauden tuottotakuu. Mikäli vuokralainen irtisanoo asunnon, etsimme uuden vuokralaisen ja maksamme mahdollisten tyhien kuukausien vuokran!',
  },
  {
    icon: <PiggyBank size={48} className="text-green-500" />,
    title: 'Rahoitus kumppanisi',
    description: 'Kauttamme saat kaiken tarvitsemasi tuen rahoituksen järjestämiseen. Aina pankki yhteyshenkilöstä materiaalien valmisteluun asti!',
  },
  {
    icon: <Handshake size={48} className="text-purple-500" />,
    title: 'Yhteistyö',
    description: 'Tavoitteeni on rakentaa pitkäaikaisia suhteita ja täten tarjota tukea tilanteessa kuin tilanteessa. Olen aina vain yhden puhelinsoiton päässä!',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-courier-prime text-4xl font-bold text-center text-gray-800 mb-12">
          Lupauksemme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
