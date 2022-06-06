export const firstName = (value) => {
  if (!value) return "First name is required";

  if (value.length < 3) return "Atleast 3 characters required";

  return null;
};

export const lastName = (value) => {
  if (!value) return "Last name is required";

  if (value.length < 2) return "Atleast 2 characters required";

  return null;
};

export const gender = (value) => {
  if (!value) return "Gender is required";
};

export const state = (value) => {
  if (!value) return "State is required";
};

export const languages = (value) => {
  if (value === 0) return "Atleast one language is required";
};

export const email = (value) => {
  if (!value) return "Email is required";

  if (
    !value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    return "Email is not valid";

  return null;
};

export const city = (value) => {
  if (!value) return "City is required";

  if (value.length < 3) return "Atleast 3 characters required";

  return null;
};

export const expertise = (value) => {
  if (!value) return "Expertise is required";
};

export const phoneNumber = (value) => {
  if (!value) return "Phone Number is required";

  if (!value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/))
    return "Phone Number is not valid";

  return null;
};

export const qualification = (value) => {
  if (!value) return "Qualification is required";

  if (value.length < 3) return "Atleast 3 characters required";

  return null;
};

export const password = (value) => {
  if (!value) return "Password is required";

  if (value.length < 6) return "Atleast 6 characters required";

  return null;
};

export const confirmPassword = (password, confirmPassword) => {
  if (!password) return "Confirm Password is required";

  if (password !== confirmPassword) return "Passwords do not match";

  return null;
};

export const prefferedDateTime = (value) => {
  if (!value) return "Preferred Date & Time is required";

  return null;
};

export const dateOfBirth = (value) => {
  if (!value) return "Date of birth is required";

  return null;
};

export const Language = (value) => {
  if (!value) return "Language is required";

  if (value.length < 1) return "Please select atleast one language";

  return null;
};

export const Age = (value) => {
  if (!value) return "Age is required";

  if (value.length < 1) return "Please select atleast one age group";

  return null;
};

export const ustime_zone = (value) => {
  if (!value) return "Timezone is required";
};
