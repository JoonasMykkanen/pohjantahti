import { type Apartment } from './Apartments';
import directoryMap from './directoryMap.json';

export const populateImages = (apartments: Apartment[]): Apartment[] => {
  return apartments.map(apartment => {
    const imageFiles = (directoryMap as Record<string, string[]>)[apartment.id];
    
    const populatedImages = imageFiles
      ? imageFiles.map(fileName => `/images/${apartment.id}/${fileName}`)
      : ['/placeholder.jpg'];

    return {
      ...apartment,
      images: populatedImages,
    };
  });
};
