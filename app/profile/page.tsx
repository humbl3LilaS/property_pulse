import UserProfile from "@/components/UserProfile";
import UserProperties from "@/components/UserProperties";
import {getSessionUser} from "@/services/authServices";
import {getPropertiesByUserId} from "@/services/propertyServices";
import {Suspense} from "react";

const ProfilePage = async () => {
    const session = await getSessionUser();

    const data = await getPropertiesByUserId(session?.id);

    return (
        <section className="bg-blue-50">
            <div className="container m-auto py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h1 className={"mx-20 mb-4 text-3xl font-bold"}>Your Profile</h1>
                    <div className={"flex flex-col md:flex-row"}>
                        <UserProfile/>
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserProperties data={data}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProfilePage;