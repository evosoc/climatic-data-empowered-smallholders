export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const confirmPasswordValidator = (confirmPassword: string, password: string) => {
  if (!confirmPassword || confirmPassword.length <= 0) return 'Confirm Password cannot be empty.';
  if (password !== confirmPassword) return 'Passwords do not match.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const  capitalizeFirstLetter = (value: string = "") => {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
