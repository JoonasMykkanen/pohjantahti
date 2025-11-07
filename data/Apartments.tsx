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
  sale: boolean;
  desc: string;
  images: string[];
  status: 'vapaa' | 'varattu' | 'myyty';
};

const rawApartments: Apartment[] = [
  {
    id: 'A32',
    name: 'Täysin remontoitu kolmio',
    type: '3h+k+p', price: 52990,
    rent: 927,
    fee: 332.5,
    roi: 13.46,
    coc: 37.88,
    sale: false,
    desc: `Juuri muokattu soluksi nostamalla uusi väliseinä keittiön ja olohuoneen väliin. Poikkeuksellisen kovat vuokrasopimukset sekä juuri kesällä 2025 remontoitu keittiö.
    `,
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
    sale: false,
    desc: "Rakennuksen siistein kaksio.",
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
    sale: false,
    desc: "Asuntoon on vaihdettu laminaatti lattiat sekä seinät hiljattain maalattu. Pitkäaikaiset luotettavat vuokralaiset! :)",
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A20',
    name: 'Solu kolmio',
    type: '3h+k+p',
    price: 51990,
    rent: 863.00,
    fee: 322.5,
    roi: 11.92,
    coc: 32.73,
    sale: false,
    desc: "Aikoinaan remontoitu solu kolmio. Pinnat eivät ole enään uudet mutta ajavat vielä pitkään asiansa. Yksi tuoreempi vuokralainen ja kaksi todella pitkäaikaista sopimusta!",
    images: [],
    status: 'vapaa',
  },
  {
    id: 'A7',
    name: 'Peruskuntoinen kaksio',
    type: '2h+k+p',
    price: 39890,
    rent: 582.93,
    fee: 225,
    roi: 10.77,
    coc: 28.89,
    sale: false,
    desc: "Peruskuntoinen kaksio ollut useamman vuoden vuokralla luotettavalla pariskunnalla!",
    images: [],
    status: 'vapaa',
  },
];

export const apartments = populateImages(rawApartments);
