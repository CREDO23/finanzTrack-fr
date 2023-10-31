import { ReactNode } from 'react';

export default function TransactionItem({
  color,
  title,
  icon,
  description,
  amount,
  date,
  type,
}: {
  color: string;
  icon: ReactNode;
  title: string;
  description: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}) {
  const bgColor =
    color.substring(0, 3) +
    'a' +
    color.substring(3, color.length - 1) +
    ', 0.15 )';
  return (
    <div className="w-full h-20 flex items-center gap-3 border rounded-xl bg-[#FCFCFC] p-2">
      <div
        style={{ color: color, backgroundColor: bgColor }}
        className="h-full shrink-0 text-4xl flex items-center justify-center w-16 rounded-lg "
      >
        {icon}
      </div>
      <div className="h-full font-light justify-between flex grow gap-3">
        <div className="h-full justify-between flex flex-col ">
          <p className=" font-medium capitalize">{title}</p>
          <p className="text-cgray text-sm">
            {title.length > 65 ? description.substring(0, 63) + ' ...' : description}
          </p>
        </div>
        <div className="h-full justify-between items-end flex flex-col">
          <p
            className={`${
              type == 'income' ? ' text-cgreen' : 'text-cred'
            } font-medium `}
          >{`${type == 'expense' ? '-' : '+'}$${amount}`}</p>
          <p className=" text-xs text-cgray">{date}</p>
        </div>
      </div>
    </div>
  );
}
