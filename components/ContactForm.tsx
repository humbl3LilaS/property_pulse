"use client";
import {SubmitHandler, useForm} from "react-hook-form";
import {ContactFormSchema, ContactFormSchemaType} from "@/validation/formValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {FaPaperPlane} from "react-icons/fa";
import {useSession} from "next-auth/react";

const ContactForm = () => {
    const form = useForm<ContactFormSchemaType>({resolver: zodResolver(ContactFormSchema)});
    const session = useSession();
    // @ts-expect-error I added the id of user in callbacks function
    const userId = session?.data?.user?.id;
    const onSubmit: SubmitHandler<ContactFormSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name={"name"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"Name..."} {...field} />
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"email"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"Email..."} {...field} />
                            </FormControl>
                        </FormItem>)}
                    />

                    <FormField name={"phone"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Seller Phone
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"Phone..."} {...field} />
                            </FormControl>
                        </FormItem>)}
                    />

                    <FormField name={"message"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Message
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder={"Message..."} {...field}
                                          className={"w-full h-32"}/>
                            </FormControl>
                        </FormItem>)}
                    />

                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                        type="submit"
                        disabled={form.formState.isSubmitting || !form.formState.isValid || !userId}
                    >
                        <FaPaperPlane/> <span>Send message</span>
                    </Button>

                </form>
            </Form>
        </div>
    );
};

export default ContactForm;