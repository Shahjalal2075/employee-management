
const Contact = () => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const reviewMessage = { name, email, message };
        console.log(reviewMessage);
        
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/tYzZqRx/contact.png" alt="" />
            </div>
            <div className="flex-col justify-center items-center mt-8">
                <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmitForm} className="flex flex-col justify-center items-center " action="">
                    <input className="border-[#38C6D1] border-2 px-3 py-1 text-lg text-black rounded-xl mt-4 w-80" placeholder="Enter Name" type="text" name="name" required />
                    <input className="border-[#38C6D1] border-2 px-3 py-1 text-lg text-black rounded-xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                    <textarea className="border-[#38C6D1] border-2 p-3 h-48 text-xl text-black rounded-lg mt-4 w-80 text-start" placeholder="Enter Your Message" type="text" name="message" required />
                    <input className="cursor-pointer bg-[#017EFF] text-lg rounded-xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Submit"} />

                </form>
            </div>
        </div>
    );
};

export default Contact;