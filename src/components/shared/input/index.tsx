import { InfoCircleOutlined } from "@ant-design/icons";
import { ConfigProvider, Input as Inpt } from "antd";

export default function Input(props: InputProps): JSX.Element {
  const {
    placeholder,
    label,
    value,
    defaultValue,
    onChange,
    onPressEnter,
    onSearch,
    allowClear = false,
    addonAfter,
    addonBefore,
    size = "middle",
    type = "text",
    status,
    disabled = false,
    maxLength,
    showCount = false,
    prefix,
    suffix,
    autoSize,
    loading = false,
    showLabel = true,
    error,
    labelColor = "primary",
    required = false,
    refEl = null,
    bordered
  } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7F3DFF",
          colorError: "#FE4D4F",
        },
      }}
    >
      <div className="w-full custom-yellow-800  flex flex-col gap-1">
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
        {type === "text" && (
          <Inpt
          bordered={bordered}
            required={required}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            prefix={prefix}
            suffix={suffix}
            ref={refEl}
          />
        )}
        {type === "password" && (
          <Inpt.Password
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            ref={refEl}
          />
        )}
        {type === "search" && (
          <Inpt.Search
            placeholder={placeholder}
            value={value}
            onSearch={onSearch}
            loading={loading}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            prefix={prefix}
            ref={refEl}
            suffix={suffix}
          />
        )}
        {type === "textarea" && (
          <Inpt.TextArea
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            ref={refEl}
            autoSize={autoSize}
          />
        )}
        {error && (
          <div className=" text-xs font-light text-red flex items-center gap-1">
            <p>{error}</p>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
