"use client";

import {SubmitHandler, useForm} from "react-hook-form";
import {SearchFormSchema, SearchFormSchemaType} from "@/validation/formValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

import {useRouter} from "next/navigation";

const SearchForm = () => {
    const form = useForm<SearchFormSchemaType>({
        resolver: zodResolver(SearchFormSchema),
        defaultValues: {searchString: "", type: ""}
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<SearchFormSchemaType> = async (data) => {
        console.log("data", data);
        if (data.searchString === "" && data.type === "All") {
            router.push("/properties");
        } else {
            const query = `?location=${data.searchString}&propertyType=${data.type}`;
            router.push(`/properties/search/${query}`);
        }
    };

    return (

        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div
                    className={"w-full max-w-2xl p-4 mt-3 mx-auto flex flex-col md:flex-row md:gap-x-4 md:items-center"}>
                    <FormField name={"searchString"} control={form.control} render={({field}) => (
                        <FormItem className={"w-full mb-4 md:w-3/5 md:mb-0 "}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold sr-only"}>
                                Listing name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"enter city, street or state"} {...field} />
                            </FormControl>
                        </FormItem>)}
                    />

                    <FormField name={"type"} control={form.control} render={({field}) => (
                        <FormItem className={"w-full md:w-2/5 md:pl-2"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold sr-only "}>Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={"Select a property type"}/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value={"All"}>All</SelectItem>
                                    <SelectItem value={"Apartment"}>Apartment</SelectItem>
                                    <SelectItem value={"Condo"}>Condo</SelectItem>
                                    <SelectItem value={"House"}>House</SelectItem>
                                    <SelectItem value={"Cabin Or Cottage"}>Cabin Or Cottage</SelectItem>
                                    <SelectItem value={"Room"}>Room</SelectItem>
                                    <SelectItem value={"Studio"}>Studio</SelectItem>
                                    <SelectItem value={"Other"}>Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}/>
                    <Button type={"submit"}
                            className={"mt-4 bg-blue-500 transition-colors duration-500 hover:bg-blue-600 focus-visible:ring-gary-500 md:mt-2"}>
                        Search
                    </Button>
                </div>
            </form>
        </Form>

    )
        ;
};

export default SearchForm;