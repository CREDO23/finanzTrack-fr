
import { BsHouse } from 'react-icons/bs';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';
import { TbHealthRecognition } from 'react-icons/tb';
import { GiClothes,GiReceiveMoney,GiPayMoney } from 'react-icons/gi';
import { SiDcentertainment,SiFreelancer } from 'react-icons/si';
import { MdCastForEducation } from 'react-icons/md';
import { IoFitnessOutline, IoGiftOutline } from 'react-icons/io5';
import { ReactNode } from 'react';

export const transactionsCategories : {[key : string] : {icon : ReactNode, color : string, type : 'income' | 'expense' , description : string}} = {
  housing: {
    icon: <BsHouse />,
    color: 'rgb(135, 206, 235)',
    type: 'expense',
    description: 'Some information about'
  },
  transportation: {
    icon: <MdOutlineEmojiTransportation />,
    color: 'rgb(255, 69, 0)',
    type: 'expense',
    description: 'Some information about'
  },
  groceries: {
    icon: <PiBowlFoodLight />,
    color: 'rgb(184, 134, 11)',
    type: 'expense',
    description: 'Some information about'
  },
  healthcare: {
    icon: <TbHealthRecognition />,
    color: 'rgb(255, 140, 105)',
    type: 'expense',
    description: 'Some information about'
  },
  clothing: {
    icon: <GiClothes />,
    color: 'rgb(128, 0, 128)',
    type: 'expense',
    description: 'Some information about'
  },
  entertainment: {
    icon: <SiDcentertainment />,
    color: 'rgb(46, 139, 87)',
    type: 'expense',
    description: 'Some information about'
  },
  education: {
    icon: <MdCastForEducation />,
    color: 'rgb(0, 0, 205)',
    type: 'expense',
    description: 'Some information about'
  },
  'fitness and wellness': {
    icon: <IoFitnessOutline />,
    color: 'rgb(218, 112, 214)',
    type: 'expense',
    description: 'Some information about'
  },
  'expense': {
    color: 'rgb(255, 165, 0)',
    icon: <span className=' border h-full w-full rounded-lg flex items-center justify-center'>Ex</span>,
    type: 'expense',
    description: 'Some information about'
  },
  // Incomes
  salary: {
    color : 'rgb(205, 92, 92)',
    icon : <GiReceiveMoney/>,
    type: 'income',
    description: 'Some information about'
  },
  freelance :{
    color : 'rgb(0, 255, 255)',
    icon : <SiFreelancer/>,
    type: 'income',
    description: 'Some information about'
  },
  gift : {
      color : 'rgb(0, 0, 128)',
      icon : <IoGiftOutline/>,
      type: 'income',
      description: 'Some information about'
  },
  investments : {
      color : 'rgb(0, 128, 0)',
      icon : <GiPayMoney/>,
      type: 'income',
      description: 'Some information about'
  },
  'income' : {
      color : 'rgb(139, 100, 60)',
      icon : <span className=' border h-full w-full rounded-lg flex items-center justify-center'>In</span>,
      type: 'income',
      description: 'Some information about'
  }
};

