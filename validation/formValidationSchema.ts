import {IssueData, z} from "zod";

export const PropertyAddSchema = z.object({
    type: z.string().min(1),
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(200),
    street: z.string().min(1).max(80),
    city: z.string().min(1).max(50),
    state: z.string().min(1).max(2),
    zipcode: z.string().regex(/^\d{6}$/),
    beds: z.number().min(1).max(10),
    baths: z.number().min(1).max(10),
    squareFeet: z.number().min(1).max(100000),
    amenities: z.custom<string[]>().optional(),
    weekly: z.number().optional(),
    monthly: z.number().optional(),
    nightly: z.number().optional(),
    sellerName: z.string().min(1).max(50),
    sellerEmail: z.string().email(),
    sellerPhone: z.string().regex(/^09\d{9}$/),
    images: z.custom<File[]>().optional(),
}).superRefine((data, ctx) => {
    if (data.amenities && data.amenities.length < 1) {
        ctx.addIssue({
            path: ["amenities"],
        } as IssueData);
    }

    if (data.images && data?.images.length < 1) {
        ctx.addIssue({
            path: ["images"],
        } as IssueData);
    }
});


export type PropertyAddSchemaType = Zod.infer<typeof PropertyAddSchema>