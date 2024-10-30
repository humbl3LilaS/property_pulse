import Image from "next/image";
import {getSessionUser} from "@/services/authServices";

const UserProfile = async () => {
    const session = await getSessionUser();

    return (
        <div className={"md:w-1/4 mx-20 mt-10"}>
            <div className={"mb-4"}>
                <Image src={session?.image ?? "/icons/profile.png"} alt={"profile image"}
                       className={"aspect-square w-32 rounded-full md:w-48 mx-auto md:mx-0"}
                       width={150} height={150}
                />
            </div>
            <h2 className={"mb-4 text-xl"}>
                <span className={"block font-bold"}>Name: </span> <span className={"text-lg"}>{session?.name}</span>
            </h2>
            <p className={"mb-4 text-xl"}>
                <span className={"block font-bold"}>Email: </span> <span className={"text-lg italic font-normal"}>{session?.email}</span>
            </p>

        </div>
    );
};

export default UserProfile;