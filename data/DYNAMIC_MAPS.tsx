// MAPS FOR DYNAMIC PAGES


import { AwarenessCampaigns } from "@/components/Modules/cancer-survivors/get-involved/AwarenessCampaigns"
import { Volunteer } from "@/components/Modules/cancer-survivors/get-involved/Volunteer"
import { VictoryStories } from "@/components/Modules/cancer-survivors/stories-of-hope/VictoryStories"
import { CounselingAndMentalHealth } from "@/components/Modules/cancer-survivors/support-programs/CounselingAndMentalHealth"
import { RehabilationPrograms } from "@/components/Modules/cancer-survivors/support-programs/RehabilationPrograms"

import { PatientTestimonials } from "@/components/Modules/cancer-survivors/stories-of-hope/PatientTestimonials"
import { DoctorsPage } from "@/components/Modules/discover-synergy/doctors/DoctorsPage"
import { Faqs } from "@/components/Modules/health-library/faqs/Faqs"
import { CancerPrevention } from "@/components/Modules/health-library/patient-education/CancerPrevention"
import { DiagnosisAndStaging } from "@/components/Modules/health-library/patient-education/DiagnosisAndStaging"
import { NutritionAndWellness } from "@/components/Modules/health-library/patient-education/NutritionAndWellness"
import { TreatmentOptions } from "@/components/Modules/health-library/patient-education/TreatmentOptions"
import { DynamicCancerTypesPage } from "@/components/Modules/health-library/types-of-cancer/DynamicCancerTypesPage"
import { EmergencyCare } from "@/components/Modules/patient-care/EmergencyCare"
import HealthChecks from "@/components/Modules/patient-care/HealthChecks"
import { InPatientFacilities } from "@/components/Modules/patient-care/InPatientFacilities"
import Insurance from "@/components/Modules/patient-care/Insurance"
import { OutPatientClinic } from "@/components/Modules/patient-care/OutPatientClinic"
import { SecondOpinion } from "@/components/Modules/patient-care/SecondOpinion"
import AdmissionDischarge from "@/components/Modules/services/administrative-services/AdmissionDischarge"
import MedicalRecords from "@/components/Modules/services/administrative-services/MedicalRecords"
import DiagnosticServices from "@/components/Modules/services/DiagnosticServices"
import ServicesPage from "@/components/Modules/services/ServicesPage"
import DepartmentPage from "@/components/Modules/services/SingleServicePage"
import SpecializedServices from "@/components/Modules/services/SpecializedServices"
import Ambulance from "@/components/Modules/services/support-services/Ambulance"
import BloodBank from "@/components/Modules/services/support-services/BloodBank"
import { Dietary } from "@/components/Modules/services/support-services/Dietary"
import { HouseKeeping } from "@/components/Modules/services/support-services/HouseKeeping"
import { Laundry } from "@/components/Modules/services/support-services/Laundry"
import { Pharmacy } from "@/components/Modules/services/support-services/Pharmacy"
import { Security } from "@/components/Modules/services/support-services/Security"
import SupportServicesPage from "@/components/Modules/services/support-services/SupportServicesPage"


export const DoctorsMap = {
    "Dr-Alok-Tiwari": <DoctorsPage />,
    "Dr-Anjali-Jain": <DoctorsPage />,
    "Dr-Saurabh-Mishra": <DoctorsPage />,
    "all": <DoctorsPage />,
}

export const ServicesMap = {
    "medical-oncology": <DepartmentPage />,
    "surgical-oncology": <DepartmentPage />,
    "neurology": <DepartmentPage />,
    "neurosurgery": <DepartmentPage />,
    "gastroenterology": <DepartmentPage />,
    "nephrology": <DepartmentPage />,
    "urology": <DepartmentPage />,
    "orthopedics": <DepartmentPage />,
    "anesthesia": <DepartmentPage />,
    "general-surgery": <DepartmentPage />,
    "pediatrics": <DepartmentPage />,
    "gynecology": <DepartmentPage />,
    "head-and-neck": <DepartmentPage />,
    "emergency-and-critical-care": <DepartmentPage />,
    "pain-and-palliative-care": <DepartmentPage />,
    "all": <ServicesPage />,
    // "cardiology": <DepartmentPage />,
    // "hepatology": <DepartmentPage />,
    // "rheumatology": <DepartmentPage />,
    // "endocrinology": <DepartmentPage />,
    // "pulmonology": <DepartmentPage />,
    // "dermatology": <DepartmentPage />,
    // "ent": <DepartmentPage />,
    // "ophthalmology": <DepartmentPage />,
    // "internal-medicine": <DepartmentPage />,
    // "psychiatry": <DepartmentPage />,

    // Support Services
    pharmacy: <Pharmacy />,
    "blood-bank": <BloodBank />,
    "dietary": <Dietary />,
    "laundry": <Laundry />,
    "house-keeping": <HouseKeeping />,
    "Security": <Security />,
    ambulance: <Ambulance />,
    "support-services": <SupportServicesPage />,

    // Diagnostic Services
    "diagnostic-imaging": <DepartmentPage />,
    "dialysis": <DepartmentPage />,
    "radiology": <DepartmentPage />,
    "pathology": <DepartmentPage />,
    "microbiology": <DepartmentPage />,
    "biochemistry": <DepartmentPage />,
    "diagnostic-services": <DiagnosticServices />,

    // Specialized Services
    "specialized-services": <SpecializedServices />,

    // Administrative Services
    "admission-and-discharge": <AdmissionDischarge />,
    "billing-and-insurance": <Insurance />,
    "medical-records": <MedicalRecords />,


}






export const PatientCareMap = {
    emergency: <EmergencyCare />,
    "second-opinion": <SecondOpinion />,
    "in-patient": <InPatientFacilities />,
    "out-patient": <OutPatientClinic />,
    "health-checks": <HealthChecks />,
    "insurance": <Insurance />,
}

export const HealthLibraryMap = {
    "breast-cancer": <DynamicCancerTypesPage />,
    "prostate-cancer": <DynamicCancerTypesPage />,
    "lung-cancer": <DynamicCancerTypesPage />,
    "cervical-cancer": <DynamicCancerTypesPage />,
    "blood-cancer": <DynamicCancerTypesPage />,
    "adrenal-cancer": <DynamicCancerTypesPage />,
    "anal-cancer": <DynamicCancerTypesPage />,
    "bile-duct-cancer": <DynamicCancerTypesPage />,
    "bladder-cancer": <DynamicCancerTypesPage />,
    "bone-cancer": <DynamicCancerTypesPage />,
    "brain-cancer": <DynamicCancerTypesPage />,
    "breast-cancer-in-men": <DynamicCancerTypesPage />,
    "colon-rectal-cancer": <DynamicCancerTypesPage />,
    "endometrial-cancer": <DynamicCancerTypesPage />,
    "esophageal-cancer": <DynamicCancerTypesPage />,
    "eye-cancer": <DynamicCancerTypesPage />,
    "gallbladder-cancer": <DynamicCancerTypesPage />,
    "gastric-cancer": <DynamicCancerTypesPage />,
    "head-and-neck-cancer": <DynamicCancerTypesPage />,
    "kidney-cancer": <DynamicCancerTypesPage />,
    "laryngeal-cancer": <DynamicCancerTypesPage />,
    "liver-cancer": <DynamicCancerTypesPage />,
    "multiple-myeloma": <DynamicCancerTypesPage />,
    "neuroendocrine-tumors": <DynamicCancerTypesPage />,
    "non-hodgkin-lymphoma": <DynamicCancerTypesPage />,
    "oral-cancer": <DynamicCancerTypesPage />,
    "ovarian-cancer": <DynamicCancerTypesPage />,
    "pancreatic-cancer": <DynamicCancerTypesPage />,
    "penile-cancer": <DynamicCancerTypesPage />,
    "pituitary-tumors": <DynamicCancerTypesPage />,
    "salivary-gland-cancer": <DynamicCancerTypesPage />,
    "skin-cancer": <DynamicCancerTypesPage />,
    "stomach-cancer": <DynamicCancerTypesPage />,
    "uterine-cancer": <DynamicCancerTypesPage />,
    prevention: <CancerPrevention />,
    diagnosis: <DiagnosisAndStaging />,
    treatments: <TreatmentOptions />,
    nutrition: <NutritionAndWellness />,
    faqs: <Faqs />
}

export const CancerSurvivorsMap = {
    testimonials: <PatientTestimonials />,
    "victory-stories": <VictoryStories />,
    counseling: <CounselingAndMentalHealth />,
    rehab: <RehabilationPrograms />,
    volunteer: <Volunteer />,
    awareness: <AwarenessCampaigns />,
}
