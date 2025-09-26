import React from "react";

function OurProcess() {
  const processSteps = [
    {
      id: 1,
      title: "Recruitment & Selection",
      description: [
        "Advertising to collect candidates",
        "Verifying candidate documents",
        "Checking Japanese language skills",
        "Conducting an interview between candidates and the hiring company",
      ],
      image: "/images/pc1.jpg",
    },
    {
      id: 2,
      title: "Training & Preparation",
      description: [
        "Health checks",
        "Explaining employment contracts",
        "Creating Japanese classes for the selected candidates while documentation processes are ongoing",
      ],
      image: "/images/pc2.jpg",
    },
    {
      id: 3,
      title: "Contracts & Legal Documentation",
      description: [
        "Submission of demand letters to the Myanmar government",
        "Assisting in preparing paperwork for COE (Certificate of Eligibility)",
        "Assisting in making contracts with the Ministry of Labor",
        "Applying to obtain the Overseas Workers Identity Card (OWIC card)",
      ],
      image: "/images/pc3.png",
    },
    {
      id: 4,
      title: "Visa & Immigration Process",
      description: [
        "Assisting with visa application, documentation, and submission",
        "Ensuring candidates meet immigration requirements",
      ],
      image: "/images/pc4.png",
    },
    {
      id: 5,
      title: "Travel Arrangements",
      description: [
        "Arranging flight tickets",
        "Getting departure approval from the relevant authority",
      ],
      image: "/images/pc5.png",
    },
    {
      id: 6,
      title: "Supporting During Stay in Japan",
      description: [
        "Cooperating between the Japan hiring company, the candidates, and the supervising company",
        "Continue our support to keep in touch with workers through calls, messaging apps, for their welfare and health",
        "Act as a bridge between the trainee and the Japanese company if language or cultural issues arise",
        "Provide assistance in case of workplace disputes, health concerns, or emergency situations",
      ],
      image: "/images/pc6.png",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFBEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className=" leading-[1.5] text-xl md:text-2xl lg:text-4xl font-bold  mb-6">
            Our detailed Process for working in Japan
          </h2>
          <p className="text-base lg:text-[24px] leading-relaxed text-[#1E1E1E]">
            As one of the most trusted overseas employment agencies, we can help
            ensure all the documentation for both the Technical Intern Training
            Program (TITP) and Specified Skilled Worker (SSW) is properly
            managed, coordinated, and compliant with both Myanmar and Japanese
            requirements. A step-by-step, detailed documentation process for
            sending Myanmar overseas workers under the Specified Skilled Worker
            (SSW) program and the Technical Intern Training Program (TITP) to
            Japan shall be observed as follows. Both programs need government
            approval, worker personal documents, language/skill certification,
            employment contracts, CoE + visa application, and post-arrival
            registration in Japan.
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              //   className="flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="space-y-4 mb-10 md:mb-5">
                <span className="inline-block bg-yellow-400 text-black font-semibold text-sm px-3 py-1 rounded-lg mb-2">
                  Step {step.id}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-black leading-tight">
                  {step.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                  <div className="">
                    <ul className="space-y-5">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-4 items-center">
                          <div className="bg-[#FFDE59] text-black w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0 mt-1">
                            {itemIndex + 1}
                          </div>
                          <span className="text-[#1E1E1E] font-medium max-w-md text-[20px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
