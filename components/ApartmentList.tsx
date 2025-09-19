"use client";

import { type Apartment, apartments } from '@/data/Apartments';
import Image from 'next/image';
import { Dialog, DialogTitle, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { trackEvent } from '@/lib/gtag';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(amount);
};

const StatusBadge = ({ status, sale }: { status: Apartment['status'], sale: Apartment['sale'] }) => {
  const statusStyles = {
    vapaa: 'bg-green-100 text-green-800 border-green-300',
    varattu: 'bg-orange-100 text-orange-800 border-orange-300',
    myyty: 'bg-red-100 text-red-800 border-red-300',
  };

  if (sale) {
    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full border ${statusStyles['varattu']}`}>
        🔥TARJOUS🔥
      </span>
    )
  }

  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const ApartmentDialogContent = ({ apartment }: { apartment: Apartment }) => {
  return (
    <div className="bg-white rounded-lg w-full h-full flex flex-col relative text-black">
      <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
        <DialogTitle className="text-xl font-bold">
          {`${apartment.name} (${apartment.type})`} - <span className="font-mono text-gray-500">{apartment.id}</span>
        </DialogTitle>
      </div>

      <div className="flex-grow overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className="relative lg:col-span-4 rounded-lg">
          <Carousel className="w-full">
            <CarouselContent className="h-full">
              {apartment.images.map((src, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full aspect-square bg-white lg:h-[500px] lg:aspect-auto">
                    <Image 
                        src={src} 
                        alt={`${apartment.name} image ${index + 1}`} 
                        layout="fill"
                        objectFit="contain"
                        loading="eager"
                        decoding="async"
                      />
                  </div>
                  <p className="text-xs text-stone-500">*Kuvat vastaavasta asunnosta</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            {apartment.images.length > 1 && (
                <>
                    <CarouselPrevious className="absolute left-2 bg-black bg-opacity-40 text-white hover:bg-opacity-60" />
                    <CarouselNext className="absolute right-2 bg-black bg-opacity-40 text-white hover:bg-opacity-60" />
                </>
            )}
          </Carousel>
        </div>

        <div className="space-y-3 lg:col-span-3">
          <h4 className="text-lg font-semibold border-b pb-2">Tiedot</h4>
          <div className="flex justify-between items-center text-gray-700"><span>Tila:</span> <StatusBadge status={apartment.status} /></div>
          <div className="flex justify-between text-gray-700"><span>Myyntihinta:</span> <span className="font-semibold text-gray-900">{formatCurrency(apartment.price)}</span></div>
          <div className="flex justify-between text-gray-700"><span>Vuokra:</span> <span className="font-semibold text-gray-900">{formatCurrency(apartment.rent)} / kk</span></div>
          <div className="flex justify-between text-gray-700"><span>Hoitovastike:</span> <span className="font-semibold text-gray-900">{formatCurrency(apartment.fee)} / kk</span></div>

          <h4 className="text-lg font-semibold border-b pb-2 pt-4">Tunnusluvut</h4>
          <div className="flex justify-between text-gray-700"><span>Vuokratuotto:</span> <span className="font-semibold text-green-700">{apartment.roi.toFixed(2)} %</span></div>
          <div className="relative flex justify-between text-gray-700">
            <span>Oman pääoman tuotto:</span>
            <span className="font-semibold text-green-700">{apartment.coc.toFixed(2)} % </span>
            <div className="absolute top-5 left-0">
              <p className="text-gray-400 text-xs">70% lainoituksella | 4% korolla</p>
            </div>
          </div>


          <h4 className="text-lg font-semibold border-b pb-2 pt-10">Muistiinpanot:</h4>
          <p className="text-sm whitespace-pre-line">
            {apartment.desc}
          </p>
        </div>
      </div>
      <div className="p-4 border-t flex justify-end flex-shrink-0">
        <DialogClose asChild>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">Sulje</button>
        </DialogClose>
      </div>
    </div>
  );
};


const ApartmentList = () => {
  return (
    <section id="listings" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <h2 className="font-courier-prime text-4xl font-bold text-center text-gray-800">
          Myytävät sijoitusasunnot
        </h2>
        <div className="w-full flex justify-center">
        <p className="mb-12 mt-1 text-center max-w-lg w-full">
          Kaikki asunnot sijaitsevat Kanta-Hämeen alueella keskeisellä sijainnilla rautatieaseman välittömässä läheisyydessä ✅
        </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-semibold table-cell">Huoneisto</th>
                  <th className="p-4 font-semibold">Kuvaus</th>
                  <th className="p-0 md:p-4 font-semibold">Hinta</th>
                  <th className="p-4 font-semibold hidden md:table-cell">Vuokra/kk</th>
                  <th className="p-4 font-semibold table-cell min-w-[110px]">Tuotto %</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {apartments.map((apt) => (
                  <Dialog key={apt.id}>
                    <DialogTrigger asChild>
                      <tr
                        className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          trackEvent('view_item', {
                            ecommerce: {
                              items: [{
                                item_id: apt.id,
                                item_name: apt.id,
                                price: apt.price,
                                quantity: 1,
                              }]
                            }
                          })
                        }}
                      >
                        <td className="p-4 table-cell font-mono text-gray-500">{apt.id}</td>
                        <td className="p-4 font-semibold text-gray-800">{`${apt.name} (${apt.type})`}</td>
                        <td className="p-0 md:p-4">{formatCurrency(apt.price)}</td>
                        <td className="p-4 hidden md:table-cell">{formatCurrency(apt.rent)}</td>
                        <td className="p-4 table-cell min-w-[100px]"><span> {apt.roi.toFixed(2)} %</span></td>
                        <td className="pr-8 whitespace-nowrap"><StatusBadge status={apt.status} sale={apt.sale} /></td>
                      </tr>
                    </DialogTrigger>
                    <DialogContent className="overflow-x-hidden p-0 border-0 max-w-none w-full h-full md:w-full md:max-w-6xl md:h-auto md:max-h-[90vh] rounded-none md:rounded-lg">
                      <ApartmentDialogContent apartment={apt} />
                    </DialogContent>
                  </Dialog>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentList;
