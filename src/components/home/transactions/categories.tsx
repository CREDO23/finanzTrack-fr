
import { BsHouse } from 'react-icons/bs';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';
import { TbHealthRecognition } from 'react-icons/tb';
import { GiClothes,GiReceiveMoney,GiPayMoney } from 'react-icons/gi';
import { SiDcentertainment,SiFreelancer } from 'react-icons/si';
import { MdCastForEducation } from 'react-icons/md';
import { IoFitnessOutline, IoGiftOutline } from 'react-icons/io5';
import { ReactNode } from 'react';

export const transactionsCategories : {[key : string] : {icon : ReactNode, color : string}} = {
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
  'expense': {
    color: 'rgb(255, 165, 0)',
    icon: <span>Exp</span>,
  },
  // Incomes
  salary: {
    color : 'rgb(205, 92, 92)',
    icon : <GiReceiveMoney/>
  },
  freelance :{
    color : 'rgb(0, 255, 255)',
    icon : <SiFreelancer/>
  },
  gift : {
      color : 'rgb(0, 0, 128)',
      icon : <IoGiftOutline/>
  },
  investments : {
      color : 'rgb(0, 128, 0)',
      icon : <GiPayMoney/>
  },
  'income' : {
      color : 'rgb(139, 100, 60)',
      icon : <span>In</span>
  }
};

