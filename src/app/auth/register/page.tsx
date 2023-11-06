'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { registerSchema, defaultValues } from './validation';
import Link from 'next/link';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import {message} from 'antd'
import { useAuthDispatcher } from '@/store/auth/hooks';
import { AuthActionType } from '@/store/auth/actions';
import { useRouter } from 'next/navigation';

export default function Register(): JSX.Element {


  const router = useRouter()

  // Form handling
  const { control, handleSubmit } = useForm({
    resolver: joiResolver(registerSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  //Register user
  const registerUser = async ({
    confirmPassword,
    ...rest
  }: IUser): Promise<AxiosResponse<IAPIResponse<{ user: IUser; accessToken: string }>>> => {
    return await APICall.post('auth/register', { data: rest }, '');
  };

  const [registerUserAction, state] = useAxiosAction<{ user: IUser; accessToken: string }>(registerUser);

  const onSubmit = async (user: any) => {
    await registerUserAction(user);
  };

  // Set the user on the global state
  const authDispatch = useAuthDispatcher()

  const [msg , msgContext] = message.useMessage()
  

  useEffect(() => {
    const error = state.error?.response?.data
    const data = state.data?.data.data

    if(error?.error){
      msg.error(error.message)
    }

    if(data){
        msg.success(`Logged as ${data.user.name}`)
        authDispatch({type : AuthActionType.SET_USER, payload : data.user})
        router.push('/home')
    }

  }, [state.loading])

 

  return (
    <>
    {msgContext}
    <div className=" w-full h-full flex flex-col items-center py-10 gap-6">
      <h3 className=" text-4xl sm:text-2xl font-medium">Register</h3>
      <div className="w-full p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" text-sm sm:text-xs font-light flex flex-col gap-10 "
        >
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
            <Button loading={state.loading} size="big" type="primary" block>
              Register
            </Button>

            <p>
              Already have an account ?
              <Link href={'/auth/login'}>
                <span className=" cursor-pointer font-normal text-primary">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
