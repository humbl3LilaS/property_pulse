const PropertyDetails = ({params}: { params: { id: string } }) => {
    const id = params.id;
    return (
        <div>
            Property Details {id}
        </div>
    );
};

export default PropertyDetails;