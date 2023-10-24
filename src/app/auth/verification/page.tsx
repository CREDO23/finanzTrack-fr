'use client';

import Button from '@/components/shared/button';
import Input from '@/components/shared/input';

export default function Register(): JSX.Element {
  return (
    <div className=" w-full h-full flex flex-col items-center py-10 gap-6 sm:w-80">
      <h3 className=" text-4xl sm:text-2xl font-medium">Verification</h3>
      <div className="w-full p-4 flex flex-col gap-8">
        <p className=" font-normal">
          We have just sent a verification code to your email, you can check
          your inbox.
        </p>
        <form className=" text-sm sm:text-xs font-light flex flex-col gap-10 ">
          <div className="flex w-full flex-col gap-4">
            <Input
              size="large"
              label="Verification code"
              placeholder="Enter your code here..."
            />
          </div>
          <div className="w-full flex flex-col py-4 gap-3 items-center">
            <Button size="big" type="primary" block>
              Verify
            </Button>
            <p>
              I didn&apos;t receive the code ? {'  '}{' '}
              <span className=" cursor-pointer font-normal text-primary">
                Send again
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
