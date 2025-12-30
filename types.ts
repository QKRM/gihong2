import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessItem {
  id: string;
  title: string;
  description: string;
  image: string;
  // Fix: Added React import to define the React namespace for React.ReactNode
  icon: React.ReactNode;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Product {
  name: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
}