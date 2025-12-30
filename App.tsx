
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import History from './components/History';
import Footer from './components/Footer';
import { ArrowUp, Cog, Shield, Zap } from 'lucide-react';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Core Values Section (Dynamic Intro) */}
        <section className="py-20 -mt-24 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-orange-900/5 flex flex-col items-center text-center border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-[#f15a24] mb-6">
                  <Cog size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">정밀 엔지니어링</h3>
                <p className="text-gray-500 text-sm">최첨단 설계 기술과 정밀 제작 공정으로 완벽한 품질을 실현합니다.</p>
              </div>
              <div className="bg-[#1e1b4b] p-10 rounded-3xl shadow-xl shadow-indigo-900/10 flex flex-col items-center text-center text-white transform md:scale-110">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 mb-6 backdrop-blur-md">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">혁신적 건조 기술</h3>
                <p className="text-white/60 text-sm">고효율 로타리 드라이어 및 탄화설비 분야의 독보적 경쟁력을 보유하고 있습니다.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-orange-900/5 flex flex-col items-center text-center border border-gray-100 hover:border-orange-200 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">품질 보증 시스템</h3>
                <p className="text-gray-500 text-sm">국제 규격의 품질 및 환경 경영 시스템 인증으로 신뢰할 수 있는 설비를 공급합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Business />

        {/* Featured Products Section */}
        <section id="products" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-xl">
                <span className="text-[#f15a24] font-extrabold tracking-widest uppercase text-sm mb-4 block">Product Showcase</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">핵심 제품 라인업</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 font-bold text-[#f15a24] group">
                전체 제품 보기 <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {PRODUCTS.map((product, idx) => (
                <div key={idx} className="bg-gray-50 rounded-[40px] overflow-hidden group border border-gray-100 p-4">
                  <div className="relative h-80 overflow-hidden rounded-[32px]">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, fIdx) => (
                        <span key={fIdx} className="bg-white border border-gray-200 px-4 py-1.5 rounded-xl text-xs font-semibold text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <History />

        {/* Call to Action Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-orange rounded-[48px] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-orange-200">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                  더 나은 플랜트 미래, <br />
                  기홍이 함께 설계합니다.
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-12">
                  기술적 문의부터 프로젝트 컨설팅까지, <br /> 
                  기홍의 전문 엔지니어링 팀이 신속하게 답변해 드립니다.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="tel:0314313800" className="bg-white text-[#f15a24] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    전화 상담: 031-431-3800
                  </a>
                  <a href="#contact" className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl border border-gray-800">
                    온라인 문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-14 h-14 bg-white shadow-2xl rounded-2xl flex items-center justify-center text-gray-900 border border-gray-100 hover:-translate-y-2 transition-all z-40 group"
      >
        <ArrowUp className="group-hover:text-[#f15a24] transition-colors" />
      </button>
    </div>
  );
};

export default App;
