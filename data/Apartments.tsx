import { populateImages } from "./imageHelper";

export type Apartment = {
  id: string;
  name: string;
  type: string;
  price: number;
  rent: number;
  fee: number;
  roi: number;
  coc: number;
  images: string[];
  status: 'vapaa' | 'varattu' | 'myyty';
};

const rawApartments: Apartment[] = [
  {
    id: 'A32',
    name: 'Täysin remontoitu kolmio',
    type: '3h+k+p',
    price: 51000,
    rent: 930,
    fee: 332.5,
    roi: 14.08,
    coc: 36.01,
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A31',
    name: 'Täysin remontoitu kaksio',
    type: '2h+k+p',
    price: 46990,
    rent: 624.75,
    fee: 225.0,
    roi: 10.21,
    coc: 27.03,
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A23',
    name: 'Pinta remontoitu kolmio',
    type: '3h+k+p',
    price: 45990,
    rent: 723.13,
    fee: 320.0,
    roi: 10.52,
    coc: 28.06,
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A20',
    name: 'Rempattu solu kolmio',
    type: '3h+k+p',
    price: 52990,
    rent: 863.00,
    fee: 322.5,
    roi: 12.24,
    coc: 33.80,
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A7',
    name: 'Peruskuntoinen kaksio',
    type: '2h+k+p',
    price: 38890,
    rent: 582.93,
    fee: 225,
    roi: 11.02,
    coc: 29.72,
    images: [],
    status: 'vapaa',
  },
];

export const apartments = populateImages(rawApartments);
