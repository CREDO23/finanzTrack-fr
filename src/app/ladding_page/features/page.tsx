import Image from 'next/image';
import atGlance from '../../../assets/images/atglance.png';
import hours from '../../../assets/images/24h.png';
import trackExpenses from '../../../assets/images/trackExepnse.png';

export default function Features(): JSX.Element {
  const features = [
    {
      title: 'Income at a Glance',
      description:
        'Instantly view and categorize your income sources. FinanzTrack provides a clear snapshot of your earnings, empowering you to plan for the future.',
      image: <Image className='h-full' width={300} src={atGlance} alt="Income at a Glance" />,
    },
    {
      title: 'Seamless Expense Tracking',
      description:
        "Effortlessly monitor every penny you spend. With FinanzTrack, you're in control of your expenses, making budgeting a breeze.",
      image: <Image className='h-full'  width={300} src={trackExpenses} alt="Income at a Glance" />,
    },
    {
      title: 'Anywhere, Anytime Access',
      description:
        'Your finances, your way. FinanzTrack is available wherever you go, giving you 24/7 access to your financial world.',
      image: <Image className='h-full' width={300} src={hours} alt="24h/24" />,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center h-full">
        <div className='flex items-center gap-4 shadow'>
        {features.map(feature => {
        return (
          <div key={feature.title} className="w-96 border rounded-lg flex flex-col items-center gap-3 p-3">
            <h3 className=" font-medium">{feature.title}</h3>
            <div className=' h-96'>
            {feature.image}
            </div>
        
            <p className=' text-sm text-center'>{feature.description}</p>
          </div>
        );
      })}
        </div>
     
    </div>
  );
}
