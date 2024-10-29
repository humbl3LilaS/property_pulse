"use client";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {PropertyAddSchema, PropertyAddSchemaType} from "@/validation/formValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

const AMENITIES = ["Wifi", "Full Kitchen", "Washer & Dryer", "Free Parking", "Swimming Pool", "Hot Tub", "24/7 Security", "Wheelchair Accessible", "Elevator Access", "Dishwasher", "Gym/Fitness Center", "Air Conditioning", "Balcony/Patio", "Smart TV", "Coffee Maker"];

const PropertyAddForm = () => {
    const form = useForm<PropertyAddSchemaType>({
        resolver: zodResolver(PropertyAddSchema),
        defaultValues: {
            type: "apartment",
            name: "",
            description: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            beds: 0,
            baths: 0,
            squareFeet: 0,
            sellerName: "",
            sellerEmail: "",
            sellerPhone: "",
            images: [],
            weekly: 0,
            monthly: 0,
            nightly: 0,
            amenities: []
        }
    });

    const selectedAmenities = form.watch("amenities");

    const amenitiesSelectHandler = (value: string) => {
        const updatedValue = selectedAmenities.includes(value) ? selectedAmenities.filter(item => item !== value) : [...selectedAmenities, value];
        form.setValue("amenities", updatedValue);
    };

    const imagesSelectHandler = (value: File[]) => {
        form.setValue("images", value);
    };

    const onSubmit: SubmitHandler<PropertyAddSchemaType> = (value) => {
        console.log(value);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Add Property
                </h2>

                <FormField name={"type"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>Type</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder={"Select Property Type"}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"all"}>All</SelectItem>
                                    <SelectItem value={"apartment"}>Apartment</SelectItem>
                                    <SelectItem value={"studio"}>Studio</SelectItem>
                                    <SelectItem value={"condo"}>Condo</SelectItem>
                                    <SelectItem value={"house"}>House</SelectItem>
                                    <SelectItem value={"cabin-cottage"}>Cabin or Cottage</SelectItem>
                                    <SelectItem value={"loft"}>Loft</SelectItem>
                                    <SelectItem value={"room"}>Room</SelectItem>
                                    <SelectItem value={"other"}>Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
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
                                <Controller name={"amenities"} control={form.control} render={() =>
                                    (<Input type={"checkbox"} onChange={() => amenitiesSelectHandler(item)} id={item}
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

                <div className={"mb-4"}>
                    <Controller name={"images"} control={form.control} render={() => (
                        <Input type={"file"} multiple={true} accept={"images/*"}
                               onChange={(e) => imagesSelectHandler(e.target.files ? Array.from(e.target.files) : [])}/>
                    )}/>
                </div>
                {/*<FormField name={"images"}*/}
                {/*           render={({field}) => (*/}
                {/*               <FormItem className="mb-4">*/}
                {/*                   <FormLabel className="mb-2 text-base text-gray-700 font-bold">*/}
                {/*                       Images (Select up to 4 images)*/}
                {/*                   </FormLabel>*/}
                {/*                   <FormControl>*/}
                {/*                       <Input*/}
                {/*                           {...field}*/}
                {/*                           type="file"*/}
                {/*                           multiple={true}*/}
                {/*                           onChange={(e) => {*/}

                {/*                               const files = e.target.files ? Array.from(e.target.files) : [];*/}
                {/*                               const updatedFile = [...field.value, ...files] as File[];*/}
                {/*                               console.log(updatedFile);*/}
                {/*                               console.log(e.target.value);*/}
                {/*                               field.onChange(updatedFile);*/}
                {/*                           }}*/}
                {/*                       />*/}
                {/*                   </FormControl>*/}
                {/*               </FormItem>*/}
                {/*           )}/>*/}

                <div>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={form.formState.isSubmitting || !form.formState.isValid}
                    >
                        Add Property
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default PropertyAddForm;