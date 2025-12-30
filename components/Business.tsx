
import React from 'react';
import { BUSINESS_AREAS } from '../constants';

const Business: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#f15a24] font-extrabold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8 decoration-2">Business Sectors</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">사업영역</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            (주)기홍은 산업 현장의 효율을 극대화하는 최첨단 플랜트 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_AREAS.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                  {item.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#f15a24] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center text-[#f15a24] font-bold text-sm">
                  자세히 보기 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
