
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-black tracking-tighter">GIHONG</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              혁신적인 기술력과 최고의 품질로 고객과 함께 동반 성장하는 글로벌 리딩 기업이 되겠습니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f15a24] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f15a24] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f15a24] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#business" className="hover:text-white transition-colors">사업영역</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">제품안내</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">주요공사사진</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Customer Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용정보</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-[#f15a24] shrink-0" size={20} />
                <span className="text-gray-400">경기도 화성시 비봉면 현대기아로 825-15</span>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="text-[#f15a24] shrink-0" size={20} />
                <span className="text-gray-400">031-431-3800</span>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="text-[#f15a24] shrink-0" size={20} />
                <span className="text-gray-400">hdkim600@naver.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 GIHONG. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Sitemap</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
