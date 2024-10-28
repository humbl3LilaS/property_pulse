import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const PropertyTypeSelector = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={"Select Property Type"}/>
            </SelectTrigger>
            <SelectContent className={"*:capitalize"}>
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
    );
};

export default PropertyTypeSelector;