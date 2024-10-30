"use client";
import {Controller, useForm} from "react-hook-form";
import {PropertyAddSchema, PropertyAddSchemaType} from "@/validation/formValidationSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";


const AMENITIES = ["Wifi", "Full Kitchen", "Washer & Dryer", "Free Parking", "Swimming Pool", "Hot Tub", "24/7 Security", "Wheelchair Accessible", "Elevator Access", "Dishwasher", "Gym/Fitness Center", "Air Conditioning", "Balcony/Patio", "Smart TV", "Coffee Maker"];

const PropertyAddForm = () => {

    const form = useForm<PropertyAddSchemaType>({
        resolver: zodResolver(PropertyAddSchema),
        mode: "onChange",
        defaultValues: {
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
    return (
        <Form {...form}>
            <form action={"/api/properties"} method={"POST"} encType={"multipart/form-data"}>
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Add Property
                </h2>

                <FormField name={"type"} render={({field}) => (
                    <FormItem className={"mb-4"}>
                        <FormLabel className={"mb-2 text-base text-gray-700 font-bold "}>Type</FormLabel>
                        <FormControl>
                            <select
                                id="type"
                                className="border rounded w-full py-2 px-3"
                                {...field}
                                defaultValue={field.value}
                            >
                                <option value="Apartment">Apartment</option>
                                <option value="Condo">Condo</option>
                                <option value="House">House</option>
                                <option value="Cabin Or Cottage">Cabin or Cottage</option>
                                <option value="Room">Room</option>
                                <option value="Studio">Studio</option>
                                <option value="Other">Other</option>
                            </select>
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
                                <Controller name={"amenities"} control={form.control} render={({field}) =>
                                    (<Input type={"checkbox"} name={"amenities"} value={item} onChange={() => {
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

                <div className={"mb-4"}>
                    <Controller name={"images"} control={form.control} render={({field}) => (
                        <Input type={"file"} multiple={true} accept={"images/*"} name={"images"}
                               onChange={(e) => field.onChange(e.target.files ? Array.from(e.target.files) : [])}/>
                    )}/>
                </div>

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