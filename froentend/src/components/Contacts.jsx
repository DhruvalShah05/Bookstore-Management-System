import Footer from "./Footer";
import Navbar from "./NavBar";

const ContactUs = () => {
    return (
        <>
        <Navbar/>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 py-10 dark:bg-slate-900 dark:text-white">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Get in Touch with Us
                </h1>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2 p-4">
                        <form className="space-y-6">
                            <label className="block">
                                <span className="text-gray-700">Name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full input input-bordered"
                                    placeholder="Your Name"
                                    required
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input
                                    type="email"
                                    className="mt-1 block w-full input input-bordered"
                                    placeholder="Your Email"
                                    required
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Message</span>
                                <textarea
                                    className="mt-1 block w-full input input-bordered"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                ></textarea>
                            </label>
                            <button type="submit" className="btn btn-secondary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                        <img
                            className="mt-10 w-64 h-64 object-cover"
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCk9MTsj5pE-i-GeCcNBfs-ae6xP4-xkyidA&s'
                            alt="Contact Us"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
