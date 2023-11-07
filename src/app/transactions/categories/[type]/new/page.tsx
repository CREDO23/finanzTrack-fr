'use client';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import { useParams } from 'next/navigation';

export default function NewExpense(): JSX.Element {
  const { type } = useParams();

  return (
    <div className="w-full h-full flex flex-col ">
      <div className={`w-full text-center ${type == 'expenses' ? 'bg-cred' : type == 'incomes' ? 'bg-cgreen' : '' }  h-[40%] text-white flex flex-col items-center gap-8 p-10`}>
        <p className="text-3xl font-medium  capitalize ">New {type.toString().substring(0,type.length-1)} category</p>
      </div>
      <div className="w-full p-6 flex grow flex-col justify-between overflow-hidden">
        <div className="w-full flex flex-col gap-4 overflow-auto ">
          <Input size='large' label={<span className=" text-cgray">Description</span>} placeholder='Enter the category name'/>
          <Input
            autoSize={{ minRows: 4, maxRows: 6 }}
            label={<span className=" text-cgray">Description</span>}
            type="textarea"
            placeholder='Enter a description'
          />
        </div>
        <Button type="primary" block size="big">
          Add Category
        </Button>
      </div>
    </div>
  );
}
