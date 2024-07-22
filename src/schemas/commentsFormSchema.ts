import { z } from 'zod';

export const CommentsFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  comment: z.string().min(1, "Comment is required"),
});

export type CommentsFormValues = z.infer<typeof CommentsFormSchema>;
