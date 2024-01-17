import React from 'react';
import cupidHunting from '../images/cupidHunting.png';
import LadyWithADog from '../images/LadyWithADog.png';
import Procedure from '../images/Procedure.png';
import Rose from '../images/Rose.png';
import BirdsMeal from '../images/BirdsMeal.png';
import LandscapeWithFish from '../images/LandscapeWithFish.png';

export interface IReproduction {
    author: string;
    name: string;
    description: string;
    price: string;
    img: string;
}

export const france: IReproduction[] = [
    {
        author: 'Марсель Руссо',
        name: 'Охота Амура',
        description: 'Холст, масло (50х80)',
        price: '14 500 руб',
        img: cupidHunting,
    },
    {
        author: 'Анри Селин',
        name: 'Дама с собачкой',
        description: 'Акрил, бумага (50х80)',
        price: '16 500 руб',
        img: LadyWithADog,
    },
    {
        author: 'Франсуа Дюпон',
        name: 'Процедура',
        description: 'Цветная литография (40х60)',
        price: '20 000 руб',
        img: Procedure,
    },
    {
        author: 'Луи Детуш',
        name: 'Роза',
        description: 'Бумага, акрил (50х80)',
        price: '12 000 руб',
        img: Rose,
    },
    {
        author: 'Франсуа Дюпон',
        name: 'Птичья трапеза',
        description: 'Цветная литография (40х60)',
        price: '22 500 руб',
        img: BirdsMeal,
    },
    {
        author: 'Пьер Моранж',
        name: 'Пейзаж с рыбой',
        description: 'Цветная литография (40х60)',
        price: '20 000 руб',
        img: LandscapeWithFish,
    },
]