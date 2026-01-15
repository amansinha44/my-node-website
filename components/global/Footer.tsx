"use client"
import { useMenuItems } from '@/data';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { SiGooglemaps } from "react-icons/si";
import { FooterFormContainer } from './FooterFormContainer';

export const Footer = () => {
    const [expandedItems, setExpandedItems] = useState<Record<string, Record<string, number>>>({});
    const menuItems = useMenuItems();


    const toggleExpand = (menuLabel: string, pageName: string, currentLimit: number, totalItems: number) => {
        setExpandedItems(prev => ({
            ...prev,
            [menuLabel]: {
                ...prev[menuLabel],
                [pageName]: Math.min(currentLimit + 4, totalItems)
            }
        }));
    };

    return (
        <footer
            id="footer"
            className="relative w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white "

        >
            {/* Top Section - Form and Map */}
            <div className="flex flex-col lg:flex-row mb-8 gap-5 w-full">
                <div className="w-full lg:w-1/2">
                    <FooterFormContainer />
                </div>
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[479px] rounded-2xl border-2 border-border/10 hover:border-border transition-colors duration-200 ease-in-out overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3562.9788065293574!2d83.3793673!3d26.7450524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b0d013cef1%3A0xc7d8e7bab401f8fe!2sSynergy%20Superspeciality%20Hospital%20and%20Cancer%20Institute!5e0!3m2!1sen!2sin!4v1746087373998!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Menu Links Section */}
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full">
                    {menuItems.map((menu) => {
                        const hasMultiplePages = menu.pages.length > 1;

                        return (
                            <div key={menu.label} className="w-full">
                                <h2 className="text-primary font-semibold font-display capitalize text-left mb-4">
                                    {menu.label}
                                </h2>

                                {menu.pages.map((page) => {
                                    const uniqueLinksMap = new Map<string, string>();
                                    page.links.forEach((link) => {
                                        if (!uniqueLinksMap.has(link.href)) {
                                            uniqueLinksMap.set(link.href, link.label);
                                        }
                                    });

                                    const uniqueLinks = Array.from(uniqueLinksMap.entries());
                                    if (uniqueLinks.length === 0) return null;

                                    const initialLimit = 4;
                                    const currentLimit = expandedItems[menu.label]?.[page.name] || initialLimit;
                                    const shouldShowMore = uniqueLinks.length > initialLimit && currentLimit < uniqueLinks.length;
                                    const visibleLinks = uniqueLinks.slice(0, currentLimit);

                                    return (
                                        <div key={page.name} className="mb-4 w-full">
                                            {hasMultiplePages && (
                                                <h3 className="text-sm font-semibold mb-2">{page.name}</h3>
                                            )}
                                            <ul className="w-full">
                                                {visibleLinks.map(([href, label]) => (
                                                    <li key={href} className="w-full">
                                                        <Link
                                                            href={href}
                                                            className="text-xs md:text-sm hover:text-primary py-0.5 mb-0.5 transition-colors duration-200 text-neutral-500 block w-full overflow-hidden text-ellipsis"
                                                        >
                                                            {label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {shouldShowMore && (
                                                <button
                                                    onMouseOver={() => toggleExpand(menu.label, page.name, currentLimit, uniqueLinks.length)}
                                                    className="text-xs text-primary hover:underline cursor-pointer mt-1"
                                                >
                                                    + {uniqueLinks.length - currentLimit} more
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section - Social and Copyright */}
            <div className="mt-8 pt-5 border-t border-gray-400 w-full relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                    {/* Social Links - Center on mobile */}
                    <div className="flex items-center justify-center md:justify-start gap-4 order-2 md:order-1">
                        {[
                            {
                                name: "GoogleMaps",
                                Icon: SiGooglemaps,
                                link: "https://www.google.com/maps/place/Synergy+Superspeciality+Hospital+and+Cancer+Institute/@26.7450524,83.3793673,17.1z/data=!4m15!1m8!3m7!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!2sSynergy+Superspeciality+Hospital+and+Cancer+Institute!8m2!3d26.7452875!4d83.3791698!10e5!16s%2Fg%2F11qg18_33b!3m5!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!8m2!3d26.7452875!4d83.3791698!16s%2Fg%2F11qg18_33b?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
                            },
                            {
                                name: "Instagram",
                                Icon: FaInstagram,
                                link: "https://www.instagram.com/synergycancergkp/",
                            },
                            {
                                name: "Facebook",
                                Icon: FaFacebook,
                                link: "https://www.facebook.com/synergycancerhospital/?rdid=hDvFz0M4bkSM3FIq",
                            },
                        ].map((button, index) => (
                            <Link key={index} href={button.link} aria-label={button.name} target="_blank" rel="noopener noreferrer">
                                <button.Icon size={16} className='text-synergy-blue hover:text-primary transition-colors' />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright - Center on mobile */}
                    <div className=" order-1 md:order-2 w-full md:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <p className="text-center text-sm font-light text-slate-500">
                            Synergy Super Speciality Hospital & Cancer Institute © 2025 All Rights Reserved
                        </p>
                    </div>

                    {/* Developer Credit - Right on desktop, below on mobile */}
                    <div className="text-center md:text-right order-3 w-full md:w-auto">
                        <p className="text-sm font-light text-slate-600">
                            Developed & Designed By Viacam Productions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
