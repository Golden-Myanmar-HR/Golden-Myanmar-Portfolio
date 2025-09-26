import React from "react";

const PartnershipSection = () => {
  return (
    <section className="bg-[#fffbef] py-20">
      <div className="px-4 ms-0 lg:px-0 lg:ms-42">
        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-10">
          Our Partnership JAY
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className="space-y-8">
            <p className="text-base md:text-xl font-semibold text-[#1e1e1e] lg:leading-[2] font-medium">
              We have established strategic partnerships with JAY (APAN -ASIA
              YOUTH EXCHANGE ASSOCIATION) with reputable Japanese language
              schools in Myanmar to streamline and expedite the recruitment
              process for skilled workers and intern trainees. By sourcing
              candidates directly from these language schools, we ensure that
              our candidates possess the necessary language proficiency and
              communication skills. This approach significantly reduces the
              language training period, as candidates are already proficient in
              Japanese prior to meeting the demand requirements.
            </p>
          </div>

          <div className="rounded-l-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <img
              src="/images/partnership.jpg"
              alt="Our partnership with JAY"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
