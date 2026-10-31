export interface PropertyStat {
  value: string;
  label: string;
}

export interface Property {
  id: string;
  name: string;
  badge: string;
  badgeStyle: 'gold' | 'outline';
  type: string;
  description: string;
  stats: PropertyStat[];
  features: string[];
  images: string[];
  imageAlts: string[];
  enquirySubject: string;
  brochureMsg: string;
  waMsg: string;
}

const UNSPLASH = 'https://images.unsplash.com';

export const PROPERTIES: Property[] = [
  {
    id: 'gruenistrasse',
    name: 'Grünistrasse 2a',
    badge: 'Available',
    badgeStyle: 'gold',
    type: 'Apartment · Davos Platz',
    description: '2-bedroom apartment with balcony and pool access — 1.9 km from the Congress Centre.',
    stats: [
      { value: '2', label: 'Bedrooms' },
      { value: '2', label: 'Guests' },
      { value: '1.9km', label: 'to Congress' },
      { value: '2P', label: 'Indoor Parking' },
    ],
    features: [
      'Balcony · pool access · 1.5 bathrooms',
      'Swimming pool · heating · electricity included',
      '2 double beds · max 6 nights',
    ],
    images: [
      `${UNSPLASH}/photo-1560448204-e02f11c3d0e2?w=700&q=80&fit=crop`,
      `${UNSPLASH}/photo-1586023492125-27b2c045efd7?w=400&q=80&fit=crop`,
      `${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop`,
    ],
    imageAlts: ['Grünistrasse 2a living room', 'Bedroom', 'Mountain balcony view'],
    enquirySubject: 'Davos 2027 Enquiry — Grünistrasse 2a',
    brochureMsg: 'Hello GS Hospitality, I would like to receive the brochure for Grünistrasse 2a.',
    waMsg: 'Hello GS Hospitality, I am interested in the Grünistrasse 2a apartment for Davos Summit 2027.',
  },
  {
    id: 'talstrasse',
    name: 'Talstrasse 19',
    badge: 'Closest to Congress',
    badgeStyle: 'gold',
    type: 'Apartment · Heart of Davos',
    description: 'Modern open-plan apartment on Talstrasse — just 1 km from the Congress Centre with private garage.',
    stats: [
      { value: '2', label: 'Bedrooms' },
      { value: '4', label: 'Guests' },
      { value: '1km', label: 'to Congress' },
      { value: 'P', label: 'Garage' },
    ],
    features: [
      'Central location on Talstrasse',
      'Electricity · heating · bedding included',
      'Modern open-plan · max 7 nights',
    ],
    images: [
      `${UNSPLASH}/photo-1484154218962-a197022b5858?w=700&q=80&fit=crop`,
      `${UNSPLASH}/photo-1540304453527-62f979142a17?w=400&q=80&fit=crop`,
      `${UNSPLASH}/photo-1505693416388-ac5ce068fe85?w=400&q=80&fit=crop`,
    ],
    imageAlts: ['Talstrasse 19 modern kitchen', 'Living room', 'Bedroom'],
    enquirySubject: 'Davos 2027 Enquiry — Talstrasse 19',
    brochureMsg: 'Hello GS Hospitality, I would like to receive the brochure for Talstrasse 19.',
    waMsg: 'Hello GS Hospitality, I am interested in the Talstrasse 19 apartment for Davos Summit 2027.',
  },
  {
    id: 'lehenweg',
    name: 'Lehenweg 26',
    badge: 'Alpine Chalet',
    badgeStyle: 'outline',
    type: 'Chalet · Klosters Serneus',
    description: 'Private chalet with sauna and open fireplace in Klosters Serneus — 22 min drive or 15 min by train.',
    stats: [
      { value: '3', label: 'Bedrooms' },
      { value: '3', label: 'Guests' },
      { value: '22min', label: 'to Congress' },
      { value: 'S+P', label: 'Sauna + Parking' },
    ],
    features: [
      'Private sauna · balcony · open fireplace',
      'Wi-Fi · electricity · heating included',
      'Max 6 nights · 15 min by train to Davos',
    ],
    images: [
      `${UNSPLASH}/photo-1605117882932-f9e32b03fea9?w=700&q=80&fit=crop`,
      `${UNSPLASH}/photo-1596436889106-be35e843f974?w=400&q=80&fit=crop`,
      `${UNSPLASH}/photo-1506905925346-21bda4d32df4?w=400&q=80&fit=crop`,
    ],
    imageAlts: ['Lehenweg 26 chalet living room', 'Sauna', 'Klosters alpine landscape'],
    enquirySubject: 'Davos 2027 Enquiry — Klosters Chalet',
    brochureMsg: 'Hello GS Hospitality, I would like to receive the brochure for Lehenweg 26 Klosters.',
    waMsg: 'Hello GS Hospitality, I am interested in the Klosters chalet (Lehenweg 26) for Davos Summit 2027.',
  },
  {
    id: 'davos-summit-apt',
    name: 'Davos Summit Apartment',
    badge: 'Near Promenade',
    badgeStyle: 'gold',
    type: '3.5-Room Apartment · Davos',
    description: 'Bright 3.5-room apartment on the 3rd floor, 2 minutes\' walk from Davos Promenade with parking.',
    stats: [
      { value: '2', label: 'Bedrooms' },
      { value: '3', label: 'Guests' },
      { value: '2 min', label: 'to Promenade' },
      { value: 'P', label: 'Parking' },
    ],
    features: [
      'Bright 3.5-room layout · 3rd floor',
      'Full kitchen · bathtub · Wi-Fi & TV',
      'Non-smoking · relaxed alpine atmosphere',
    ],
    images: [
      `${UNSPLASH}/photo-1502672260266-1c1ef2d93688?w=700&q=80&fit=crop`,
      `${UNSPLASH}/photo-1556912173-3bb406ef7e77?w=400&q=80&fit=crop`,
      `${UNSPLASH}/photo-1507089947368-19c1da9775ae?w=400&q=80&fit=crop`,
    ],
    imageAlts: ['Davos Summit Apartment living area', 'Kitchen', 'Bedroom'],
    enquirySubject: 'Davos 2027 Enquiry — Davos Summit Apartment',
    brochureMsg: 'Hello GS Hospitality, I would like to receive the brochure for the Davos Summit Apartment.',
    waMsg: 'Hello GS Hospitality, I am interested in the Davos Summit Apartment for Davos Summit 2027.',
  },
  {
    id: 'klosters-chalet',
    name: 'Alpine Chalet, Klosters',
    badge: 'Sleeps 6 · Garden',
    badgeStyle: 'outline',
    type: '4.5-Room Chalet · Klosters',
    description: 'Spacious 4.5-room chalet in Klosters village with private back garden, 3 parking spaces and a queen room.',
    stats: [
      { value: '4.5', label: 'Rooms' },
      { value: '6', label: 'Guests' },
      { value: '3P', label: 'Parking' },
      { value: '2', label: 'Bathrooms' },
    ],
    features: [
      'Private back garden · balcony workspace',
      'Queen room · bunk room · extra bed',
      'Full kitchen · 15 min by train to Davos',
    ],
    images: [
      `${UNSPLASH}/photo-1513584684374-8bab748fbf90?w=700&q=80&fit=crop`,
      `${UNSPLASH}/photo-1583847268964-b28dc8f51f92?w=400&q=80&fit=crop`,
      `${UNSPLASH}/photo-1571900154564-c4a6d2c91fa4?w=400&q=80&fit=crop`,
    ],
    imageAlts: ['Alpine Chalet Klosters exterior', 'Garden', 'Cosy fireplace interior'],
    enquirySubject: 'Davos 2027 Enquiry — Klosters Haus Chalet',
    brochureMsg: 'Hello GS Hospitality, I would like to receive the brochure for the Klosters Haus Chalet.',
    waMsg: 'Hello GS Hospitality, I am interested in the Klosters Haus Chalet for Davos Summit 2027.',
  },
];
