"use client";

import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {
    PropertyEditSchema,
    PropertyEditSchemaType
} from "@/validation/formValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {TProperty} from "@/models/Property";
import {updateProperty} from "@/services/propertyServices";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";

const AMENITIES = ["Wifi", "Full Kitchen", "Washer & Dryer", "Free Parking", "Swimming Pool", "Hot Tub", "24/7 Security", "Wheelchair Accessible", "Elevator Access", "Dishwasher", "Gym/Fitness Center", "Air Conditioning", "Balcony/Patio", "Smart TV", "Coffee Maker"];
const PropertyEditForm = ({defaultValue}: { defaultValue: TProperty }) => {
    const form = useForm<PropertyEditSchemaType>({
        resolver: zodResolver(PropertyEditSchema),
        mode: "onChange",
        defaultValues: {
            ...defaultValue,
            sellerPhone: defaultValue.seller_info.phone,
            sellerEmail: defaultValue.seller_info.email,
            sellerName: defaultValue.seller_info.name,
            weekly: defaultValue.rates.weekly,
            monthly: defaultValue.rates.monthly,
            nightly: defaultValue.rates.nightly,
            street: defaultValue.location.street,
            city: defaultValue.location.city,
            state: defaultValue.location.state,
            zipcode: defaultValue.location.zipcode,
            amenities: defaultValue.amenities,
            squareFeet: defaultValue.square_feet
        }
    });

    const onSubmit: SubmitHandler<PropertyEditSchemaType> = async (values) => {
        const payload: Partial<TProperty> = {
            type: values.type,
            name: values.name,
            description: values.description,
            location: {
                street: values.street,
                city: values.city,
                state: values.state,
                zipcode: values.zipcode
            },
            rates: {
                weekly: values.weekly,
                nightly: values.nightly,
                monthly: values.monthly,
            },
            seller_info: {
                name: values.sellerName,
                email: values.sellerEmail,
                phone: values.sellerPhone,
            },
            amenities: values.amenities ?? [],
            beds: values.beds,
            baths: values.baths,
            square_feet: values.squareFeet
        };
        const res = await updateProperty(defaultValue._id.toString(), payload);
        if (!res) {
            toast.error("Update Failed");
        }
        toast.success("Property Updated");
        redirect(`/properties/${defaultValue._id.toString()}`);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Edit Property
                </h2>

                <FormField name={"type"} control={form.control}  render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={"Select a property type"}/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
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

                <FormField name={"name"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                            Listing name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder={"eg. Beautiful Apartment in Miami"} {...field} />
                        </FormControl>
                    </FormItem>)}
                />

                <FormField name={"description"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                            Description
                        </FormLabel>
                        <FormControl>
                            <Textarea placeholder={"eg. Beautiful Apartment in Miami"} {...field}
                                      className={"w-full h-32"}/>
                        </FormControl>
                    </FormItem>)}
                />


                <div className="mb-4 bg-blue-50 p-4">
                    <label className="mb-2 block text-gray-700 font-bold text-lg md:text-xl md:mb-4">Location</label>
                    <FormField name={"street"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Street
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"Street"} {...field}/>
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"city"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                City
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"City"} {...field}/>
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"state"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                State
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"State"} {...field}/>
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"zipcode"} render={({field}) => (
                        <FormItem className={"mb-4"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                ZipCode
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={"ZipCode"} {...field}/>
                            </FormControl>
                        </FormItem>)}
                    />
                </div>

                <div className="mb-4 flex flex-wrap">
                    <FormField name={"beds"} render={({field}) => (
                        <FormItem className={"w-full sm:w-1/3 pr-2"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Beds
                            </FormLabel>
                            <FormControl>
                                <Input  {...field}
                                        type={"number"}
                                        min={1}
                                        onChange={(e) => field.onChange(Number(e.target.value))}/>
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"baths"} render={({field}) => (
                        <FormItem className={"w-full sm:w-1/3 pr-2"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Baths
                            </FormLabel>
                            <FormControl>
                                <Input  {...field}
                                        type={"number"}
                                        min={1}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                        </FormItem>)}
                    />
                    <FormField name={"squareFeet"} render={({field}) => (
                        <FormItem className={"w-full sm:w-1/3 pr-2"}>
                            <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                                Square Feet
                            </FormLabel>
                            <FormControl>
                                <Input  {...field}
                                        type={"number"}
                                        min={1}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                        </FormItem>)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Amenities</label>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {AMENITIES.map((item, index) => (
                            <div key={index} className={"flex items-center gap-x-2"}>
                                <Controller name={"amenities"} control={form.control} render={({field}) =>
                                    // @ts-expect-error amenities's default value is [] so it will have value
                                    (<Input type={"checkbox"} checked={field?.value.includes(item) ?? false}
                                            value={item} onChange={() => {
                                        // @ts-expect-error amenities's default value is [] so it will have value
                                        const updatedField = field.value.includes(item) ? field.value.filter(field => field !== item) : [...field.value, item];
                                        field.onChange(updatedField);
                                    }} id={item}
                                            className={"aspect-square w-5"}/>)
                                }/>
                                <Label htmlFor={item} className={"cursor-pointer"}>{item}</Label>
                            </div>)
                        )}
                    </div>
                </div>

                <div className="mb-4 bg-blue-50 p-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Rates (Leave blank if not applicable)
                    </label
                    >
                    <div
                        className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                        <FormField name={"weekly"} render={({field}) => (
                            <FormItem className="flex items-center">
                                <FormLabel className={"text-base text-gray-700 mr-2"}>
                                    Weekly
                                </FormLabel>
                                <FormControl>
                                    <Input  {...field}
                                            type={"number"}
                                            step={50}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                            </FormItem>)}
                        />

                        <FormField name={"monthly"} render={({field}) => (
                            <FormItem className="flex items-center">
                                <FormLabel className={"text-base text-gray-700 mr-2"}>
                                    Monthly
                                </FormLabel>
                                <FormControl>
                                    <Input  {...field} type={"number"}
                                            step={50}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                            </FormItem>)}
                        />

                        <FormField name={"nightly"} render={({field}) => (
                            <FormItem className="flex items-center">
                                <FormLabel className={"text-base text-gray-700 mr-2"}>
                                    Nightly
                                </FormLabel>
                                <FormControl>
                                    <Input  {...field}
                                            type={"number"}
                                            step={50}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                            required={false}
                                    />
                                </FormControl>
                            </FormItem>)}
                        />

                    </div>
                </div>

                <FormField name={"sellerName"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                            Seller name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder={"eg. Beautiful Apartment in Miami"} {...field} />
                        </FormControl>
                    </FormItem>)}
                />

                <FormField name={"sellerEmail"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                            Seller Email
                        </FormLabel>
                        <FormControl>
                            <Input placeholder={"eg. Beautiful Apartment in Miami"} {...field} />
                        </FormControl>
                    </FormItem>)}
                />

                <FormField name={"sellerPhone"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>
                            Seller Phone
                        </FormLabel>
                        <FormControl>
                            <Input placeholder={"eg. Beautiful Apartment in Miami"} {...field} />
                        </FormControl>
                    </FormItem>)}
                />

                <div>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={form.formState.isSubmitting || !form.formState.isValid}
                    >
                        Edit Property
                    </Button>
                </div>
            </form>
        </Form>);
};

export default PropertyEditForm;