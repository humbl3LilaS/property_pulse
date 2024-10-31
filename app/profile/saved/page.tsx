import {getSessionUser} from "@/services/authServices";
import {getSavedProperties} from "@/services/bookmarkServices";
import PropertyCard from "@/components/PropertyCard";
import {TProperty} from "@/models/Property";

const SavedProperties = async () => {
    const user = await getSessionUser();
    const savedProperties: TProperty[] = await getSavedProperties(user?.id);
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {savedProperties && savedProperties.length === 0 && <p>No properties found</p>}
                {savedProperties && savedProperties.length > 0 &&
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {savedProperties.map((item, index) => <PropertyCard key={index} data={item}/>)}
                  </div>}
            </div>
        </section>
    );
};

export default SavedProperties;