'use client';

export default function TransactionGategoryItem({
  name,
  type,
  description,
}: {
  name: string;
  type: 'income' | 'expense';
  description: string;
}) {
  return (
    <div
      className={`w-full shrink-0 max-w-screen-sm h-16 flex items-center gap-3 border bg-[#FCFCFC]  rounded-xl  p-2`}
    >
      <div className="h-full justify-between flex flex-col ">
        <p className={` font-medium capitalize ${
        type == 'income' ? ' text-cgreen' : type == 'expense' ? ' text-cred' : ''
      }`}>{name}</p>
        <p className="text-cgray text-sm">
          {description.length > 65 ? description.substring(0, 63) + ' ...' : description}
        </p>
      </div>
    </div>
  );
}
