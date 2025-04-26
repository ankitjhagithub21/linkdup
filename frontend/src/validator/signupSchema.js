import z from "zod";

export const signupSchema = z.object({
    fullName:z.string().trim().min(3,"Name must be atleast 3 charcters long."),
    email:z.string().email("Invalid email address"),
    password:z.string()
    .min(8,"password must be atleast 8 characters")
    .regex(/[A-Z]/,'Password must contain atleast 1 uppercase letter')
    .regex(/[a-z]/,'password must contain atleast 1 lower case letter')
    .regex(/[0-9]/,"Password must contain atleast one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
})


export const loginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string()
    .min(8,"password must be atleast 8 characters")
    .regex(/[A-Z]/,'Password must contain atleast 1 uppercase letter')
    .regex(/[a-z]/,'password must contain atleast 1 lower case letter')
    .regex(/[0-9]/,"Password must contain atleast one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
})
