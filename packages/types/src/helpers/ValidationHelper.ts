import * as yup from "yup";

export const REGEX = {
  ONE_TO_HUNDRED: /\b([1-9]|[1-9][0-9]|100)\b/,
  GREATER_THAN_ZERO: /^[1-9][0-9]*$/,
  POSITIVE_NUMBER: /^\d+$/,
};

const VALIDATE = Object.freeze({
  REQUIRED_BOOLEAN: (message: string = "") =>
    yup
      .boolean()
      .required(`Please select ${message}`)
      .transform((value: any) => value === "true" || value === true),
  REQUIRED: (message: string = "") =>
    yup.string().required(`Please enter ${message}.`),
  PERCENTAGE: () =>
    yup
      .string()
      .matches(/^100$|^\d{0,2}(\.\d{1,2})? *%?$/, `Enter valid Percentage.`)
      .required(`Please enter Percentage.`),
  REQUIRED_NUMBER: (message: string = "") =>
    yup
      .string()
      .matches(/^[0-9]*$/, `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),
  REQUIRED_NUMBER_GREATER_THAN_ZERO: (message: string = "") =>
    yup
      .string()
      .matches(REGEX.GREATER_THAN_ZERO, `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),
  NUMBER_GREATER_THAN_ZERO: (message: string = "") =>
    yup.string().matches(REGEX.GREATER_THAN_ZERO, `Enter valid ${message}.`),
  POSITIVE_NUMBER: (message: string = "") =>
    yup.string().matches(REGEX.GREATER_THAN_ZERO, `Enter valid ${message}.`),

  PRICE: (message: string = "") =>
    yup.string().matches(/^[.]?[0-9]+[.]?[0-9]*$/, `Enter valid ${message}.`),

  REQ_PRICE: (message: string = "") =>
    yup
      .string()
      .matches(/^[.]?[0-9]+[.]?[0-9]*$/, `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),

  NUMBER: (message: string = "") =>
    yup.string().matches(/^[0-9]*$/, `Enter valid ${message}.`),
  DECIMAL: (message: string = "") =>
    yup
      .string()
      .matches(
        /^(0*[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,
        `Enter valid ${message}.`
      ),
  REQUIRED_DECIMAL: (message: string = "", fullMessage?: boolean) =>
    yup
      .string()
      .matches(
        /^(0*[0-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,
        fullMessage ? message : `Enter valid ${message}.`
      )
      .required(fullMessage ? message : `Please enter ${message}.`),
  DIGITS: (digit: string, message: string) =>
    yup
      .string()
      .matches(new RegExp(`^[0-9]{${digit}}$`), `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),
  REQUIRED_ALPHABET: (message: string = "") =>
    yup
      .string()
      .matches(/^[a-zA-Z ]*$/, `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),
  ALPHABET: (message: string = "") =>
    yup.string().matches(/^[a-zA-Z ]*$/, `Enter valid ${message}.`),
  REQUIRED_ALPHABET_NUMBER: (message: string = "") =>
    yup
      .string()
      .matches(/[a-zA-Z]/, `Enter valid ${message}.`)
      .required(`Please enter ${message}.`),
  ALPHABET_NUMBER: (message: string = "") =>
    yup.string().matches(/[a-zA-Z]/, `Enter valid ${message}.`),
  AADHAR: () =>
    yup
      .string()
      .matches(
        /^[1-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
        "Enter valid Aadhar Number."
      ),
  REQUIRED_IFSC_CODE: () =>
    yup
      .string()
      .matches(/[A-Z]{4}[0][A-Z0-9]{6}$/, "Enter valid IFSC Code.")
      .required("Please enter IFSC Code."),
  IFSC_CODE: () =>
    yup
      .string()
      .matches(/[A-Z]{4}[0][A-Z0-9]{6}$/, "Enter valid IFSC Code.")
      .required("Please enter IFSC Code."),
  REQUIRED_AADHAR: () =>
    yup
      .string()
      .matches(
        /^[1-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
        "Enter valid Aadhar Number."
      )
      .required("Please enter Aadhar Number."),
  PINCODE: () =>
    yup
      .string()
      .matches(/^[0-9]{6}$/, "Enter valid Pincode.")
      .required("Please enter Pincode."),
  REQUIRED_MOBILE: () =>
    yup
      .string()
      .matches(/^([9876]{1})(\d{1})(\d{8})/, "Enter valid Mobile Number.")
      .required("Please enter Mobile Number."),
  MOBILE: () =>
    yup
      .string()
      .matches(/^([9876]{1})(\d{1})(\d{8})/, "Enter valid Mobile Number."),
  REQUIRED_EMAIL: () =>
    yup
      .string()
      .email(String("Please enter valid Email."))
      .required(String("Please enter email.")),
  EMAIL: () => yup.string().email(String("Please enter valid Email.")),
  REQUIRED_TEXT: (message: string = "") =>
    yup.string().required(`Please enter ${message}.`),

  REQUIRED_BANK_ACCOUNT_NUMBER: () =>
    yup
      .string()
      .matches(/^\d{9,18}$/, "Enter valid Account Number.")

      .required("Please enter Account Number."),

  BANK_ACCOUNT_NUMBER: () =>
    yup.string().matches(/^\d{9,18}$/, "Enter valid Account Number."),

  REQUIRED_PAN_NUMBER: () =>
    yup
      .string()
      .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Enter valid Pan Number.")
      .required("Please enter Pan Number."),

  PAN_NUMBER: () =>
    yup.string().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Enter valid Pan Number."),

  TEXT: (message: string = "") => yup.string().nullable().optional(),
  REQUIRED_SELECT: (message: string = "") =>
    yup.string().required(`Please select ${message}.`),

  REQUIRED_DATE: (
    message: string = "",
    min = null,
    minDateMessage = "",
    max = null,
    maxDateMessage = ""
  ) => {
    if (min && max) {
      return yup
        .date()
        .min(min, minDateMessage)
        .max(max, maxDateMessage)
        .required(String(`Please enter ${message}.`))
        .typeError(`Enter valid ${message}.`);
    } else if (min) {
      return yup
        .date()
        .min(min, minDateMessage)
        .required(String(`Please enter ${message}.`))
        .typeError(`Enter valid ${message}.`);
    } else if (max) {
      return yup
        .date()
        .min(max, maxDateMessage)
        .required(String(`Please enter ${message}.`))
        .typeError(`Enter valid ${message}.`);
    } else {
      return yup
        .string()
        .required(String(`Please enter ${message}.`))
        .typeError(`Enter valid ${message}.`);
    }
  },
});

export default VALIDATE;
