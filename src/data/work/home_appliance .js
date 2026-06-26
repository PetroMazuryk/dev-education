import { img } from '/src/utils/img';
export const home_appliance = [
  {
    id: 1,
    title: 'Пральна машинка Electorlux EWT 10620 W',
    requirements: [
      'Двигун обертається з ривками.',
      'BTA 16 700 BW - симістор (triac) дозволяє керувати потужністю 220 В без реле. Струм: до ~16 А. Напруга: до ~700 В',
      'Пресостат 4 4906 06:41 T12',
    ],
    images: [
      img('images/home/pressure_1.jpg'),
      img('images/home/pressure_2.jpg'),
    ],
  },

  {
    id: 2,
    title: 'Лак акриловий для стільниці',
    requirements: [
      'Водорозчинний. Краще малювати валиком ніж пензлем.',
      'Використовував шпаклівку по дереву, її видно. Краще клей ПВА з стружкою.',
    ],

    images: [img('images/home/acrylic.jpg')],
  },
  {
    id: 3,
    title: 'Мій леокард',
    requirements: [''],

    images: [img('images/home/leocard.jpg')],
  },
  {
    id: 4,
    title: 'Холодильник gorenje RK65365W',
    requirements: [
      'Підходить по кольору -Грунт білий Champion SPRAY professional ',
      'FARBA PODKLADOWA ANTYKOROZYJNA: балончик 400 МЛ',
    ],

    images: [img('images/home/')],
  },
  {
    id: 5,
    title: 'Лак для паркету Sylac Sport P-880',
    requirements: [''],

    images: [img('images/home/sylac_1.jpg'), img('images/home/sylac_2.jpg')],
  },
  {
    id: 99,
    title: '',
    requirements: [''],

    images: [img('images/home/')],
  },
];
