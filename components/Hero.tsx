
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold mb-8 border border-white/20">
            <span className="bg-gradient-orange w-2 h-2 rounded-full animate-pulse"></span>
            Since 2002 | 25년의 기술 축적
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
            Engineering the <br />
            <span className="text-gradient">Future of Plants.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light">
            (주)기홍은 사료, 제분, 신재생에너지 화학 플랜트 분야의 핵심 기술을 보유한 글로벌 엔지니어링 리더입니다. 
            숙련된 KNOW-HOW로 고객의 가치를 실현합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-gradient-orange text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              사업영역 확인하기 <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              <Play size={20} className="fill-white" /> 홍보영상 보기
            </button>
          </div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-12 right-6 hidden lg:flex gap-12 bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-1">25+</div>
          <div className="text-white/60 text-sm">기술 역사</div>
        </div>
        <div className="w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-1">100+</div>
          <div className="text-white/60 text-sm">글로벌 프로젝트</div>
        </div>
        <div className="w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-1">50+</div>
          <div className="text-white/60 text-sm">특허 및 인증</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
