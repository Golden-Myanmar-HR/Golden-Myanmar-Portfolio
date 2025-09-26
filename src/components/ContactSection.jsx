import React from "react";

function ContactSection() {
  return (
    <div>
      {/* Header Section */}
      <section
        className="md:min-h-[80vh] min-h-[50vh] py-16 flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #F5E49D 0%, #FFFBEF 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 leading-[2]">
          <div className="">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              We warmly welcome Japanese manpower companies to partner with Us.
              We invite those seeking work abroad to join us for a brighter
              future.
            </h1>
            <button className="bg-[#F5E49D] text-black font-semibold py-3 px-8 rounded-xl hover:bg-[#e6d088] transition-colors">
              Contact Us Via Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
