import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "zu kurz" }),
  username: z.string().min(2, { message: "zu kurz" }),
  email: z.string().email(),
  password: z
    .string()
    .min(2, { message: "Das Passwort muss mindestens 8 Zeichen lang sein." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(2, { message: "Das Passwort muss mindestens 8 Zeichen lang sein." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Der Name muss mindestens 2 Zeichen lang sein." }),
  username: z.string().min(2, { message: "Der Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Mindestens 5 Zeichen." }).max(2200, { message: "Mindestens 2,200 Zeichen" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Mindestens 1000 Zeichen." }),
  tags: z.string(),
});