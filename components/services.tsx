"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ServicesComponentMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      name: 'Web Development',
      image: '/services/web-development.png'
    },
    {
      name: 'App Development',
      image: '/services/app-development.png'
    },
    {
      name: 'AI Applications',
      image: '/services/ai-applications.png'
    },
    {
      name: 'Data Driven Products',
      image: '/services/data-driven-products.png'
    },
    {
      name: 'Blockchain Technology',
      image: '/services/blockchain-technology.png'
    },
    {
      name: 'UI/UX',
      image: '/services/ui-ux.png'
    },
    {
      name: 'Logo Designing',
      image: '/services/logo-designing.png'
    },
    {
      name: 'Rapid Prototyping and MVPs',
      image: '/services/rapid-prototyping.png'
    },
    {
      name: 'Digital Marketing & SEO',
      image: '/services/digital-marketing.png'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-[#f0f0f0] relative overflow-hidden">
      {/* Top dashed border */}
      <div className="absolute top-0 left-0 w-full border-t border-dashed border-slate-300" />
      
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-3">
          <h2 
            className={cn(
              "text-2xl md:text-3xl font-bold mb-6 leading-tight text-slate-900 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Solutions Tailored for Your Growth
          </h2>
          
          <p 
            className={cn(
              "text-lg text-slate-600 transition-all duration-700 ease-out delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Discover our full-service offerings — crafted to deliver reliability, scalability,
            and results
          </p>
        </div>

        {/* Bottom dashed separator */}
        <div className="mb-16 border-t border-dashed border-slate-300" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-46 gap-y-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="mb-0 w-28 h-32 relative flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={192}
                  height={128}
                  className="object-contain drop-shadow-md"
                />
              </div>
              
              {/* Service Name */}
              <h6 className="text-l md:text-l font-semibold text-slate-900 whitespace-nowrap">
                {service.name}
              </h6>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesComponentMinimal;