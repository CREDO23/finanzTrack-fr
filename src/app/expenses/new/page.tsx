"use client"
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Select from '@/components/shared/select';

export default function NewExpense(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full bg-cred h-[40%] text-white flex flex-col items-center gap-12 p-10">
        <p className="text-3xl font-medium ">Expense</p>
        <div className="w-full">
          <p className=" text-cgray1 text-lg ">How much?</p>
          <div className=" bg-transparent h-20 flex text-6xl font-light ">
            <span className="h-full w-14  shrink-0 flex items-center ">$</span>{' '}
            <div className="h-full bg-transparent grow">
              <input
                className="h-full w-full focus:outline-none bg-transparent"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-6 flex grow flex-col justify-between">
        <div className="w-full flex flex-col gap-4">
          <Select
            label={<span className=' text-cgray'>Category</span>}
            size="large"
            options={[
              { label: 'Thierry', value: 43 },
              { label: 'Credo', value: 23 },
            ]}
          />
          <Input autoSize={{ minRows: 8, maxRows: 10 }} label={<span className=' text-cgray'>Description</span>} type='textarea'/>
        </div>
        <Button type='primary' block size='big'>Continue</Button>
      </div>
    </div>
  );
}
