import { Doctor } from "@/types";

  // Sample doctor data
export  const doctors: Doctor[] = [
    {
        id: 12,
        name: "Dr. Alok Tiwari",
        qualification: "Chief Surgical Oncologist, MBBS (Gold Medalist), MS (Gen Surgery) KGMU LucknowDNB, Dip MAS daVinciXi Certified Robotic Onco Surgeon, Surgical Oncology, ESSO (Breast Oncoplasty) FMAS, FALS (Colorectal)",
        department: "Surgical Oncology",
        experience: " ",
        image: "/doctors/dr-alok-tiwari.webp",
        availability: [
          { day: "Mon", time: "8:00 AM - 4:00 PM" },
          { day: "Tue", time: "8:00 AM - 4:00 PM" },
          { day: "Wed", time: "8:00 AM - 4:00 PM" },
          { day: "Fri", time: "8:00 AM - 4:00 PM" }
        ],
        isSenior: true
      },
      {
        id: 13,
        name: "Dr. Saurabh Mishra",
        qualification: "Medical Oncologist & Haemat Oncologist, Director Synergy Super Speciality Hospital & Cancer Institue, MBBS (KGMU), MD (internal Medicine) ECMO DNB",
        department: "Medical Oncology",
        experience: " ",
        image: "/doctors/dr-saurabh-mishra.webp",
        availability: [
          { day: "Mon", time: "8:00 AM - 4:00 PM" },
          { day: "Tue", time: "8:00 AM - 4:00 PM" },
          { day: "Wed", time: "8:00 AM - 4:00 PM" },
          { day: "Fri", time: "8:00 AM - 4:00 PM" }
        ],
        isSenior: true
      },
      {
        id: 14,
        name: "Dr. Anjali Jain",
        qualification: "MBBS, MD ( General Physician) , GENERAL MEDICINE",
        department: "Gynecology & Obstetrics",
        experience: " ",
        image: "/doctors/dr-anjali-jain.webp",
        availability: [
          { day: "Mon", time: "8:00 AM - 4:00 PM" },
          { day: "Tue", time: "8:00 AM - 4:00 PM" },
          { day: "Wed", time: "8:00 AM - 4:00 PM" },
          { day: "Fri", time: "8:00 AM - 4:00 PM" }
        ],
        isSenior: true
      },
      {
        id: 9,
        name: "Dr. Harshit Mishra",
        qualification: "M.B.B.S MD,PDAF(Neuroanesthesia),Ex Seniorfellow Resident SGPGI LKO",
        department: "Anesthesia",
        experience: "8 Years,( 3Years as a Resident & 5 years As a Consultant)",
        image: "/doctors/dr-harshit-mishra.webp",
        availability: [
          { day: "Mon", time: "8:00 AM - 4:00 PM" },
          { day: "Tue", time: "8:00 AM - 4:00 PM" },
          { day: "Wed", time: "8:00 AM - 4:00 PM" },
          { day: "Fri", time: "8:00 AM - 4:00 PM" }
        ],
        isSenior: false
      },
      {
          id: 6,
          name: "Dr. Vishrut Bharti",
          qualification: "M.B.B.S M.S (General Surgery) MCH (Urologist) Gold Medalist",
          department: "Urology",
          experience: "12 years",
          image: "/doctors/dr-vishrut-bharti.webp",
          availability: [
            { day: "Mon", time: "8:00 AM - 4:00 PM" },
            { day: "Tue", time: "8:00 AM - 4:00 PM" },
            { day: "Wed", time: "8:00 AM - 4:00 PM" },
            { day: "Fri", time: "8:00 AM - 4:00 PM" }
          ],
          isSenior: false
        },
            {
          id: 15,
          name: "Dr. Tarik Anwar",
          qualification: "BDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK ONCOLOGY",
          department: "Head & Neck",
          experience: "1.5 years",
          image: "/doctors/dr-tarik-anwar.png",
          availability: [
            { day: "Mon", time: "8:00 AM - 4:00 PM" },
            { day: "Tue", time: "8:00 AM - 4:00 PM" },
            { day: "Wed", time: "8:00 AM - 4:00 PM" },
            { day: "Fri", time: "8:00 AM - 4:00 PM" }
          ],
          isSenior: false
        },
        {
          id: 16,
          name: "Dr. Vishal Mishra",
          qualification: "BDS, MDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK",
          department: "Head & Neck",
          experience: "1 year",
          image: "/doctors/dr-vishal-mishra.png",
          availability: [
            { day: "Mon", time: "8:00 AM - 4:00 PM" },
            { day: "Tue", time: "8:00 AM - 4:00 PM" },
            { day: "Wed", time: "8:00 AM - 4:00 PM" },
            { day: "Fri", time: "8:00 AM - 4:00 PM" }
          ],
          isSenior: false
        },
    {
      id: 2,
      name: "Dr. Anil Srivastava",
      qualification: "M.B.B.S. MS ORTHO",
      department: "Orthopedics",
      experience: "10 years",
      image: "/doctors/dr-anil-srivastava.webp",
      availability: [
        { day: "Tue", time: "10:00 AM - 6:00 PM" },
        { day: "Thu", time: "10:00 AM - 6:00 PM" },
        { day: "Sat", time: "9:00 AM - 2:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 3,
      name: "Dr. Tripurari Pandey",
      qualification: "M.B.B.S, MCH Neuro Surgeon",
      department: "Neurology",
      experience: "10 years",
      image: "/doctors/dr-tripurari-pandey.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 4,
      name: "Dr. Anurag Singh",
      qualification: "M.B.B.S, MS, MCH Neuro Surgeon",
      department: "Neurology",
      experience: "10 years",
      image: "/doctors/dr-anurag-singh.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 5,
      name: "Dr. Rohit Kumar Singh",
      qualification: "M.B.B.S, M.S, Mch. Urology, Davinci certified Robotic Uro Surgeon",
      department: "Urology",
      experience: "12 years",
      image: "/doctors/dr-rohit-kumar-singh.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },

    {
      id: 7,
      name: "Dr. Upendra Gupta",
      qualification: "M.B.B.S , MD, DM-(GASTROENTEROLOGY)",
      department: "Gastroenterology",
      experience: "7 years",
      image: "/doctors/dr-upendra-gupta.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 8,
      name: "Dr. AP Shahi",
      qualification: "M.B.B.S, DCH,MIAP ,Pediatrician & Neonatologist Fellowship ,POPN Boston(USA)",
      department: "Pediatrics",
      experience: "15 years",
      image: "/doctors/dr-ap-shahi.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: true
    },

    {
      id: 10,
      name: "Dr. Amritansh Pandey",
      qualification: "M.B.B.S, MD-Anesthesia",
      department: "Anesthesia ",
      experience: "10 years",
      image: "/doctors/dr-amritansh-pandey.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 11,
      name: "Dr. Vijay Pandey",
      qualification: "MBBS, MD ( General Physician) , GENERAL MEDICINE",
      department: "General Physician",
      experience: "30 years",
      image: "/doctors/dr-vijay-pandey.png",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: true
    },

    {
      id: 17,
      name: "Dr. Harshit Mishra",
      qualification: "M.B.B.S MD,PDAF(Neuroanesthesia),Ex Seniorfellow Resident SGPGI LKO",
      department: "Emergency & Critical Care",
      experience: "8 Years,( 3Years as a Resident & 5 years As a Consultant)",
      image: "/doctors/dr-harshit-mishra.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 18,
      name: "Dr. D.P. Singh",
      qualification: "M.B.B.S, MS GENERAL SURGERY, DEPARTMENT OF GI SURGERY",
      department: "General Surgery",
      experience: "16 years",
      image: "/doctors/dr-dp-singh.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: true
    },
    {
      id: 19,
      name: "Dr. Anindya Biswas",
      qualification: "MBBS, DNB,DrNB(NEFROLOGY), DEPARTMENT OF NEFROLOGY",
      department: "Nephrology",
      experience: "15+",
      image: "/doctors/dr-anindya-biswas.webp",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: true
    },
  ]
