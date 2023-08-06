import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";

interface TextAreaFields extends AriaTextFieldProps {
  rows: number;
}

function TextArea(props: TextAreaFields) {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...props,
        inputElementType: "textarea",
      },
      ref
    );

  return (
    <div>
      <label
        {...labelProps}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
        {props.isRequired && <span className="text-rose-400">*</span>}
      </label>
      <textarea
        {...inputProps}
        ref={ref}
        rows={props.rows}
        className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        onChange={(e) => props.onChange?.(e.target.value)}
        required={props.isRequired}
        aria-valuemax={props.maxLength}
        aria-valuemin={props.minLength}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && props.validationState === "invalid" && (
        <div
          {...errorMessageProps}
          className="absolute ml-2 mt-1 text-sm text-rose-400"
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default TextArea;
