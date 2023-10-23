import { ConfigProvider, Select as Slct } from "antd";

export default function Select({
  showLabel = true,
  label,
  onChange,
  options,
  disabled = false,
  defaultValue,
  size = "middle",
  value,
  placeholder = "",
  labelColor = "primary",
}: ISelectProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff5722",
          colorError: "#FE4D4F",
        },
      }}
    >
      <div className="w-full custom-yellow-800  flex flex-col justify-center gap-1">
        {showLabel &&
          (typeof label === "string" ? (
            <p
              className={` ${
                labelColor == "primary"
                  ? " custom-yellow-800"
                  : labelColor == "secondary"
                  ? " text-white"
                  : ""
              }`}
            >
              {label}
            </p>
          ) : (
            label
          ))}
        <Slct
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          size={size}
          disabled={disabled}
          options={options}
        />
      </div>
    </ConfigProvider>
  );
}
