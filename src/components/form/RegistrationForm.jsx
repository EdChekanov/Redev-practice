import { Controller, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthday: null,
      gender: '',
      phoneNumber: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateBirthDate = (date) => {
    if (!date) return 'Birthday is required';
    if (!dayjs(date).isValid()) return 'Wrong date';
    if (dayjs(date).isAfter(dayjs(), 'day')) return 'Incorrect date';
    if (dayjs().diff(dayjs(date), 'year') > 120) return "You're so old(";
    return true;
  };

  const password = watch('password', '');

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={2}
          >
            <Controller
              name="userName"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="User Name"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'wrong email',
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Enter the password',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
                pattern: {
                  value: /^(?=.*[A-Z]).+$/,
                  message:
                    'Password must contain at least one uppercase letter.',
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Password"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  fullWidth
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirm your password',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  fullWidth
                />
              )}
            />
            <Controller
              name="birthday"
              control={control}
              rules={{ validate: validateBirthDate }}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  label="Birthday"
                  {...field}
                  onChange={(date) => field.onChange(date)}
                  inputFormat="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error ? error.message : null,
                      fullWidth: true,
                    },
                  }}
                />
              )}
            />
            <FormControl component="fieldset" error={!!errors.gender}>
              <FormLabel component="legend">Gender</FormLabel>
              <Controller
                name="gender"
                control={control}
                rules={{ required: 'Choose gender' }}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />
              {errors.gender && (
                <FormHelperText>{errors.gender.message}</FormHelperText>
              )}
            </FormControl>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: 'Enter the phone number',
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: 'Invalid phone number format',
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  variant="standard"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  fullWidth
                />
              )}
            />
            <Button type="submit" variant="outlined">
              Sign up
            </Button>
          </Box>
        </form>
      </LocalizationProvider>
    </>
  );
};

export default RegistrationForm;
