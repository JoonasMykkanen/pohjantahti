import Image, { type StaticImageData } from 'next/image';
import type { FC, ReactNode } from 'react';

type PersonCardProps = {
  src: string | StaticImageData;
  alt: string;
  name: string;
  children: ReactNode;
};

const PersonCard: FC<PersonCardProps> = ({ src, alt, name, children }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-6 max-w-md">
      <Image src={src} alt={alt} width={80} height={80} className="rounded-3xl shadow-md shrink-0 mt-1" />
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <div className="text-gray-600 mt-2">{children}</div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Main Introduction (remains the same) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-80 md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/family.jpg"
              alt="Our family"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-[101%] transition-all duration-500"
            />
          </div>

          {/* Text Section */}
          <div className="text-gray-700">
            <h2 className="font-courier-prime text-4xl font-bold text-gray-800 mb-6">Meidän taustaa:</h2>
            <p className="mb-4 text-lg">
              Hei! Olemme Joonas ja Elina, helposti lähestyttävä tiimi tämän yrityksen takana. Emme ole suuri korporaatio, vaan perhe, jonka tavoitteena on taloudellinen vapaus.
              <br/><br/>
              Kukaan ei ole menestynyt tässä maailmassa yksin ja tätä varten tarvitsemmekin verkoston ympärillemme menestymään kanssamme!
            </p>
            <p className="mb-4">
              Arkemme pyörii paitsi asuntojen sekä päivätöiden, myös 1,5-vuotiaan pikkupomomme ympärillä. Hän on tärkeä osa tiimiämme ja kulkee mukanamme kaikkialla – aina pankista asuntonäyttöihin. Tämä perhekeskeisyys on toimintamme ydin: hoidamme kaiken itse vuokralaisten valinnasta sopimuksiin, jotta voimme varmistaa, että kaikki sujuu mutkattomasti ja henkilkohtaisesti.
            </p>
            <p className="mb-4">
              Meille on tärkeää, että vuokralaisemme sekä sijoittaja-asiakkaat voivat tuntea olonsa turvalliseksi ja arvostetuksi. Kun asioit kanssamme, tiedät aina, kenen kanssa puhut. Tervetuloa tutustumaan!
            </p>
          </div>
        </div>

        <div className="relative mt-16 border-t pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-12 md:gap-x-6">
            
            <PersonCard src="/images/people/joonas.jpeg" alt="Joonas" name="Joonas">
              <p>
                Tekee töitä ohjelmistokehityksen parissa, hoitaa kirjanpidon sekä pankkineuvottelut.
              </p>
            </PersonCard>

            <PersonCard src="/images/people/elina.png" alt="Elina" name="Elina">
              <p>
                On töissä vuoropäällikkönä McDonald&apos;silla, hoitaa budjetin, somen sekä henkilökohtaisen taloutemme.
              </p>
              <p className="text-xs text-gray-500 italic mt-2">
                ...ja pitää Joonaksen kurissa, joka aina välillä meinaa innostua liikaa potentiaalisista kohteista.
              </p>
            </PersonCard>

            <PersonCard src="/images/people/vieno.jpeg" alt="Vieno" name="Vieno">
              <p>
                Määrää tahdin.
              </p>
            </PersonCard>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
