'use client';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Select from '@/components/shared/select';
import { useParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { defaultValues, newTransactionSchema } from './validation';

export default function NewTransaction(): JSX.Element {
  const { type } = useParams();

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: joiResolver(newTransactionSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col ">
      <div
        className={`w-full ${
          type == 'expenses' ? 'bg-cred' : type == 'incomes' ? 'bg-cgreen' : ''
        }  h-[40%] text-white flex flex-col items-center gap-4 p-6`}
      >
        <p className="text-3xl font-medium  capitalize ">
          {type.toString().substring(0, type.length - 1)}
        </p>
        <div className="w-full">
          <p className=" text-cgray1 text-lg ">How much?</p>
          <div className=" bg-transparent h-20 flex text-6xl font-light ">
            <span className="h-full w-14  shrink-0 flex items-center ">$</span>{' '}
            <div className="h-full bg-transparent grow">
              <Controller
                control={control}
                name="amount"
                render={({ field, fieldState: { error } }) => (
                  <div className="w-full h-full ">
                    <input
                      className="h-full w-full focus:outline-none bg-transparent"
                      type="number"
                      id=""
                      {...field}
                    />

                    {error && <p className=" text-sm">{error?.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-6 flex grow flex-col justify-between overflow-hidden">
        <div className="w-full flex flex-col gap-4 overflow-auto ">
          <Controller
            control={control}
            name="category"
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <Select
                label={<span className=" text-cgray">Category</span>}
                size="large"
                options={[
                  { label: 'Thierry', value: 'thierry' },
                  { label: 'Credo', value: 'credo' },
                ]}
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
                refEl={ref}
                {...fields}
                error={error?.message}
              />
            )}
          />
        </div>
        <Button type="primary" block size="big">
          Add transaction
        </Button>
      </div>
    </form>
  );
}
