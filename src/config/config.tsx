import React from 'react';
import cupidHunting from '../images/cupidHunting.png';
import LadyWithADog from '../images/LadyWithADog.png';
import Procedure from '../images/Procedure.png';
import Rose from '../images/Rose.png';
import BirdsMeal from '../images/BirdsMeal.png';
import LandscapeWithFish from '../images/LandscapeWithFish.png';
import AboveTheCity from '../images/AboveTheCity.png';
import Chicks from '../images/Chicks.png';
import AmongTheLeaves from '../images/AmongTheLeaves.png';
import BrightBird from '../images/BrightBird.png';
import Woodpeckers from '../images/Woodpeckers.png';
import BigWaters from '../images/BigWaters.png';
import wildAnimal from '../images/wildAnimal.png';
import RockyCoast from '../images/RockyCoast.png';
import riverAndMountains from '../images/riverAndMountains.png';
import WhiteParrot from '../images/WhiteParrot.png';
import NightFish from '../images/NightFish.png';
import RedCat from '../images/RedCat.png';

export interface IReproduction {
    author: string;
    name: string;
    description: string;
    price: string;
    img: string;
    id: number;
}

export const france: IReproduction[] = [
    {
        author: 'Марсель Руссо',
        name: 'Охота Амура',
        description: 'Холст, масло (50х80)',
        price: '14 500',
        img: cupidHunting,
        id: 1,
    },
    {
        author: 'Анри Селин',
        name: 'Дама с собачкой',
        description: 'Акрил, бумага (50х80)',
        price: '16 500',
        img: LadyWithADog,
        id: 2,
    },
    {
        author: 'Франсуа Дюпон',
        name: 'Процедура',
        description: 'Цветная литография (40х60)',
        price: '20 000',
        img: Procedure,
        id: 3,
    },
    {
        author: 'Луи Детуш',
        name: 'Роза',
        description: 'Бумага, акрил (50х80)',
        price: '12 000',
        img: Rose,
        id: 4,
    },
    {
        author: 'Франсуа Дюпон',
        name: 'Птичья трапеза',
        description: 'Цветная литография (40х60)',
        price: '22 500',
        img: BirdsMeal,
        id: 5,
    },
    {
        author: 'Пьер Моранж',
        name: 'Пейзаж с рыбой',
        description: 'Цветная литография (40х60)',
        price: '20 000',
        img: LandscapeWithFish,
        id: 6,
    },
];

export const germany: IReproduction[] = [
    {
        author: 'Курт Вернер',
        name: 'Над городом',
        description: 'Цветная литография (40х60)',
        price: '16 000',
        img: AboveTheCity,
        id: 7,
    },
    {
        author: 'Макс Рихтер',
        name: 'Птенцы',
        description: 'Холст, масло (50х80)',
        price: '14 500',
        img: Chicks,
        id: 8,
    },
    {
        author: 'Мартин Майер',
        name: 'Среди листьев',
        description: 'Цветная литография (40х60)',
        price: '20 000',
        img: AmongTheLeaves,
        id: 9,
    },
    {
        author: 'Герман Беккер',
        name: 'Яркая птица',
        description: 'Цветная литография (40х60)',
        price: '13 000',
        img: BrightBird,
        id: 10,
    },
    {
        author: 'Вульф Бауэр',
        name: 'Дятлы',
        description: 'Бумага, акрил (50х80)',
        price: '20 000',
        img: Woodpeckers,
        id: 11,
    },
    {
        author: 'Вальтер Хартманн',
        name: 'Большие воды',
        description: 'Бумага, акрил (50х80)',
        price: '23 000',
        img: BigWaters,
        id: 12,
    },
];

export const england: IReproduction[] = [
    {
        author: 'Пол Смит',
        name: 'Дикий зверь',
        description: 'Акварель, бумага (50х80)',
        price: '19 500',
        img: wildAnimal,
        id: 13,
    },
    {
        author: 'Джон Уайт',
        name: 'Скалистый берег',
        description: 'Цветная литография (40х60)',
        price: '17 500',
        img: RockyCoast,
        id: 14,
    },
    {
        author: 'Джим Уотсон',
        name: 'Река и горы',
        description: 'Акварель, бумага (50х80)',
        price: '20 500',
        img: riverAndMountains,
        id: 15,
    },
    {
        author: 'Юджин Зиллион',
        name: 'Белый попугай',
        description: 'Цветная литография (40х60)',
        price: '15 500',
        img: WhiteParrot,
        id: 16,
    },
    {
        author: 'Эрик Гиллман',
        name: 'Ночная рыба',
        description: 'Бумага, акрил (50х80)',
        price: '12 500',
        img: NightFish,
        id: 17,
    },
    {
        author: 'Альфред Барр',
        name: 'Рыжий кот',
        description: 'ветная литография (40х60)',
        price: '21 000',
        img: RedCat,
        id: 18,
    },
];