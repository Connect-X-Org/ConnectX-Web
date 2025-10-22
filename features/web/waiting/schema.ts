import z from "zod";

export const SubFormSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Email must be at least 5 characters." }),
});

export type TSubFormSchema = z.infer<typeof SubFormSchema>;
