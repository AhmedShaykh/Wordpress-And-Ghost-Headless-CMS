"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Link as Links } from "react-scroll/modules";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Link from "next/link";

interface NavItem {
    label: string
    page: string
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Services",
        page: "services"
    },
    {
        label: "Contact",
        page: "contact"
    }
];

const Navbar = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-8 sm:px-20 sticky top-0 z-50 shadow bg-[#e5e7eb] dark:bg-[#04040e] border-b border-neutral-300 dark:border-stone-700">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-6 md:py-8 md:block">
                        <Logo />

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <XMarkIcon className="h-6 w-6 dark:text-white" /> : <Bars2Icon className="h-6 w-6 dark:text-white" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-12 md:space-y-0 font-semibold dark:font-medium">
                            <Link
                                className={
                                    "block lg:inline-block text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                                }
                                href="/blog"
                            >
                                Blog
                            </Link>

                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <>
                                        <Links
                                            key={idx}
                                            to={item.page}
                                            className={
                                                "block lg:inline-block text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                                            }
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {item.label}
                                        </Links>
                                    </>
                                )
                            })}
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className="p-2 rounded-xl hover:text-yellow-500"
                                >
                                    <SunIcon className="h-6 w-6" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="p-2 rounded-xl hover:text-blue-500"
                                >
                                    <MoonIcon className="h-6 w-6" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;