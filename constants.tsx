
import React from 'react';
import { Factory, Zap, Globe, Cog, ShieldCheck, Microscope } from 'lucide-react';
import { NavItem, BusinessItem, TimelineEvent, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '회사소개', href: '#about' },
  { label: '사업영역', href: '#business' },
  { label: '기술소개', href: '#tech' },
  { label: '제품안내', href: '#products' },
  { label: '실적현황', href: '#projects' },
  { label: '고객지원', href: '#contact' },
];

export const BUSINESS_AREAS: BusinessItem[] = [
  {
    id: 'plant',
    title: 'PLANT 사업부문',
    description: '사료, 제분, 신재생에너지 화학 플랜트 등 종합 엔지니어링 컨설팅 및 일괄 수주 설계를 수행합니다.',
    image: 'https://picsum.photos/id/191/800/600',
    icon: <Factory className="w-8 h-8" />
  },
  {
    id: 'energy',
    title: '에너지 & 환경',
    description: '폐기물 건조설비, 탄화설비 및 신재생에너지 자원화 설비 개발을 통해 지속가능한 미래를 만듭니다.',
    image: 'https://picsum.photos/id/401/800/600',
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 'milling',
    title: '정밀사업부문',
    description: 'Pellet Die, Roller Shell 등 핵심 소모성 부품의 국산화를 통해 최적의 생산 효율을 지원합니다.',
    image: 'https://picsum.photos/id/10/800/600',
    icon: <Cog className="w-8 h-8" />
  },
  {
    id: 'global',
    title: '글로벌 비즈니스',
    description: '중국, 필리핀, 베트남 등 해외 시장 진출을 통해 글로벌 플랜트 기술력을 세계에 알리고 있습니다.',
    image: 'https://picsum.photos/id/192/800/600',
    icon: <Globe className="w-8 h-8" />
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2019', event: '아프리카 우간다 배합사료공장 신축공사 및 네오베이스 갓난돼지 사료공장 수주' },
  { year: '2017', event: '캄보디아 법인 GiHong Farms Co., Ltd. 설립' },
  { year: '2016', event: 'ISO 14001:2004 / ISO 9001:2008 국제인증 획득' },
  { year: '2010', event: '신·재생에너지 전문기업 인증 (지식경제부)' },
  { year: '2005', event: '전문건설 기계설비면허 취득 및 제42회 무역의날 대통령표창 수상' },
  { year: '2002', event: '(주)기홍 법인 설립 및 산업기계 전문 제작 시작' },
];

export const PRODUCTS: Product[] = [
  {
    name: 'Taco Dryer (로타리 드라이어)',
    category: '건조설비',
    description: '대량의 산업 및 환경 폐기물을 고효율로 건조시키는 기홍의 핵심 기술 제품입니다.',
    features: ['열효율 극대화', '친환경 악취분해 연동', '자동 제어 시스템'],
    imageUrl: 'https://picsum.photos/id/183/600/400'
  },
  {
    name: 'Pellet Die & Roller Shell',
    category: '정밀부품',
    description: '독일 수입 GUN DRILL 기계를 통한 정밀 가공으로 최상의 내구성을 보장합니다.',
    features: ['고품질 크롬강 사용', '진공 열처리 공정', '빠른 기동특성'],
    imageUrl: 'https://picsum.photos/id/445/600/400'
  }
];
