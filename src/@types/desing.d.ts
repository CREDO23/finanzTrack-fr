declare global {}

/**============== DESIGN ========================== */

interface BtnProps {
  disabled?: boolean;
  size? : 'big' | 'medium'
  block?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  children: ReactNode;
  type?: 'primary' | 'secondary';
}

interface InputProps {
  bordered?: boolean;
  placeholder?: string;
  label?: string | ReactNode;
  value?: string;
  onChange?: (e: any) => void;
  onPressEnter?: (e: any) => void;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon?: ReactNode };
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  showCount?: boolean;
  status?: 'error' | 'warning';
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'large' | 'middle' | 'small';
  type?: 'search' | 'password' | 'text' | 'textarea';
  autoSize?: boolean | { minRows: number; maxRows: number };
  onSearch?: (value: any, e: any) => void;
  loading?: boolean;
  showLabel?: boolean;
  error?: string;
  labelColor?: 'primary' | 'secondary';
  required?: boolean;
  refEl?: RefCallBack;
  inputMode?:
    | 'email'
    | 'tel'
    | 'text'
    | 'search'
    | 'none'
    | 'url'
    | 'numeric'
    | 'decimal'
    | undefined;
}

interface ISelectProps {
  defaultValue?: string | string[] | number | number[];
  label?: string | ReactNode;
  disabled?: boolean;
  options: { label: string; value }[];
  placeholder?: string;
  size?: 'large' | 'middle' | 'small';
  value?: string | string[] | number | number[];
  onChange?: (e: any) => void;
  showLabel?: boolean;
  labelColor?: 'primary' | 'secondary';
  error? : string;
  refEl?: RefCallBack;
  
}