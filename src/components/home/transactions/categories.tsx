import housing from '@/assets/icons/expenses/housing.png';
import transportation from '@/assets/icons/expenses/transportation.png';
import groceries from '@/assets/icons/expenses/groceries.png';
import healthcare from '@/assets/icons/expenses/healthcare.png';
import clothing from '@/assets/icons/expenses/clothing.png';
import entertainment from '@/assets/icons/expenses/entertainment.png';
import education from '@/assets/icons/expenses/education.png';
import fitness_wellness from '@/assets/icons/expenses/fitness_wellness.png';
import { BsHouse } from 'react-icons/bs';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';
import { TbHealthRecognition } from 'react-icons/tb';
import { GiClothes } from 'react-icons/gi';
import { SiDcentertainment } from 'react-icons/si';
import { MdCastForEducation } from 'react-icons/md';
import { IoFitnessOutline } from 'react-icons/io5';

export const expensesCategories = {
  housing: {
    icon: <BsHouse />,
    color: 'rgb(135, 206, 235)',
  },
  transportation: {
    icon: <MdOutlineEmojiTransportation />,
    color: 'rgb(255, 69, 0)',
  },
  groceries: {
    icon: <PiBowlFoodLight />,
    color: 'rgb(184, 134, 11)',
  },
  healthcare: {
    icon: <TbHealthRecognition />,
    color: 'rgb(255, 140, 105)',
  },
  clothing: {
    icon: <GiClothes />,
    color: 'rgb(128, 0, 128)',
  },
  entertainment: {
    icon: <SiDcentertainment />,
    color: 'rgb(46, 139, 87)',
  },
  education: {
    icon: <MdCastForEducation />,
    color: 'rgb(0, 0, 205)',
  },
  'fitness and wellness': {
    icon: <IoFitnessOutline />,
    color: 'rgb(218, 112, 214)',
  },
  others: {
    color: 'rgb(255, 165, 0)',
    icon: <IoFitnessOutline />,
  },
};

const incomesCategories = {
  salary: {},
};
