import InfoBox from "@/components/InfoBox";

const Info = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox heading={"For Renters"}
                             content={"Find your dream rental property. Bookmark properties and contact owners."}
                             buttonInfo={{href: "/properties", text: "Browse Properties"}}
                    />
                    <InfoBox heading={"For Owners"}
                             className={"bg-blue-100"}
                             content={"List your properties and reach potential tenants. Rent as an airbnb or long term."}
                             buttonInfo={{
                                 href: "/properties/add",
                                 text: "Add Property",
                                 className: "bg-blue-500 text-white hover:bg-blue-600"
                             }}
                    />
                </div>
            </div>


        </section>
    );
};

export default Info;