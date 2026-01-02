"use client";

import { useState } from "react";

export default function PanchangPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Sample data - in production, this would come from an API
  const panchangData = {
    date: "Friday, January 3, 2026",
    hinduDate: "Pausha Shukla Chaturthi, Vikram Samvat 2082",
    tithi: { name: "Shukla Chaturthi", time: "Till 09:45 PM", progress: 65 },
    nakshatra: { name: "Rohini", time: "Till 11:23 AM", progress: 40 },
    yoga: { name: "Shukla", time: "Till 04:15 PM", progress: 55 },
    karana: { name: "Bava", time: "Till 10:30 AM", progress: 35 },
    paksha: "Shukla Paksha",
    vaara: "Shukravara (Friday)",
    masa: "Pausha",
    ritu: "Hemanta",
    sunrise: "7:12 AM",
    sunset: "5:48 PM",
    moonrise: "10:23 AM",
    moonset: "11:45 PM",
    auspicious: [
      { name: "Abhijit Muhurat", time: "12:05 PM - 12:52 PM", duration: "47 min", quality: "Best" },
      { name: "Amrit Kalam", time: "08:15 AM - 09:50 AM", duration: "1h 35m", quality: "Excellent" },
      { name: "Brahma Muhurat", time: "05:40 AM - 06:28 AM", duration: "48 min", quality: "Sacred" },
      { name: "Vijaya Muhurat", time: "02:18 PM - 03:05 PM", duration: "47 min", quality: "Good" },
    ],
    inauspicious: [
      { name: "Rahu Kaal", time: "10:30 AM - 12:00 PM", duration: "1h 30m", severity: "High" },
      { name: "Yamaganda", time: "03:00 PM - 04:30 PM", duration: "1h 30m", severity: "Medium" },
      { name: "Gulika Kaal", time: "07:30 AM - 09:00 AM", duration: "1h 30m", severity: "Medium" },
      { name: "Dur Muhurtam", time: "08:42 AM - 09:30 AM", duration: "48 min", severity: "Low" },
    ],
    festivals: ["Pausha Chaturthi", "Vinayaka Chaturthi"],
    sunSign: "Sagittarius (Dhanu)",
    moonSign: "Taurus (Vrishabha)",
    moonPhase: 25, // percentage of illumination
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F0] via-[#FFFBF8] to-[#F0F4FF]">
      {/* Spacer for header */}
      <div className="h-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with decorative elements */}
        <div className="mb-8 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF7B60]/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-2 right-10 w-16 h-16 bg-[#FFB59F]/20 rounded-full blur-xl"></div>
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#1a1a2e] via-[#FF7B60] to-[#1a1a2e] bg-clip-text text-transparent mb-2">
              Daily Panchang
            </h1>
            <p className="text-sm text-[#666] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#FF7B60]"></span>
              Hindu Vedic Calendar & Auspicious Timings
            </p>
          </div>
        </div>

        {/* Date Selector with enhanced styling */}
        <div className="mb-8 flex items-center gap-3 flex-wrap">
          <div className="relative group">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-5 py-3 rounded-2xl border-2 border-[#FFB59F]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[#FF7B60] focus:ring-4 focus:ring-[#FF7B60]/10 text-[#333] text-sm font-medium transition-all duration-300 hover:border-[#FF7B60]/50 hover:shadow-lg hover:shadow-[#FF7B60]/5"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF7B60]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <button
            onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF7B60] to-[#FF9F87] text-white text-sm font-semibold hover:shadow-xl hover:shadow-[#FF7B60]/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Today
          </button>
          <button
            onClick={() => {
              const date = new Date(selectedDate);
              date.setDate(date.getDate() - 1);
              setSelectedDate(date.toISOString().split('T')[0]);
            }}
            className="p-3 rounded-2xl border-2 border-[#FFB59F]/30 bg-white/80 backdrop-blur-sm hover:bg-[#FFF8F5] hover:border-[#FF7B60]/50 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <svg className="w-5 h-5 text-[#FF7B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              const date = new Date(selectedDate);
              date.setDate(date.getDate() + 1);
              setSelectedDate(date.toISOString().split('T')[0]);
            }}
            className="p-3 rounded-2xl border-2 border-[#FFB59F]/30 bg-white/80 backdrop-blur-sm hover:bg-[#FFF8F5] hover:border-[#FF7B60]/50 transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <svg className="w-5 h-5 text-[#FF7B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Main Date Banner - Enhanced */}
        <div className="mb-8 rounded-3xl bg-gradient-to-br from-[#FF7B60] via-[#FF9F87] to-[#FFB59F] p-8 relative overflow-hidden group shadow-2xl shadow-[#FF7B60]/20 hover:shadow-[#FF7B60]/40 transition-all duration-500">
          {/* Animated background patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a1a2e]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Today</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {panchangData.date}
              </h2>
              <p className="text-sm text-white/90 font-medium">
                {panchangData.hinduDate}
              </p>
              {panchangData.festivals.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {panchangData.festivals.map((festival, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl bg-white/90 text-[#FF7B60] text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      ✨ {festival}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              {[
                { label: "Sunrise", value: panchangData.sunrise, gradient: "from-yellow-400 to-orange-500" },
                { label: "Sunset", value: panchangData.sunset, gradient: "from-orange-500 to-red-500" },
                { label: "Moonrise", value: panchangData.moonrise, gradient: "from-blue-400 to-purple-500" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default min-w-[90px] group/card"
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                  </div>
                  <p className="text-xs text-[#666] uppercase tracking-wider mb-1 font-semibold">{item.label}</p>
                  <p className="text-lg font-bold text-[#1a1a2e]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panchang Grid - Enhanced */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Panchang Elements with Progress Bars */}
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-[#FFB59F]/20">
            <div className="bg-gradient-to-r from-[#FF7B60]/10 via-[#FFB59F]/5 to-transparent p-5 border-b border-[#FFB59F]/20">
              <h3 className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7B60]"></span>
                Panchang Details
              </h3>
            </div>
            <div className="p-5 space-y-5">
              {[
                { label: "Tithi", ...panchangData.tithi, icon: "🌙", color: "from-purple-500 to-pink-500" },
                { label: "Nakshatra", ...panchangData.nakshatra, icon: "⭐", color: "from-blue-500 to-cyan-500" },
                { label: "Yoga", ...panchangData.yoga, icon: "🧘", color: "from-green-500 to-emerald-500" },
                { label: "Karana", ...panchangData.karana, icon: "⚡", color: "from-orange-500 to-red-500" },
              ].map((item, index) => (
                <div key={index} className="group/item cursor-default">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold text-[#666] group-hover/item:text-[#FF7B60] transition-colors">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#1a1a2e]">{item.name}</p>
                      <p className="text-xs text-[#999] font-medium">{item.time}</p>
                    </div>
                  </div>
                  <div className="relative h-2 bg-gradient-to-r from-[#f0f0f0] to-[#e8e8e8] rounded-full overflow-hidden shadow-inner">
                    <div 
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-700 ease-out shadow-lg`}
                      style={{ width: `${item.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-xs text-[#999] mt-1 text-right font-medium">{item.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Info */}
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#FFB59F]/20">
            <div className="bg-gradient-to-r from-[#FF7B60]/10 via-[#FFB59F]/5 to-transparent p-5 border-b border-[#FFB59F]/20">
              <h3 className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7B60]"></span>
                Calendar Information
              </h3>
            </div>
            <div className="p-5 space-y-2">
              {[
                { label: "Vaara", value: panchangData.vaara, icon: "📅" },
                { label: "Paksha", value: panchangData.paksha, icon: "🌗" },
                { label: "Masa", value: panchangData.masa, icon: "📆" },
                { label: "Ritu", value: panchangData.ritu, icon: "🍂" },
                { label: "Sun Sign", value: panchangData.sunSign, icon: "☀️" },
                { label: "Moon Sign", value: panchangData.moonSign, icon: "🌙" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FFF8F5] hover:to-transparent transition-all duration-300 cursor-default group/item border border-transparent hover:border-[#FFB59F]/20"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-sm text-[#666] group-hover/item:text-[#444] font-medium transition-colors">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-[#1a1a2e]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Moon Phase Card - Enhanced */}
          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#1a1a2e] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
            {/* Animated stars background */}
            <div className="absolute inset-0">
              {[
                { top: '15%', left: '20%', delay: '0s', opacity: 0.4 },
                { top: '25%', left: '80%', delay: '0.5s', opacity: 0.6 },
                { top: '35%', left: '15%', delay: '1s', opacity: 0.5 },
                { top: '45%', left: '85%', delay: '1.5s', opacity: 0.7 },
                { top: '55%', left: '10%', delay: '2s', opacity: 0.4 },
                { top: '65%', left: '90%', delay: '2.5s', opacity: 0.6 },
                { top: '75%', left: '25%', delay: '0.3s', opacity: 0.5 },
                { top: '85%', left: '75%', delay: '0.8s', opacity: 0.7 },
                { top: '10%', left: '50%', delay: '1.2s', opacity: 0.4 },
                { top: '20%', left: '40%', delay: '1.7s', opacity: 0.6 },
                { top: '30%', left: '60%', delay: '2.2s', opacity: 0.5 },
                { top: '40%', left: '30%', delay: '0.6s', opacity: 0.7 },
                { top: '50%', left: '70%', delay: '1.1s', opacity: 0.4 },
                { top: '60%', left: '45%', delay: '1.6s', opacity: 0.6 },
                { top: '70%', left: '55%', delay: '2.1s', opacity: 0.5 },
                { top: '80%', left: '35%', delay: '0.4s', opacity: 0.7 },
                { top: '90%', left: '65%', delay: '0.9s', opacity: 0.4 },
                { top: '5%', left: '95%', delay: '1.4s', opacity: 0.6 },
                { top: '95%', left: '5%', delay: '1.9s', opacity: 0.5 },
                { top: '12%', left: '88%', delay: '2.4s', opacity: 0.7 },
              ].map((star, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: star.top,
                    left: star.left,
                    animationDelay: star.delay,
                    opacity: star.opacity,
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative p-5 border-b border-white/10">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB59F]"></span>
                Moon Phase
              </h3>
            </div>
            <div className="relative flex flex-col items-center justify-center py-8">
              {/* Enhanced Moon visualization */}
              <div className="relative w-32 h-32 mb-6">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFE8A8]/30 to-[#FFD54F]/30 blur-xl animate-pulse"></div>
                {/* Moon shadow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3a3a4e] to-[#2a2a3e] shadow-2xl"></div>
                {/* Moon light */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF4E6] via-[#FFE8A8] to-[#FFD54F] shadow-2xl transition-all duration-700"
                  style={{ 
                    clipPath: `inset(0 ${100 - panchangData.moonPhase}% 0 0)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                </div>
                {/* Moon crater effects */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-black/20"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-black/15"></div>
                {/* Ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-[#FFB59F]/50 transition-all duration-500"></div>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-1">{panchangData.moonPhase}%</p>
                <p className="text-sm text-white/70 mb-4">Illumination</p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB59F]/20 to-[#FF7B60]/20 backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#FFB59F]"></span>
                  <span className="text-sm font-semibold text-white">Waxing Crescent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Muhurat Section - Enhanced */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Shubh Muhurat */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-[#22C55E]/20 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e]">Shubh Muhurat</h3>
                <p className="text-xs text-[#666]">Auspicious Timings</p>
              </div>
            </div>
            <div className="space-y-3">
              {panchangData.auspicious.map((timing, index) => (
                <div
                  key={index}
                  className="relative p-4 rounded-2xl transition-all duration-300 cursor-default group hover:scale-[1.02] overflow-hidden bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] border-2 border-[#22C55E]/30 hover:border-[#22C55E]/60 hover:shadow-xl hover:shadow-[#22C55E]/10"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 rounded-bl-full"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-bold text-[#1a1a2e] flex-1">{timing.name}</h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 text-[#16A34A]">
                        {timing.quality}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#22C55E]/20 text-[#16A34A]">
                        ⏱ {timing.duration}
                      </span>
                      <span className="text-sm font-bold text-[#16A34A]">{timing.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ashubh Kaal */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-[#EF4444]/20 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#DC2626] shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e]">Ashubh Kaal</h3>
                <p className="text-xs text-[#666]">Inauspicious Timings</p>
              </div>
            </div>
            <div className="space-y-3">
              {panchangData.inauspicious.map((timing, index) => (
                <div
                  key={index}
                  className="relative p-4 rounded-2xl transition-all duration-300 cursor-default group hover:scale-[1.02] overflow-hidden bg-gradient-to-br from-[#FEF2F2] to-[#FECACA] border-2 border-[#EF4444]/30 hover:border-[#EF4444]/60 hover:shadow-xl hover:shadow-[#EF4444]/10"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#EF4444]/10 rounded-bl-full"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-bold text-[#1a1a2e] flex-1">{timing.name}</h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 text-[#DC2626]">
                        {timing.severity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EF4444]/20 text-[#DC2626]">
                        ⏱ {timing.duration}
                      </span>
                      <span className="text-sm font-bold text-[#DC2626]">{timing.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Festival Calendar */}
        <div className="bg-gradient-to-br from-white via-[#FFF8F5] to-white rounded-3xl shadow-2xl p-8 mb-8 border border-[#FFB59F]/30 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFB59F]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FF9F87]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FF7B60] via-[#FF9F87] to-[#FFB59F] shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] bg-clip-text text-transparent">Festival Calendar</h3>
                  <p className="text-sm text-[#666] font-medium mt-1">January 2026 • 31 Days</p>
                </div>
              </div>
              
              {/* Month Navigation (decorative for now) */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-xl bg-white border border-[#FFB59F]/30 hover:border-[#FF7B60] hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-[#666] group-hover:text-[#FF7B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 rounded-xl bg-white border border-[#FFB59F]/30 hover:border-[#FF7B60] hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-[#666] group-hover:text-[#FF7B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-3 mb-4">
                  {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, idx) => (
                    <div key={day} className={`text-center py-3 rounded-xl ${idx === 0 || idx === 6 ? 'bg-gradient-to-br from-[#FF7B60]/10 to-[#FFB59F]/10' : 'bg-gradient-to-br from-[#FFF8F5] to-white'}`}>
                      <div className={`text-xs font-bold ${idx === 0 || idx === 6 ? 'text-[#FF7B60]' : 'text-[#666]'}`}>{day}</div>
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-3">
                  {/* Empty cells for days before month starts (January 1, 2026 is Thursday) */}
                  {[...Array(4)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 opacity-30"></div>
                  ))}
                  
                  {/* Calendar days with festivals */}
                  {(() => {
                    const festivalsByDate: { [key: number]: string[] } = {
                      1: ["Pradosh Vrat", "Rohini Vrat"],
                      3: ["Anvadhan", "Arudra Darshan", "Paush Purnima", "Paush Purnima Vrat", "Shakambhari Purnima"],
                      4: ["Ishti", "Magha Begins *North"],
                      6: ["Sakat Chauth", "Sankashti Chaturthi"],
                      10: ["Kalashtami", "Masik Krishna Janmashtami", "Swami Vivekananda Jayanti"],
                      12: ["National Youth Day", "Swami Vivekananda Jayanti"],
                      14: ["Bhogi Pandigai", "Lohri", "Shattila Ekadashi"],
                      15: ["Magh Bihu", "Makara Sankranti", "Makaravilakku", "Pongal", "Uttarayana"],
                      16: ["Mattu Pongal", "Meru Trayodashi", "Pradosh Vrat"],
                      17: ["Masik Shivaratri"],
                      18: ["Anvadhan", "Darsha Amavasya", "Magha Amavasya", "Mauni Amavas", "Thai Amavasai"],
                      19: ["Ishti", "Magha Navratri"],
                      20: ["Chandra Darshan"],
                      22: ["Ganesha Jayanti", "Vinayaka Chaturthi"],
                      23: ["Subhas Chandra Bose Jayanti", "Vasant Panchami"],
                      24: ["Skanda Sashti"],
                      25: ["Bhanu Saptami", "Brahma Savarni Manvadi", "Narmada Jayanti", "Ratha Saptami"],
                      26: ["Bhishma Ashtami", "Masik Durgashtami", "Republic Day"],
                      27: ["Masik Karthigai"],
                      29: ["Jaya Ekadashi", "Rohini Vrat"],
                      30: ["Bhishma Dwadashi", "Gandhi Punyatithi", "Pradosh Vrat"],
                    };

                    return [...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const festivals = festivalsByDate[day] || [];
                      const isToday = day === 3;
                      const hasFestivals = festivals.length > 0;
                      const isWeekend = (i + 4) % 7 === 0 || (i + 4) % 7 === 6; // Thursday is 1st

                      // Assign different color schemes to different festival days
                      const colorSchemes = [
                        { bg: 'from-[#FFE5F1] via-[#FFF0F7] to-[#FFF5FA]', border: 'border-[#FF69B4]/40', hover: 'hover:border-[#FF1493]', shadow: 'hover:shadow-[#FF69B4]/30', dot: 'from-[#FF69B4] to-[#FF1493]', text: 'text-[#FF1493]', badge: 'from-[#FF69B4] to-[#FF1493]' }, // Pink
                        { bg: 'from-[#E0F2FE] via-[#F0F9FF] to-[#F5FBFF]', border: 'border-[#3B82F6]/40', hover: 'hover:border-[#2563EB]', shadow: 'hover:shadow-[#3B82F6]/30', dot: 'from-[#3B82F6] to-[#2563EB]', text: 'text-[#2563EB]', badge: 'from-[#3B82F6] to-[#2563EB]' }, // Blue
                        { bg: 'from-[#DCFCE7] via-[#F0FDF4] to-[#F5FEF8]', border: 'border-[#10B981]/40', hover: 'hover:border-[#059669]', shadow: 'hover:shadow-[#10B981]/30', dot: 'from-[#10B981] to-[#059669]', text: 'text-[#059669]', badge: 'from-[#10B981] to-[#059669]' }, // Green
                        { bg: 'from-[#FEF3C7] via-[#FEF9E7] to-[#FFFCF0]', border: 'border-[#F59E0B]/40', hover: 'hover:border-[#D97706]', shadow: 'hover:shadow-[#F59E0B]/30', dot: 'from-[#F59E0B] to-[#D97706]', text: 'text-[#D97706]', badge: 'from-[#F59E0B] to-[#D97706]' }, // Amber
                        { bg: 'from-[#F3E8FF] via-[#FAF5FF] to-[#FDFAFF]', border: 'border-[#A855F7]/40', hover: 'hover:border-[#9333EA]', shadow: 'hover:shadow-[#A855F7]/30', dot: 'from-[#A855F7] to-[#9333EA]', text: 'text-[#9333EA]', badge: 'from-[#A855F7] to-[#9333EA]' }, // Purple
                        { bg: 'from-[#FFF8F5] via-[#FFFBF8] to-[#FFFEF8]', border: 'border-[#FFB59F]/40', hover: 'hover:border-[#FF7B60]', shadow: 'hover:shadow-[#FFB59F]/30', dot: 'from-[#FF7B60] to-[#FFB59F]', text: 'text-[#FF7B60]', badge: 'from-[#FF7B60] to-[#FFB59F]' }, // Coral
                        { bg: 'from-[#FEE2E2] via-[#FEF2F2] to-[#FFF5F5]', border: 'border-[#EF4444]/40', hover: 'hover:border-[#DC2626]', shadow: 'hover:shadow-[#EF4444]/30', dot: 'from-[#EF4444] to-[#DC2626]', text: 'text-[#DC2626]', badge: 'from-[#EF4444] to-[#DC2626]' }, // Red
                        { bg: 'from-[#E0E7FF] via-[#EEF2FF] to-[#F5F7FF]', border: 'border-[#6366F1]/40', hover: 'hover:border-[#4F46E5]', shadow: 'hover:shadow-[#6366F1]/30', dot: 'from-[#6366F1] to-[#4F46E5]', text: 'text-[#4F46E5]', badge: 'from-[#6366F1] to-[#4F46E5]' }, // Indigo
                      ];

                      const colorIndex = day % colorSchemes.length;
                      const colors = hasFestivals ? colorSchemes[colorIndex] : null;

                      return (
                        <div
                          key={day}
                          className={`aspect-square p-3 rounded-2xl border-2 transition-all duration-500 cursor-pointer group relative overflow-hidden transform hover:scale-105 hover:z-20 ${
                            isToday
                              ? 'bg-gradient-to-br from-[#FF7B60] via-[#FF9F87] to-[#FFB59F] border-[#FF7B60] text-white shadow-2xl shadow-[#FF7B60]/30 scale-105 animate-pulse'
                              : hasFestivals
                              ? `bg-gradient-to-br ${colors?.bg} ${colors?.border} ${colors?.hover} hover:shadow-2xl ${colors?.shadow}`
                              : isWeekend
                              ? 'bg-gradient-to-br from-[#FFF8F5] to-white border-[#FFB59F]/20 hover:border-[#FFB59F]/40 hover:shadow-lg'
                              : 'bg-white border-gray-200 hover:border-[#FFB59F]/40 hover:shadow-lg'
                          }`}
                        >
                          {/* Animated shine effect for festival days */}
                          {hasFestivals && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                          )}
                          
                          {/* Glow effect for today */}
                          {isToday && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            </>
                          )}
                          
                          {/* Animated festival indicator dot */}
                          {hasFestivals && !isToday && colors && (
                            <div className="absolute top-2 right-2">
                              <div className="relative">
                                <div className={`w-2.5 h-2.5 bg-gradient-to-br ${colors.dot} rounded-full shadow-lg group-hover:scale-150 transition-all duration-300 animate-pulse`}></div>
                                <div className={`absolute inset-0 w-2.5 h-2.5 bg-gradient-to-br ${colors.dot} rounded-full animate-ping opacity-75`}></div>
                              </div>
                            </div>
                          )}
                          
                          {/* Multiple festival indicators */}
                          {hasFestivals && festivals.length > 3 && !isToday && colors && (
                            <div className="absolute top-2 left-2 flex gap-1">
                              {[...Array(Math.min(festivals.length, 5))].map((_, idx) => (
                                <div 
                                  key={idx} 
                                  className={`w-1 h-1 bg-gradient-to-br ${colors.dot} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300`}
                                  style={{ animationDelay: `${idx * 0.1}s` }}
                                ></div>
                              ))}
                            </div>
                          )}
                          
                          <div className="relative z-10">
                            <div className={`text-base font-bold mb-1.5 flex items-center justify-between ${
                              isToday ? 'text-white' : `text-[#1a1a2e] ${hasFestivals && colors ? `group-hover:${colors.text}` : ''}`
                            } transition-colors duration-300`}>
                              <span>{day}</span>
                              {isToday && (
                                <span className="text-[10px] font-bold bg-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm animate-pulse">Today</span>
                              )}
                            </div>
                            {hasFestivals && colors && (
                              <div className="space-y-1">
                                {festivals.slice(0, 2).map((festival, idx) => (
                                  <div
                                    key={idx}
                                    className={`text-[9px] leading-tight font-semibold truncate flex items-start gap-1 group-hover:translate-x-0.5 transition-transform duration-300 ${
                                      isToday ? 'text-white/95' : `${colors.text}`
                                    }`}
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                    title={festival}
                                  >
                                    <span className="flex-shrink-0 mt-0.5 animate-pulse">•</span>
                                    <span className="flex-1">{festival}</span>
                                  </div>
                                ))}
                                {festivals.length > 2 && (
                                  <div className={`text-[9px] font-bold px-2 py-1 rounded-lg inline-block transform group-hover:scale-105 transition-all duration-300 ${
                                    isToday 
                                      ? 'bg-white/30 text-white backdrop-blur-sm' 
                                      : `bg-gradient-to-r ${colors.badge} text-white shadow-md group-hover:shadow-lg`
                                  }`}>
                                    +{festivals.length - 2} more
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          
                          {/* Enhanced Tooltip on hover */}
                          {hasFestivals && festivals.length > 2 && (
                            <div className="absolute z-30 bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] text-white text-xs rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap min-w-max border border-white/10 group-hover:scale-105">
                              <div className={`font-bold mb-2 pb-2 border-b border-white/10 flex items-center gap-2 ${colors ? colors.text.replace('text-', 'text-') : 'text-[#FFB59F]'}`} style={{color: isToday ? '#FFB59F' : undefined}}>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {day} January 2026
                              </div>
                              <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar">
                                {festivals.map((festival, idx) => (
                                  <div 
                                    key={idx} 
                                    className="flex items-start gap-2 hover:bg-white/5 px-2 py-1 rounded-lg transition-colors duration-200"
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                  >
                                    <span className="text-[#FFB59F] flex-shrink-0 animate-pulse">✦</span>
                                    <span className="group-hover:text-[#FFB59F] transition-colors duration-200">{festival}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                <div className="border-[6px] border-transparent border-t-[#1a1a2e]"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>
            
            {/* Enhanced Legend */}
            <div className="mt-8 pt-6 border-t border-[#FFB59F]/20 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FF7B60] via-[#FF9F87] to-[#FFB59F] shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <span className="text-[#666] font-medium">Today</span>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-white via-[#FFF8F5] to-[#FFFBF8] border-2 border-[#FFB59F]/40 group-hover:scale-110 transition-transform duration-300"></div>
                <span className="text-[#666] font-medium">Festival Days</span>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FFF8F5] to-white border-2 border-[#FFB59F]/20 group-hover:scale-110 transition-transform duration-300"></div>
                <span className="text-[#666] font-medium">Weekends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer - Enhanced */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#FFF8F5] via-white to-[#F0F4FF] border-2 border-[#FFB59F]/20 p-6 hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7B60]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4F46E5]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FFB59F] flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-[#1a1a2e] mb-2">Important Note</h4>
              <p className="text-xs text-[#666] leading-relaxed">
                All timings are calculated based on <span className="font-semibold text-[#FF7B60]">New Delhi, India (28.6139°N, 77.2090°E)</span>. 
                For accurate panchang information specific to your location, please adjust the coordinates accordingly or consult with a qualified astrologer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
