import { LiaSpinnerSolid } from 'react-icons/lia';

const Spinner = () => <span className=' animate-spin'> <LiaSpinnerSolid /></span>;

export default function Button(props: BtnProps): JSX.Element {
  const {
    disabled = false,
    children,
    loading = false,
    block = false,
    type = '',
    onClick,
    htmlType = 'submit',
    size
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn uppercase ${size} ${!disabled && type} ${block && ' w-full'} flex items-center justify-center `}
      type={htmlType}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
