'use client';

import Button from '@/components/shared/button';
import Input from '@/components/shared/input';

export default function Register(): JSX.Element {
  return (
    <div className=" w-full h-full flex flex-col items-center py-10 gap-6">
      <h3 className=" text-4xl sm:text-2xl font-medium">Register</h3>
      <div className="w-full p-4">
        <form className=" text-sm sm:text-xs font-light flex flex-col gap-10 ">
          <div className="flex w-full flex-col gap-4">
            <Input size="large" label="Name" placeholder="Enter your name" />
            <Input size="large" label="Email" placeholder="Enter your email" />
            <Input
              size="large"
              label="Passord"
              placeholder="Enter your password"
              type="password"
            />
            <Input
              size="large"
              label="Confirm password"
              placeholder="Enter your password"
              type="password"
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
