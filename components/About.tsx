
import React from 'react';
import { ShieldCheck, Users, Globe2, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                alt="Corporate Office" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 via-transparent text-white">
                <p className="text-xl font-bold italic">"신뢰를 바탕으로 세계 최고의 기술력을 지향합니다."</p>
                <p className="mt-2 text-white/70">CEO 이기홍</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[#f15a24] font-extrabold tracking-widest uppercase text-sm mb-4 block">CEO Greeting</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              고객의 신뢰로 지켜온 <br />
              <span className="text-[#f15a24]">25년 기술의 가치</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
              <p>
                주식회사 기홍은 사료, 제분, 신재생에너지 화학 분야를 주력 업종으로 하여 지난 25여 년간 안정적인 성장을 이룩해 왔습니다. 
                이 과정에서 축적된 KNOW-HOW와 핵심 역량은 우리의 가장 큰 자산입니다.
              </p>
              <p>
                단순한 설비 제작을 넘어 공정의 자동화와 MIS 시스템 구축, R&D 투자를 통해 경영 효율화를 극대화하는 벤처기업으로서, 
                국내뿐만 아니라 중국, 필리핀, 베트남 등 글로벌 시장에서도 그 실력을 인정받고 있습니다.
              </p>
              <p>
                우리는 급변하는 시장 환경 속에서도 굴하지 않고, 끊임없는 기술 개발과 혁신적인 마인드로 새로운 시대의 힘찬 발걸음을 내디딜 것을 약속드립니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#f15a24] shrink-0">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">기술 안전성</h4>
                  <p className="text-sm text-gray-500">ISO 및 특허 다수 보유</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Globe2 />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">글로벌 네트워크</h4>
                  <p className="text-sm text-gray-500">동남아시아 5개국 진출</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
