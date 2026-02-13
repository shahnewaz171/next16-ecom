import z from 'zod';

export const signupFormSchema = z
  .object({
    name: z
      .string()
      .nonempty({ error: 'Name is required.' })
      .regex(/^\S.*$/, { error: 'Name cannot start with a space.' })
      .min(2, { error: 'Name must be at least 2 characters long.' }),
    email: z.email({ error: 'Please enter a valid email' }).trim(),
    password: z
      .string()
      .nonempty({ error: 'Password is required.' })
      .min(6, { error: 'Password must be at least 6 characters long.' })
      .regex(/[a-zA-Z]/, { error: 'Password must contain at least one letter.' })
      .regex(/[0-9]/, { error: 'Password must contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        error: 'Password must contain at least one special character.'
      }),
    confirm_password: z.string().nonempty({ error: 'Confirm password is required.' })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password']
  });
