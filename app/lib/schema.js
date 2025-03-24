import { z } from "zod";

export const onboardingSchema = z.object({
  industry: z.string({
    required_error: "Industry is required",
  }),
  subIndustry: z.string({
    required_error: "Sub Industry is required",
  }),
  bio: z.string().max(500).optional(),
  experience: z.string().transform((val) =>
    val
      ? val
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      : undefined
  ),
});
