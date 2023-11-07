'use client';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import { useParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { defaultValues, newCategorySchema } from './validation';

export default function NewTransactionCategory(): JSX.Element {
  const { type } = useParams();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(newCategorySchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex flex-col ">
      <div
        className={`w-full text-center ${
          type == 'expenses' ? 'bg-cred' : type == 'incomes' ? 'bg-cgreen' : ''
        }  h-[40%] text-white flex flex-col items-center gap-8 p-10`}
      >
        <p className="text-3xl font-medium  capitalize ">
          New {type.toString().substring(0, type.length - 1)} category
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 flex grow flex-col justify-between overflow-hidden">
        <div className="w-full flex flex-col gap-4 overflow-auto ">
          <Controller
            control={control}
            name="name"
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <Input
                size="large"
                label={<span className=" text-cgray">Name</span>}
                placeholder="Enter the category name"
                refEl={ref}
                {...fields}
                error={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <Input
                autoSize={{ minRows: 4, maxRows: 6 }}
                label={<span className=" text-cgray">Description</span>}
                type="textarea"
                placeholder="Enter a description"
                refEl={ref}
                {...fields}
                error={error?.message}
              />
            )}
          />
        </div>
        <Button type="primary" block size="big">
          Add Category
        </Button>
      </form>
    </div>
  );
}
