type PropertyDetailsProps = {
    params: Promise<{  id: string }>
}

const PropertyDetails = async ({params}: PropertyDetailsProps) => {
    const {id} = await params;

    return (
        <div>
            Property Details {id}
        </div>
    );
};

export default PropertyDetails;