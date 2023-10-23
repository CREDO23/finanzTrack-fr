import { Button as Btn, ConfigProvider } from "antd";

export default function Button(props: BtnProps): JSX.Element {
  const {
    disabled = false,
    children,
    loading = false,
    danger = false,
    block = false,
    type ="",
    onClick,
    htmlType = "submit"
  } = props;

  // return (
  //     <Btn
  //       className="flex uppercase text-sm items-center justify-center "
  //       style={
  //         type === "primary" && !ghost ? { background: "#7F3DFF" } : undefined
  //       }
  //       type={type}
  //       size={size}
  //       block={block}
  //       icon={icon}
  //       onClick={onClick}
  //       ghost={ghost}
  //       disabled={disabled}
  //       loading={loading}
  //       danger={danger}
  //       shape={shape}
  //       htmlType={htmlType}
  //     >
  //       {title}
  //     </Btn>
  // );
  return <button disabled={disabled} className={`btn ${!disabled && type}`} type={htmlType}>{children}</button>
}
