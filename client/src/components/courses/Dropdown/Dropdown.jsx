import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({title, links}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                id="myDropdownButton" // Added ID for potential specificity
                className={`border-b border-[#DCDCE7] w-full h-16 flex items-center justify-between p-4 transition duration-200 ease-in-out hover:text-[#1F3DD9] ${isOpen ? "" : "text-black"}`}
                onClick={toggleDropdown}>
                <div className={`text-2xl font-bold ${isOpen ? "text-[#1F3DD9]" : ""}`}>{title}</div>
                <div className="w-4">
                    <Image src={isOpen ? "icons/vector-up.svg" : "icons/vector-down.svg"} alt="arrow" width={20} height={20} />
                </div>
            </button>
            {/* Dropdown styling */}
            {/* <div className="w-screen max-w-full flex flex-col items-center justify-center gap-6 mbMedium:px-16 mbSmall:px-5 mbMini:px-0">
                {DropDownData.map((data, index) => (
                    <Dropdown key={index} title={data.title} links={data.links} />
                ))}
            </div> */}

            {/* relative top-0 left-0 w-full bg-white shadow-md rounded-md overflow-auto max border transition duration-200 ease-in-out p-4 */}
            {isOpen && (
                <div className={`w-screen max-w-full flex flex-col items-center justify-center gap-6 mbSmall:px-5 mbMini:px-0`}>
                    {links.map((link, index) => (
                        <Link href={link.url} className="border-b border-[#081245] w-full h-16 flex items-center justify-between">
                            <div key={index} className="w-full h-16 ">
                                <div className="flex flex-row justify-between text-2xl font-bold text-[#081245] hover:text-[#1F3DD9]">
                                    <div className="px-14">{link.label}</div>
                                    <div className="w-4">
                                        <Image width={20} height={20} src={"icons/Vector-black.svg"} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Dropdown;
