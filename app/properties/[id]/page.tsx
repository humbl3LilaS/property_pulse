import {getPropertiesById} from "@/services/propertyServices";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import BookmarkBtn from "@/components/BookmarkBtn";
import ShareBtn from "@/components/ShareBtn";
import ContactForm from "@/components/ContactForm";

type PropertyDetailsProps = {
    params: Promise<{ id: string }>
}

const PropertyDetailsPage = async ({params}: PropertyDetailsProps) => {
    const {id} = await params;
    const data = await getPropertiesById(id);

    if (!data) {
        return <h1 className={"mt-10 text-2xl font-bold text-center"}>Property Not found</h1>;
    }

    return (
        <>
            <PropertyHeader image={data.images[0]}/>

            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <PropertyDetails data={data}/>
                        {/*todo: make it into separate form component*/}
                        <aside className="space-y-4">
                            <BookmarkBtn/>
                            <ShareBtn/>
                            <ContactForm/>
                        </aside>
                    </div>
                </div>
            </section>
            <PropertyImages images={data.images}/>
        </>
    )
        ;
};

export default PropertyDetailsPage;