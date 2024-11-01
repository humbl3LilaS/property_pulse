import {getMessages} from "@/services/messageServices";
import {getSessionUser} from "@/services/authServices";
import MessageCard, {TMessagePopulated} from "@/components/MessageCard";

const MessagesPage = async () => {
    const user = await getSessionUser();
    const messages: TMessagePopulated[] | undefined = await getMessages(user?.id);
    console.log(messages);

    return (
        <section className="bg-blue-50">
            <div className="container m-auto py-24 max-w-6xl">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <h1 className="text-3xl font-bold mb-4">Your Messages</h1>
                    {!messages || messages?.length === 0 &&
                      <h2 className={"mt-8 text-2xl font-semibold text-orange-600 text-center"}>Empty Message</h2>}
                    {messages && messages.length > 0 && messages.map((message) => (
                        <MessageCard data={message} key={message._id.toString()}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MessagesPage;