import React from "react";

const AboutCompanySection = () => {
  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/about1.jpg"
                alt="Golden Myanmar HR team members in professional setting"
                className="w-full h-84 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/about2.jpg"
                alt="Golden Myanmar HR staff in office environment"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              ကျွန်တော်တို့ ကုမ္ပဏီအကြောင်း 
            </h2>

            <p className="text-base md:text-xl text-[#1e1e1e] leading-relaxed font-medium">
              ကျွန်တော်များ Golden Myanmar Human Resources Co., Ltd သည်
              ဂျပန်နိုင်ငံသို့ နည်းပညာ ၊ အတတ်ပညာအလုပ်သင်များနှင့် ကျွမ်းကျင်
              လုပ်သားများ ပေးပို့ခြင်းကို လုပ်ကိုင်လျှက်ရှိသော နိုင်ငံခြား
              အလုပ်အကိုင် ရှာဖွေရေးအေးဂျင်စီတစ်ခုဖြစ်ပါသည်။ ယခုအချိန် တွင်
              ကုမ္ပဏီသည် အလုပ်သမားရေးရာ ဝန်ကြီးဌာနထံမှ အေးဂျင်စီလိုင်စင်ကို
              လိုင်စင် အမှတ် (၃၀၄/၂၀၂၄) နှင့် ရရှိပြီး ဖြစ်ပါ သည်။  
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-2.jpg"
                alt="Business registration document"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-3.jpg"
                alt="Professional certification document"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-1.jpg"
                alt="Official license certificate from Ministry of Labor"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
