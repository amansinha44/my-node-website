'use client';

import React from 'react';
import { FaIdCardAlt, FaHospitalUser } from 'react-icons/fa';
import { ImageWithFallback } from './ImageWithFallback';
import { useTranslations } from 'next-intl';

const AyushmaanBharatCard = () => {
    const t = useTranslations('ayushmaanBharat');

    return (
        <section className="py-8 sm:py-12 px-2 sm:px-3 lg:px-8 rounded-xl md:rounded-2xl  md:mx-0 bg-gradient-to-tl from-synergy-blue/60 via-synergy-blue/50 to-indigo-200 shadow-md md:shadow-lg">
            <div className="max-w-6xl w-full mx-auto space-y-8 md:space-y-10">
                {/* Header Section */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 md:gap-6">
                    <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-1">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/insurance-companies/PMJAY.png"
                            width={200}
                            height={200}
                            alt="Pradhan Mantri Ayushmaan Bharat Yojana"
                            className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32"
                        />
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/MODI.png"
                            width={200}
                            height={200}
                            alt="Pradhan Mantri Narendra Modi"
                            className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32 border-2 border-synergy-blue"
                        />
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center order-1 sm:order-2 px-2">
                        {t('title')}
                    </h1>

                    <div className="order-3 sm:ml-auto">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/Oggy.jpg"
                            width={200}
                            height={200}
                            alt="Pradhan Mantri Narendra Modi"
                            className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32 border-2 border-synergy-blue"
                        />
                    </div>
                </div>

                {/* Description Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/Ayushman-Card.jpg"
                            width={450}
                            height={400}
                            alt="Ayushmaan Bharat Card"
                            className="object-cover object-center w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg md:rounded-xl shadow-md md:shadow-lg shadow-black/30"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                            {t('description')}
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 md:gap-3">
                            <FaIdCardAlt className="text-primary text-3xl md:text-4xl" />
                            <span>{t('benefits.title')}</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-white/30 p-4 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{t('benefits.whatIs.title')}</h3>
                                <p className="text-stone-700 text-sm md:text-base">
                                    {t('benefits.whatIs.description')}
                                </p>
                            </div>
                            <div className="bg-white/30 p-4 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{t('benefits.availing.title')}</h3>
                                <p className="text-stone-700 text-sm md:text-base">
                                    {t('benefits.availing.description')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                        <div className="bg-gradient-to-tl from-fuchsia-800 to-fuchsia-900 text-white p-5 sm:p-6 md:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg shadow-black/20 w-full max-w-xs sm:max-w-sm text-center flex flex-col items-center gap-3 md:gap-4">
                            <FaHospitalUser className="text-4xl md:text-5xl" />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{t('getCovered.title')}</h3>
                            <p className="text-white/80 text-xs sm:text-sm md:text-base">
                                {t('getCovered.description')}
                            </p>
                            <button className="mt-2 md:mt-4 bg-white hover:bg-white/90 text-primary font-semibold py-2 px-4 sm:px-6 rounded-full transition-colors text-xs sm:text-sm md:text-base">
                                {t('getCovered.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AyushmaanBharatCard;
