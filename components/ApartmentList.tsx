"use client";

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Apartment, apartments } from '@/data/Apartments';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(amount);
};

const StatusBadge = ({ status }: { status: Apartment['status'] }) => {
  const statusStyles = {
    vapaa: 'bg-green-100 text-green-800 border-green-300',
    varattu: 'bg-orange-100 text-orange-800 border-orange-300',
    myyty: 'bg-red-100 text-red-800 border-red-300',
  };
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const ApartmentList = () => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log(selectedApartment);
  }, [selectedApartment])

  const openDialog = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setCurrentImageIndex(0);
  };

  const closeDialog = () => {
    setSelectedApartment(null);
  };

  const nextImage = () => {
    if (selectedApartment) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedApartment.images.length);
    }
  };

  const prevImage = () => {
    if (selectedApartment) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedApartment.images.length) % selectedApartment.images.length);
    }
  };

  return (
    <>
      <section id="listings" className="py-20 bg-gray-50 text-black">
        <div className="container mx-auto px-4">
          <h2 className="font-courier-prime text-4xl font-bold text-center text-gray-800 mb-12">
            Myytävät sijoitusasunnot
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="p-4 font-semibold">Huoneisto</th>
                    <th className="p-4 font-semibold">Kuvaus</th>
                    <th className="p-4 font-semibold">Hinta</th>
                    <th className="p-4 font-semibold hidden md:table-cell">Vuokra/kk</th>
                    <th className="p-4 font-semibold hidden lg:table-cell">Vuokratuotto %</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {apartments.map((apt) => (
                    <tr 
                      key={apt.id} 
                      className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      onClick={() => openDialog(apt)}
                    >
                      <td className="p-4 font-mono text-gray-500">{apt.id}</td>
                      <td className="p-4 font-semibold text-gray-800">{`${apt.name} (${apt.type})`}</td>
                      <td className="p-4">{formatCurrency(apt.price)}</td>
                      <td className="p-4 hidden md:table-cell">{formatCurrency(apt.rent)}</td>
                      <td className="p-4 hidden lg:table-cell">{apt.roi.toFixed(2)} %</td>
                      <td className="p-4"><StatusBadge status={apt.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {selectedApartment && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 text-black">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-screen-2xl flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{`${selectedApartment.name} (${selectedApartment.type})`} - <span className="font-mono text-gray-500">{selectedApartment.id}</span></h3>
              <button onClick={closeDialog} className="text-gray-500 hover:text-gray-800 hover:cursor-pointer"><X size={24} /></button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-7 gap-8">
              <div className="relative lg:col-span-4 h-96 min-h-[500px] lg:min-h-[60vh] rounded-lg overflow-hidden group">
                <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                  {selectedApartment.images.map((src, index) => (
                    // CHANGE 1: Added a black background to the container
                    <div key={index} className="relative w-full flex-shrink-0 h-full bg-white">
                      <Image 
                        src={src} 
                        alt={`${selectedApartment.name} image ${index + 1}`} 
                        layout="fill"
                        // CHANGE 2: Changed from 'cover' to 'contain'
                        objectFit="contain"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                  {selectedApartment.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedApartment.images.map((_, index) => (
                        <div key={index} className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}></div>
                      ))}
                    </div>
                  </>
                  )}
              </div>

              <div className="space-y-3 lg:col-span-3">
                <h4 className="text-lg font-semibold border-b pb-2">Tiedot</h4>
                <div className="flex justify-between items-center text-gray-700"><span>Tila:</span> <StatusBadge status={selectedApartment.status} /></div>
                <div className="flex justify-between text-gray-700"><span>Myyntihinta:</span> <span className="font-semibold text-gray-900">{formatCurrency(selectedApartment.price)}</span></div>
                <div className="flex justify-between text-gray-700"><span>Vuokra:</span> <span className="font-semibold text-gray-900">{formatCurrency(selectedApartment.rent)} / kk</span></div>
                <div className="flex justify-between text-gray-700"><span>Hoitovastike:</span> <span className="font-semibold text-gray-900">{formatCurrency(selectedApartment.fee)} / kk</span></div>
                
                <h4 className="text-lg font-semibold border-b pb-2 pt-4">Tunnusluvut</h4>
                <div className="flex justify-between text-gray-700"><span>Vuokratuotto:</span> <span className="font-semibold text-green-700">{selectedApartment.roi.toFixed(2)} %</span></div>
                <div className="relative flex justify-between text-gray-700">
                  <span>Oman pääoman tuotto:</span>
                  <span className="font-semibold text-green-700">{selectedApartment.coc.toFixed(2)} % </span>
                  <div className="absolute top-5 left-0">
                    <p className="text-gray-400 text-xs">70% lainoituksella | 4% korolla</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="p-4 border-t flex justify-between">
              <button onClick={closeDialog} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">Sulje</button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApartmentList;
