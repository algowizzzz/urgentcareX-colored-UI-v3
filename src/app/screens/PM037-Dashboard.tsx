import { Button } from '../components/ui/button';
import { X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import BottomNavigation from '../components/BottomNavigation';

interface DashboardProps {
  onStartSymptomCheck: () => void;
  onViewAppointments: () => void;
  onViewHistory: () => void;
  onViewProfile: () => void;
  onViewFacility?: (facilityId: string) => void;
  userName?: string;
}

export default function Dashboard({
  onStartSymptomCheck,
  onViewAppointments,
  onViewHistory,
  onViewProfile,
  onViewFacility,
  userName = 'John'
}: DashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const notifications = [
    {
      id: 1,
      type: 'appointment-reminder',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is tomorrow at 10:00 AM',
      time: '2h ago',
      color: '#1E3A8A',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="#1E3A8A" />
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      type: 'medical-history',
      title: 'Complete Medical History',
      message: 'Help us serve you better by completing your medical history',
      time: '1d ago',
      color: '#F59E0B',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" fill="none" stroke="#F59E0B" strokeWidth="1.8" />
          <rect x="9" y="3" width="6" height="4" rx="1" fill="#F59E0B" />
          <path d="M9 12H15M9 16H13" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      type: 'appointment-confirmed',
      title: 'Appointment Confirmed',
      message: 'Dr. Emily Rodriguez has confirmed your appointment for February 5, 2026 at 2:30 PM',
      time: '3d ago',
      color: '#10B981',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="#10B981" />
          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F4F6] relative">
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] px-6 pt-8 pb-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1E3A8A]/5 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1E3A8A]/5 rounded-full"></div>

        <div className={`flex items-center justify-between transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-3">
            {/* User Avatar with ring animation */}
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] flex items-center justify-center ring-2 ring-[#93C5FD]/30 shadow-lg shadow-[#3B82F6]/20">
                <span className="text-sm font-bold text-white">{userName.charAt(0)}</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#10B981] rounded-full border-2 border-[#1F2937]"></div>
            </div>
            <div>
              <p className="text-xs text-[#93C5FD]/80 font-medium">{getGreeting()}</p>
              <h1 className="text-lg font-bold text-white">{userName}</h1>
            </div>
          </div>
          <button className="p-2.5 relative bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all active:scale-95" onClick={() => setShowNotifications(!showNotifications)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="white" fillOpacity="0.9" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute -top-1 -right-1 flex items-center justify-center">
              <div className="absolute w-[20px] h-[20px] bg-[#EF4444] rounded-full animate-ping opacity-30"></div>
              <div className="w-[18px] h-[18px] bg-[#EF4444] rounded-full ring-2 ring-[#1F2937] flex items-center justify-center relative">
                <span className="text-[9px] font-bold text-white">3</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Notification Panel Overlay */}
      {showNotifications && (
        <>
          <div
            className="absolute inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setShowNotifications(false)}
          ></div>

          <div className="absolute top-0 right-0 bottom-0 w-full bg-[#F9FAFB] z-50 shadow-2xl animate-[slideInRight_0.3s_ease-out]">
            <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <div className="px-2 py-0.5 bg-[#1E3A8A] rounded-full">
                  <span className="text-[10px] font-bold text-white">{notifications.length}</span>
                </div>
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors active:scale-95"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="overflow-y-auto h-full pb-20">
              <div className="p-4 space-y-3">
                {notifications.map((notification, idx) => (
                  <div
                    key={notification.id}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D1D5DB] hover:shadow-md transition-all active:scale-[0.98]"
                    style={{
                      borderLeftWidth: '3px',
                      borderLeftColor: notification.color,
                      animation: `fadeSlideUp 0.4s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-semibold text-[#1F2937]">
                            {notification.title}
                          </h3>
                          <span className="text-[11px] text-[#9CA3AF] shrink-0">{notification.time}</span>
                        </div>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {notifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 px-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-4">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-base font-medium text-[#9CA3AF] text-center">
                    No notifications yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1 px-5 py-5 overflow-y-auto pb-24">
        {/* Quick Actions Card — Hero style */}
        <div
          className={`bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] rounded-2xl p-5 mb-5 shadow-lg shadow-[#1E3A8A]/20 relative overflow-hidden transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>

          <div className="relative flex items-center gap-4 mb-4">
            {/* Stethoscope Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 12V5C6 3.89543 6.89543 3 8 3H9" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 12V5C18 3.89543 17.1046 3 16 3H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="20" r="2" fill="white" />
                <circle cx="4" cy="5" r="2" fill="white" opacity="0.7" />
                <circle cx="20" cy="5" r="2" fill="white" opacity="0.7" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                How can we help?
              </h2>
              <p className="text-sm text-white/60 font-medium">AI-powered symptom assessment</p>
            </div>
          </div>
          <Button
            onClick={onStartSymptomCheck}
            className="w-full h-[52px] bg-white text-[#1E3A8A] rounded-xl text-base font-semibold hover:bg-[#F8FAFC] shadow-lg active:scale-[0.98] transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1E3A8A]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mr-2.5 relative">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" fill="#1E3A8A" />
              <path d="M9.5 10.5H9.51M12.5 10.5H12.51M15.5 10.5H15.51" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="relative">Find Care Now</span>
          </Button>
        </div>

        {/* Upcoming Appointments */}
        <div className={`mb-5 transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF]"></div>
              <h3 className="text-[15px] font-bold text-[#1F2937]">Upcoming Appointments</h3>
            </div>
            <button onClick={onViewAppointments} className="text-xs font-semibold text-[#2563EB] hover:text-[#1E40AF] active:scale-95 transition-all">See All</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-shadow">
            <div className="border-l-4 border-[#1E3A8A] p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  {/* Doctor Avatar — richer */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="white" opacity="0.9" />
                      <path d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                      <path d="M14.5 7.5L16 6M14.5 8.5L16.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-[#1F2937] mb-0.5">
                      Dr. Sarah Johnson
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Primary Care Physician
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                  <p className="text-[11px] font-semibold text-[#059669]">Confirmed</p>
                </div>
              </div>

              <div className="border-t border-dashed border-[#E5E7EB] my-3"></div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  {/* Calendar icon — gradient filled */}
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] flex items-center justify-center shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M3 10H21" stroke="white" strokeWidth="1.5" />
                      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="white" />
                      <path d="M8 2V6M16 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#374151]">Jan 15, 2026</span>
                </div>
                <div className="w-px h-4 bg-[#E5E7EB]"></div>
                <div className="flex items-center gap-2 text-sm">
                  {/* Clock icon */}
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 7V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#374151]">10:00 AM</span>
                </div>
                <div className="w-px h-4 bg-[#E5E7EB]"></div>
                <div className="flex items-center gap-2 text-sm">
                  {/* Location icon */}
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#EC4899] to-[#DB2777] flex items-center justify-center shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="white" opacity="0.3" />
                      <circle cx="12" cy="9" r="2" fill="white" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#374151]">Downtown</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Open Facilities */}
        <div className={`mb-6 transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#10B981] to-[#059669]"></div>
              <h3 className="text-[15px] font-bold text-[#1F2937]">Nearby Urgent Care</h3>
            </div>
          </div>
          <div className="space-y-3">
            {/* Facility 1 */}
            <div
              onClick={() => onViewFacility?.('facility-1')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#1E3A8A]/50 hover:shadow-lg transition-all active:scale-[0.98] group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {/* Hospital icon — gradient */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] flex items-center justify-center shrink-0 shadow-md shadow-blue-200 group-hover:shadow-blue-300 transition-shadow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <rect x="9" y="17" width="6" height="4" rx="0.5" fill="white" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1 group-hover:text-[#2563EB] transition-colors">
                      UrgentCare Center - Downtown
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-semibold text-[#6366F1]">0.8 mi</span>
                      <span className="text-[#D1D5DB]">|</span>
                      <span className="flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" /></svg>
                        <span className="font-medium text-[#374151]">4.8</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Closes at 9:00 PM</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#1E3A8A] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
              </div>
            </div>

            {/* Facility 2 */}
            <div
              onClick={() => onViewFacility?.('facility-2')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#3B82F6]/30 hover:shadow-lg transition-all active:scale-[0.98] group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shrink-0 shadow-md shadow-blue-200 group-hover:shadow-blue-300 transition-shadow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <rect x="9" y="17" width="6" height="4" rx="0.5" fill="white" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1 group-hover:text-[#2563EB] transition-colors">
                      HealthFirst Urgent Care
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-semibold text-[#6366F1]">1.2 mi</span>
                      <span className="text-[#D1D5DB]">|</span>
                      <span className="flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" /></svg>
                        <span className="font-medium text-[#374151]">4.6</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Closes at 8:00 PM</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
              </div>
            </div>

            {/* Facility 3 */}
            <div
              onClick={() => onViewFacility?.('facility-3')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#7C3AED]/30 hover:shadow-lg transition-all active:scale-[0.98] group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center shrink-0 shadow-md shadow-purple-200 group-hover:shadow-purple-300 transition-shadow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <rect x="9" y="17" width="6" height="4" rx="0.5" fill="white" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1 group-hover:text-[#7C3AED] transition-colors">
                      CityMed Urgent Care - Westside
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-semibold text-[#6366F1]">2.4 mi</span>
                      <span className="text-[#D1D5DB]">|</span>
                      <span className="flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" /></svg>
                        <span className="font-medium text-[#374151]">4.9</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Open 24 Hours</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          activeTab="home"
          onNavigateHome={() => {}}
          onNavigateAppointments={onViewAppointments}
          onNavigateHistory={onViewHistory}
          onNavigateProfile={onViewProfile}
        />
      </div>
    </div>
  );
}
