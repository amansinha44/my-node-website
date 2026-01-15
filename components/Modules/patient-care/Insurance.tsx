import AyushmaanBharatCard from '@/components/global/AyushmaanBharatCard';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import React from 'react';

const Insurance = () => {
    const insuranceCompanies = [
        { name: 'Star Health and Allied Insurance Company', logo: "/insurance-companies/Star_Health_and_Allied_Insurance.svg.png" },
        { name: 'Bajaj Allianz General Insurance Company', logo: "/insurance-companies/Bajaj_Allianz_Insurance.svg.png" },
        { name: 'Aditya Birla Health Insurance Company', logo: "/insurance-companies/Aditya_Birla_Health_Insurance.svg.png" },
        { name: 'Future General Health Insurance Company', logo: "/insurance-companies/Future_Generali_India_Life_Insurance_Logo.jpg" },
        { name: 'Ericsion TPA', logo: "/insurance-companies/ericson.webp" },
        { name: 'Heritage TPA', logo: "/insurance-companies/Heritage_Health_insurance.svg.png" },
        { name: 'Chola Mandalam General Insurance Company', logo: "/insurance-companies/Chola_MS_Insurance_Company.png" },
        { name: 'Universal Sompo General Insurance Company', logo: "/insurance-companies/USGI.png" },
        { name: 'HDFC ERGO', logo: "/insurance-companies/HDFC-Ergo.png" },
        { name: 'Apollo Munich Health Insurance Company', logo: "/insurance-companies/apollo-munich-health-insurance.png" },
        { name: 'Paramount Health Care', logo: "/insurance-companies/PHS.png" },
        { name: 'Reliance General Insurance', logo: "/insurance-companies/Reliance_General_Insurance.svg.png" },
        { name: 'Max Bupa Insurance (NIVA)', logo: "/insurance-companies/Max_Bupa_Logo.svg.png" },
        { name: 'Safeway TPA', logo: "/insurance-companies/Safeway_TPA.png" },
        { name: 'Genins TPA', logo: "/insurance-companies/Genins_TPA.png" },
        { name: 'ICICI Lombard Insurance', logo: "/insurance-companies/ICICI-Lombard_Insurance.png" },
        { name: 'Vidal TPA (Vipul Medcorp TPA)', logo: "/insurance-companies/Vidal_TPA.png" },
        { name: 'FHPL', logo: "/insurance-companies/FHPL.png" },
        { name: 'Medi Assist', logo: "/insurance-companies/MediAssist.png" },
        { name: 'United Healthcare Parekh', logo: "/insurance-companies/UnitedHealthCareParekh.png" },
        { name: 'SBI General Insurance', logo: "/insurance-companies/SBI_General_Insurance.webp" },
        { name: 'Medsave TPA', logo: "/insurance-companies/TPA__med save.png" },
        { name: 'Tata AIG', logo: "/insurance-companies/TATA_AIG_logo.png" },
        { name: 'New India', logo: "/insurance-companies/New_India_Assurance.svg.png" },
    ];

    const steps = [
        {
            title: "Visit Insurance Desk",
            description: "Go to the hospital’s insurance help desk with your Ayushmaan card and ID proof."
        },
        {
            title: "Provide Details",
            description: "Submit your identification and card number to verify your eligibility."
        },
        {
            title: "Get Authorization",
            description: "The staff will process the authorization with the PM-JAY system for your treatment."
        },
        {
            title: "Receive Treatment",
            description: "Once approved, receive free and cashless treatment at the empanelled hospital."
        },
        {
            title: "Post-Treatment Support",
            description: "Collect discharge summary and necessary documents. Follow-up support is also provided."
        },
    ];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Insurance and TPA Services
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        We partner with leading insurance providers and accept Ayushmaan Bharat Card for seamless healthcare access.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Streamlined Insurance Processing</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Our dedicated insurance desk works directly with multiple providers to ensure quick claim approvals and cashless treatment facilities. We handle all paperwork and coordination with your insurance provider.
                    </p>
                    <p className="text-lg text-gray-600">
                        From document verification to final settlement, our team guides you through every step of the insurance process.
                    </p>
                </div>
            </section>

            {/* Partnered Companies */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Insurance Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {insuranceCompanies.map((company, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-start items-center w-full gap-x-4">
                                <div className="!max-w-32 overflow-hidden h-full relative object-center flex items-center justify-start ">
                                    <ImageWithFallback
                                        fallbackSrc='/fallback-image.webp'
                                        src={company.logo}
                                        width={300}
                                        height={200}
                                        alt={company.name}
                                        className='object-contain object-center max-h-[3rem]'
                                    />
                                </div>
                                <span className="text-gray-700">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="text-white">
                {/* Ayushmaan Bharat Section */}
                <AyushmaanBharatCard />
            </div>
            {/* How to Avail Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                            Using Insurance in 5 Simple Steps
                        </h2>
                        <p className="mt-4 text-gray-500 text-lg">
                            Follow these easy steps to get cashless treatment effortlessly.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800">Insurance Support</h2>
                    <div className="space-y-4 mb-8">
                        <p className="text-lg">📞 +91-XXX-XXXX-XXX</p>
                        <p className="text-lg">✉️ insurance.support@hospital.com</p>
                        <p className="text-lg">📍 Ground Floor, Main Lobby - Insurance Desk</p>
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Need Immediate Help?
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
