import { useState } from 'react';

export default function Switch({
  value = false,
  onChange,
}: {
  value?: boolean;
  onChange: () => void;
}): JSX.Element {
  const [toggle, setToggle] = useState(value);

  const handleToggle = () => {
    setToggle(prev => !prev);

    onChange();
  };

  return (
    <div
      onClick={() => handleToggle()}
      className={`w-12 h-6 border ${
        toggle ? ' bg-primary' : 'bg-white'
      }  rounded-3xl  relative  px-[2px]`}
    >
      <div
        className={`w-[20px] absolute top-1/2  -translate-y-1/2 ${
          toggle ? 'bg-white left-[24px] ' : ' bg-primary left-[2px] '
        } h-[20px]    rounded-full`}
      ></div>
    </div>
  );
}
