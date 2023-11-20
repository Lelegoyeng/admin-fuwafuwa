import React from "react";
import Select from "react-select";
import { addCommas, removeNonNumeric } from "../../constants/helper";

const TextInput = ({
    name,
    type,
    placeholder,
    defaultValue,
    className,
    label,
    register,
    validations,
    errors,
    readOnly,
    layout,
    options,
    hidden,
    isMulti = false,
    field,
    dataCy,
    rows = 3,
    setValue,
    value,
    disabled,
    onChange,
    step,
    ref,
}) => {
    let error = errors?.[name];
    if (name?.includes(".")) {
        if (name.split(".").length > 3) {
            const [n, i, k, ii, kk] = name.split(".");
            error = errors?.[n]?.[i]?.[k]?.[ii]?.[kk];
        } else {
            const [n, i, k] = name.split(".");
            error = errors?.[n]?.[i]?.[k];
        }
    }

    const onAmountChange = (value) => {
        setValue(name, addCommas(removeNonNumeric(value)));
    };
    return (
        <div
            className={`form-group` + (layout === "horizontal" ? ` row` : ``)}
            hidden={hidden}
        >
            {label ? (
                <label
                    htmlFor={name}
                    className={
                        `font-weight-bold` +
                        (layout === "horizontal" ? ` col-sm-4 col-form-label` : ``)
                    }
                >
                    {label}
                </label>
            ) : (
                ""
            )}
            <div
                className={`${layout === "horizontal" ? "col-sm-8" : ""} ${type === "checkbox" ? "py-2" : ""
                    }`}
            >
                {type === "textarea" ? (
                    <textarea
                        rows={rows}
                        data-cy={dataCy}
                        id={name}
                        readOnly={readOnly}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        // ref={ref}
                        {...register(name, validations)}
                        className={
                            `form-control large ${className} ` +
                            (error ? `border-danger` : ``)
                        }
                    />
                ) : type === "select" ? (
                    <select
                        id={name}
                        data-cy={dataCy}
                        readOnly={readOnly}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        {...register(name, validations)}
                        className="form-control"
                    // ref={ref}
                    >
                        {options?.map((opt, index) => (
                            <option key={index} value={opt.value} data-cy={index}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ) : type === "text1" ? (
                    <select
                        id={name}
                        data-cy={dataCy}
                        readOnly={readOnly}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        {...register(name, validations)}
                        className="form-control"
                    // ref={ref}
                    >
                        {options?.map((opt, index) => (
                            <option key={index} value={opt.value} data-cy={index}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ) : type === "react-select" ? (
                    <Select
                        isMulti={isMulti}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        {...field}
                        data-cy={dataCy}
                        isDisabled={readOnly}
                        isOptionDisabled={(option) => option.isdisabled}
                        options={options}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                borderRadius: className?.includes("borad-0") ? "0" : "0.35rem",
                                borderTopLeftRadius:
                                    className?.includes("borad-0") &&
                                    className?.includes("borad-tl") &&
                                    "0.35rem",
                                borderTopRightRadius:
                                    className?.includes("borad-0") &&
                                    className?.includes("borad-tr") &&
                                    "0.35rem",
                                borderBottomLeftRadius:
                                    className?.includes("borad-0") &&
                                    className?.includes("borad-bl") &&
                                    "0.35rem",
                                borderBottomRightRadius:
                                    className?.includes("borad-0") &&
                                    className?.includes("borad-br") &&
                                    "0.35rem",
                            }),
                        }}
                    />
                ) : type === "radio" ? (
                    <>
                        <div className="mx-auto py-2">
                            {options?.map((item, k) => {
                                return (
                                    <div
                                        key={k}
                                        className="custom-control custom-radio d-inline mr-2"
                                    >
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            id={name + k}
                                            readOnly={readOnly}
                                            placeholder={placeholder}
                                            name={name}
                                            data-cy={dataCy}
                                            value={item.value}
                                            {...register(name, validations)}
                                        // ref={ref}
                                        />
                                        {/* <input type="radio" name="r"/> */}
                                        <label htmlFor={name + k} className="custom-control-label">
                                            {item.label}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : type === "checkbox" ? (
                    <div className="custom-control  d-inline mr-2">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            id={name}
                            readOnly={readOnly}
                            placeholder={placeholder}
                            name={name}
                            onClick={(e) =>
                                typeof onChange === "function" ? onChange(e.target.checked) : ""
                            }
                            data-cy={dataCy}
                            // ref={ref}
                            // value={defaultValue}
                            // checked={defaultValue}
                            {...register(name, validations)}
                        />
                        {/* <input type="radio" name="r"/> */}
                        <label htmlFor={name} className="custom-control-label">
                            {label || placeholder}
                        </label>
                    </div>
                ) : type === "amount" ? (
                    <>
                        <input
                            type={"text"}
                            disabled={disabled}
                            data-cy={dataCy}
                            className={
                                `form-control text-right large ${className} ` +
                                (error ? `border-danger` : ``)
                            }
                            id={name}
                            readOnly={readOnly}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            {...register(name, validations)}
                        // onChange={(e) => onAmountChange(e.target.value)}
                        />
                        {error ? (
                            <div className="text-danger small py-2 text-right">
                                {error.message}
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ) : type === "switch" ? (
                    <>
                        <div className="custom-control custom-switch">
                            <input
                                disabled={disabled}
                                className="custom-control-input"
                                type="checkbox"
                                id={name}
                                readOnly={readOnly}
                                placeholder={placeholder}
                                name={name}
                                data-cy={dataCy}
                                {...register(name, validations)}
                            />
                            <label
                                className="custom-control-label user-select-none"
                                htmlFor={name}
                            >
                                {options?.find((a) => a.value === value)?.label}
                            </label>
                        </div>
                    </>
                ) : (
                    <>
                        <input
                            type={type}
                            data-cy={dataCy}
                            className={
                                `form-control large ${className} ` +
                                (error ? `border-danger` : ``)
                            }
                            id={name}
                            readOnly={readOnly}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            {...register(name, validations)}
                            min={type === "number" ? 0 : null}
                            step={step}
                        />
                        {error ? (
                            <div className="text-danger small py-2 text-right">
                                {error.message}
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default TextInput;
