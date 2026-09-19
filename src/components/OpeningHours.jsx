import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Clock, CheckCircle, AlertCircle, Calendar, Phone, Sparkles } from 'lucide-react';

export const OpeningHours = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const checkSchedule = () => {
      // Calculate current IST time (UTC+5:30)
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utcTime + (3600000 * 5.5));
      
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const openMinutes = restaurantInfo.timings.openHour * 60 + restaurantInfo.timings.openMinute; // 10:30 AM -> 630
      const closeMinutes = restaurantInfo.timings.closeHour * 60 + restaurantInfo.timings.closeMinute; // 11:30 PM -> 1410

      setIsOpen(totalMinutes >= openMinutes && totalMinutes < closeMinutes);

      const timeFormatted = istTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTimeStr(`${timeFormatted} IST`);
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  const daysOfWeek = [
    { en: "Monday", ta: "திங்கள்", hours: "10:30 AM – 11:30 PM" },
    { en: "Tuesday", ta: "செவ்வாய்", hours: "10:30 AM – 11:30 PM" },
    { en: "Wednesday", ta: "புதன்", hours: "10:30 AM – 11:30 PM" },
    { en: "Thursday", ta: "வியாழன்", hours: "10:30 AM – 11:30 PM" },
    { en: "Friday", ta: "வெள்ளி", hours: "10:30 AM – 11:30 PM" },
    { en: "Saturday", ta: "சனி", hours: "10:30 AM – 11:30 PM" },
    { en: "Sunday", ta: "ஞாயிறு", hours: "10:30 AM – 11:30 PM" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md text-left">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DFBE7A]/20 text-[#78350F] text-[11px] font-bold tracking-wider uppercase mb-1">
            <Clock className="w-3 h-3 text-[#C89D4B]" />
            <span>{t.timings.badge}</span>
          </div>
          <h3 className="font-serif font-black text-2xl text-[#2A1710]">
            {t.timings.heading}
          </h3>
          <p className="text-xs text-stone-500 font-medium">
            {restaurantInfo.name}
          </p>
        </div>

        {/* Live Dynamic Open / Closed Status Badge */}
        <div className="text-right">
          {isOpen ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-800 text-xs font-bold tracking-wide animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{t.timings.statusOpen}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-600 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-stone-400"></span>
              <span>{t.timings.statusClosed}</span>
            </div>
          )}
          {currentTimeStr && (
            <p className="text-[10px] text-stone-400 mt-1">{currentTimeStr}</p>
          )}
        </div>
      </div>

      {/* Main Timing Highlight */}
      <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#C89D4B]/30 mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-stone-600 font-medium uppercase tracking-wider">
            Daily Hours
          </p>
          <p className="font-serif font-extrabold text-xl sm:text-2xl text-[#2A1710]">
            {language === 'ta' ? restaurantInfo.timings.displayTimeTa : restaurantInfo.timings.displayTime}
          </p>
        </div>
        <div className="text-right text-xs text-emerald-800 font-semibold flex items-center gap-1">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>7 Days Open</span>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="space-y-2 mb-6 text-sm">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0 text-stone-700">
            <span className="font-medium text-stone-800">{language === 'ta' ? day.ta : day.en}</span>
            <span className="text-stone-600 font-mono text-xs">{day.hours}</span>
          </div>
        ))}
      </div>

      {/* Note & Direct Call */}
      <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <p className="font-medium">{language === 'ta' ? restaurantInfo.timings.noteTa : restaurantInfo.timings.note}</p>
          <a href={restaurantInfo.contact.telLink} className="font-bold underline text-amber-950 mt-0.5 inline-block">
            Call 093616 66099 to confirm today's schedule
          </a>
        </div>
      </div>
    </div>
  );
};
