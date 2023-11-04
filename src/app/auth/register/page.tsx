'use client';

import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import { useForm, Control, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { registerSchema, defaultValues } from './validation';

export default function Register(): JSX.Element {
  const { control, handleSubmit } = useForm({
    resolver: joiResolver(registerSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {

    console.log(data);
  };

  return (
    <div className=" w-full h-full flex flex-col items-center py-10 gap-6">
      <h3 className=" text-4xl sm:text-2xl font-medium">Register</h3>
      <div className="w-full p-4">
        <form onSubmit={handleSubmit(onSubmit)} className=" text-sm sm:text-xs font-light flex flex-col gap-10 ">
          <div className="flex w-full flex-col gap-4">
            <Controller
              name="name"
              control={control}
              render={({
                field: { ref, ...fileds },
                fieldState: { error },
              }) => (
                <Input
                  size="large"
                  label="Name"
                  placeholder="Enter your name"
                  {...fileds}
                  refEl={ref}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <Input
                  size="large"
                  label="Email"
                  placeholder="Enter your email"
                  refEl={ref}
                  {...fields}
                  error={error?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <Input
                  size="large"
                  label="Passord"
                  placeholder="Enter your password"
                  type="password"
                  refEl={ref}
                  {...fields}
                  error={error?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <Input
                  size="large"
                  label="Passord"
                  placeholder="Confirm your password"
                  type="password"
                  refEl={ref}
                  {...fields}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="w-full flex flex-col py-4 gap-3 items-center">
            <Button size="big" type="primary" block>
              Register
            </Button>

            <p>
              Already have an account ? {'  '}{' '}
              <span className=" cursor-pointer font-normal text-primary">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
