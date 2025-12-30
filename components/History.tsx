
import React from 'react';
import { TIMELINE } from '../constants';

const History: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[#f15a24] font-extrabold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">기홍이 걸어온 <br />발자취입니다.</h2>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="text-6xl font-black text-[#f15a24] mb-2">2002</div>
                <p className="text-gray-500 font-medium">대한민국 산업 플랜트의 현대화를 꿈꾸며 첫 발을 내디뎠습니다.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="relative border-l-2 border-gray-100 pl-8 ml-4 md:ml-0 md:pl-12 space-y-12">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[49px] top-0 w-5 h-5 bg-white border-4 border-[#f15a24] rounded-full group-hover:scale-125 transition-transform z-10 shadow-lg shadow-orange-200"></div>
                  <div className="mb-2 inline-block px-3 py-1 bg-orange-50 text-[#f15a24] font-bold rounded-lg text-lg">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {item.event}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
