import React from "react";

const InterviewProcessSection = () => {
  const processes = [
    {
      badge: "Process 1",
      title: "Candidates Selection",
      description:
        "Candidate selection is conducted through our partner language schools, which meticulously select individuals who meet the industry-specific requirements in terms of physical condition and language proficiency. Agriculture Trainees Agriculture 4 Interns Trainees  ",
      image: "/images/recruitment-service.jpg",
      reverse: false,
    },
    {
      badge: "Process 2",
      title: "Pre-Interview Training",
      description:
        "Prior to the actual interview, candidates undergo comprehensive interview training to ensure they make a positive impression and navigate the interview process smoothly. This preparation guarantees that they are well-suited for the hiring company's requirements. ",
      image: "/images/technical-training.jpg",
      reverse: true,
    },
    {
      badge: "Process 3",
      title: (
        <span className="leading-[1.5]">
          Interview Process with
          <br />
          Supervising Organization
        </span>
      ),
      description:
        "If the supervising organization wishes to further assess candidates' proficiency and interview etiquette, our company facilitates a pre-interview between candidates and the supervising organization. ",
      image: "/images/skilled-workers.jpg",
      reverse: false,
    },
    {
      badge: "Process 4",
      title: (
        <span className="leading-[1.5]">
          Interview Process with
          <br />
          Implementing Organization
        </span>
      ),
      description:
        "The final interview with the implementing organization occurs only after candidates have successfully completed the aforementioned processes. This approach ensures a seamless interview process, fosters mutual trust, and strengthens partnerships between organizations",
      image: "/images/construction-trainees.jpg",
      reverse: true,
    },
    {
      badge: "Final Process",
      title: "Post Interview Process",
      description:
        "After candidate selection, our post interview processes include submitting candidates for demand approval and facilitating their departure to Japan. We also formalize mutual agreements with our Japanese partnership organizations regarding candidate acceptance and other required documents.",
      image: "/images/interview5.jpg",
      reverse: false,
    },
  ];

  return (
    <section className="bg-[#fffbef] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Interview Process
          </h2>

          {processes.map((process, index) => (
            <div key={index}>
              <div className="space-y-4 mb-10 md:mb-5">
                <span className="inline-block bg-yellow-400 text-black font-semibold text-sm px-3 py-1 rounded-full mb-2">
                  {process.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                  {process.title}
                </h3>
              </div>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16`}
              >
                <p className="order-2 md:order-1 text-base md:text-[20px] text-[#1e1e1e] leading-relaxed font-semibold">
                  {process.description}
                </p>
                <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-[330px] object-cover block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewProcessSection;
