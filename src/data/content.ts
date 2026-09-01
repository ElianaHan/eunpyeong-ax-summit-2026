import { Language, ProgramItem, MapService } from '../types';

export const CONTENT = {
  ko: {
    hospitalName: '가톨릭대학교 은평성모병원',
    hospitalSub: 'The Catholic University of Korea Eunpyeong St. Mary\'s Hospital',
    summitTitle: '은평 AX Summit 2026',
    summitTitleEn: 'Eunpyeong AX Summit 2026',
    tagline: '의료의 미래를 바꾸는 AI Transformation',
    subTagline: 'AI Transformation for the Future of Healthcare',
    heroBadge: '공식 모바일 초청장 · OFFICIAL INVITATION',
    dateShort: '2026. 9. 29. TUE',
    timeShort: '14:00',
    venueShort: '은평성모병원 G층 대강당',
    dateTimeFull: '2026년 9월 29일(화) 오후 2시',
    venueFull: '가톨릭대학교 은평성모병원 G층 대강당',
    address: '서울특별시 은평구 통일로 1021 (진관동)',
    addressDetail: '가톨릭대학교 은평성모병원 본관 G층(지하 1층) 대강당',
    
    keywords: [
      'AI',
      'AX (AI Transformation)',
      'Healthcare AI',
      'Digital Healthcare',
      'Smart Hospital',
      'Future Hospital',
      'Innovation'
    ],

    invitation: {
      title: '초대의 글',
      subtitle: '새로운 도약과 의료 혁신의 장으로 여러분을 초대합니다',
      paragraphs: [
        '의료와 인공지능의 경계가 빠르게 허물어지며\n병원의 새로운 변화가 시작되고 있습니다.',
        '가톨릭대학교 은평성모병원은\nAI를 활용한 의료 현장의 혁신과\n미래 병원의 새로운 가능성을 함께 나누고자\n「은평 AX Summit 2026」을 개최합니다.',
        '이번 자리를 통해\n의료 현장에서 이루어지고 있는 다양한 AI·AX 혁신 사례와\n앞으로 우리가 함께 만들어갈 변화의 방향을 공유하고자 합니다.',
        '바쁘시더라도 귀한 걸음 하시어\n은평성모병원이 준비하는 새로운 변화의 순간을\n함께해 주시기 바랍니다.',
        '감사합니다.'
      ],
      signature: '가톨릭대학교 은평성모병원'
    },

    eventInfo: {
      title: '행사 정보',
      subtitle: 'Event Overview',
      dateTimeLabel: '일시',
      dateTimeValue: '2026년 9월 29일(화) 오후 2시 (14:00 ~ 17:30)',
      venueLabel: '장소',
      venueValue: '가톨릭대학교 은평성모병원 G층 대강당',
      venueSub: '서울특별시 은평구 통일로 1021',
      targetLabel: '참석 대상',
      targetValue: '외부 주요 인사, 협력기관 관계자, 스마트헬스케어 산·학·연 전문가 및 원내 보직자',
      hostLabel: '주최 / 주관',
      hostValue: '가톨릭대학교 은평성모병원'
    },

    program: {
      title: '프로그램 일정',
      subtitle: 'Summit Program',
      items: [
        {
          time: '13:30 - 14:00',
          title: '참석자 등록 및 식전 영상 상영',
          role: '로비 / 대강당',
          tag: 'Registration'
        },
        {
          time: '14:00 - 14:20',
          title: '개회식 및 환영사 · 축사',
          role: '병원장 및 주요 외빈',
          tag: 'Opening'
        },
        {
          time: '14:20 - 15:10',
          title: 'Keynote Session: 의료 혁신과 AX(AI Transformation)의 미래',
          speaker: 'AI 헬스케어 석학 및 글로벌 혁신 리더',
          role: '기조강연',
          tag: 'Keynote'
        },
        {
          time: '15:10 - 15:30',
          title: 'Coffee Break & AI 솔루션 인터랙티브 시연',
          role: '전시존',
          tag: 'Break & Demo'
        },
        {
          time: '15:30 - 16:40',
          title: 'AX Session: 은평성모병원 스마트 병원 AI 현장 실증 & 혁신 사례',
          speaker: '의료정보 및 AI 추진단 연구팀',
          role: '사례 발표',
          tag: 'Showcase'
        },
        {
          time: '16:40 - 17:20',
          title: '패널 토론: 미래 스마트 병원이 나아갈 길과 협력 생태계',
          speaker: '산·학·연·병 전문가 패널',
          role: '종합토론',
          tag: 'Panel Discussion'
        },
        {
          time: '17:20 - 17:30',
          title: '폐회 및 네트워킹',
          role: '대강당',
          tag: 'Closing'
        }
      ] as ProgramItem[]
    },

    directions: {
      title: '오시는 길',
      subtitle: 'Directions & Venue Map',
      hospitalName: '가톨릭대학교 은평성모병원',
      hallName: '본관 G층 대강당',
      addressTitle: '병원 주소',
      addressCopySuccess: '병원 주소가 복사되었습니다.',
      mapBtnGuide: '원하시는 지도 앱을 선택하시면 길안내가 시작됩니다.',
      transports: [
        {
          icon: 'train',
          title: '지하철 이용 시',
          desc: '3호선 구파발역 3번 출구',
          detail: '도보 약 500m (은평뉴타운 방면, 약 7~8분 소요) 또는 병원 셔틀버스 이용'
        },
        {
          icon: 'bus',
          title: '버스 이용 시',
          desc: '은평성모병원 정류장 하차',
          detail: '간선 704, 705, 773, 지선 7722, 7723, 광역 9709 등 다수 노선 운행'
        },
        {
          icon: 'car',
          title: '자가용 / 주차 안내',
          desc: '내비게이션 검색: 은평성모병원',
          detail: '병원 지하 주차장 이용 가능 (행사 참석자 무료 주차권 제공)'
        }
      ]
    },

    cta: {
      directions: '오시는 길',
      addToCalendar: '캘린더에 추가',
      share: '초대장 공유',
      copyAddress: '주소 복사',
      shareSuccess: '초대장 링크가 복사되었습니다.',
      calendarAdded: '캘린더 일정이 열렸습니다.'
    },

    calendarModal: {
      title: '캘린더에 일정 등록',
      desc: '행사 일정을 사용 중인 캘린더에 간편하게 추가하세요.',
      google: 'Google 캘린더에 추가',
      apple: 'Apple 캘린더 / Outlook (.ics 다운로드)',
      eventDetails: '2026.09.29 (화) 14:00 · 은평성모병원 G층 대강당',
      close: '닫기'
    },

    shareModal: {
      title: '초대장 공유하기',
      desc: '참석하실 동료 및 관계자분들께 모바일 초대장을 전달하세요.',
      copyLink: '링크 복사하기',
      nativeShare: '공유하기 (카카오톡, 메시지 등)',
      copied: '복사 완료!',
      close: '닫기'
    },

    countdown: {
      days: '일',
      hours: '시간',
      minutes: '분',
      seconds: '초',
      dDay: 'D-Day',
      dDayPassed: '행사가 성공적으로 개최되었습니다'
    },

    footer: {
      hospital: '가톨릭대학교 은평성모병원',
      dept: '은평 AX Summit 2026 운영사무국',
      address: '서울특별시 은평구 통일로 1021 (진관동)',
      inquiry: '행사 문의: 02-2030-2026',
      copyright: '© 2026 The Catholic University of Korea Eunpyeong St. Mary\'s Hospital. All rights reserved.'
    }
  },

  en: {
    hospitalName: 'The Catholic University of Korea Eunpyeong St. Mary\'s Hospital',
    hospitalSub: '가톨릭대학교 은평성모병원',
    summitTitle: 'Eunpyeong AX Summit 2026',
    summitTitleEn: 'Eunpyeong AX Summit 2026',
    tagline: 'AI Transformation for the Future of Healthcare',
    subTagline: 'Transforming Healthcare with AI',
    heroBadge: 'OFFICIAL INVITATION',
    dateShort: '2026. 9. 29. TUE',
    timeShort: '14:00',
    venueShort: 'Auditorium, G Floor, Eunpyeong St. Mary\'s Hospital',
    dateTimeFull: 'September 29, 2026 (Tue), 2:00 PM',
    venueFull: 'Auditorium, G Floor, The Catholic University of Korea Eunpyeong St. Mary\'s Hospital',
    address: '1021 Tongil-ro, Eunpyeong-gu, Seoul, Republic of Korea',
    addressDetail: 'Auditorium, G Floor (B1), Main Building, Eunpyeong St. Mary\'s Hospital',
    
    keywords: [
      'AI',
      'AX (AI Transformation)',
      'Healthcare AI',
      'Digital Healthcare',
      'Smart Hospital',
      'Future Hospital',
      'Innovation'
    ],

    invitation: {
      title: 'Invitation',
      subtitle: 'We warmly invite you to the future of healthcare innovation',
      paragraphs: [
        'As artificial intelligence continues to reshape healthcare,\nnew possibilities are emerging for the future of hospitals.',
        'The Catholic University of Korea Eunpyeong St. Mary\'s Hospital\nis pleased to host Eunpyeong AX Summit 2026,\na forum dedicated to exploring AI-driven innovation in healthcare\nand the transformation of future hospital environments.',
        'At this summit, we will share practical cases of AI and AX innovation\nbeing implemented across the healthcare environment\nand discuss the direction of change we can create together.',
        'We sincerely invite you to join us\nand share this meaningful moment as we explore\nthe next chapter of healthcare innovation.',
        'Thank you.'
      ],
      signature: 'The Catholic University of Korea\nEunpyeong St. Mary\'s Hospital'
    },

    eventInfo: {
      title: 'Event Information',
      subtitle: 'Summit Overview',
      dateTimeLabel: 'Date & Time',
      dateTimeValue: 'September 29, 2026 (Tue), 2:00 PM (14:00 ~ 17:30)',
      venueLabel: 'Venue',
      venueValue: 'Auditorium, G Floor\nThe Catholic University of Korea Eunpyeong St. Mary\'s Hospital',
      venueSub: '1021 Tongil-ro, Eunpyeong-gu, Seoul',
      targetLabel: 'Target Audience',
      targetValue: 'Distinguished Guests, Partner Institution Leaders, AI Healthcare Experts, and Hospital Leadership',
      hostLabel: 'Host & Organizer',
      hostValue: 'The Catholic University of Korea Eunpyeong St. Mary\'s Hospital'
    },

    program: {
      title: 'Summit Program',
      subtitle: 'Schedule Overview',
      items: [
        {
          time: '13:30 - 14:00',
          title: 'Guest Registration & Preview Video Showcase',
          role: 'Lobby & Auditorium',
          tag: 'Registration'
        },
        {
          time: '14:00 - 14:20',
          title: 'Opening Ceremony & Welcoming Remarks',
          role: 'President & VIP Dignitaries',
          tag: 'Opening'
        },
        {
          time: '14:20 - 15:10',
          title: 'Keynote Session: Future of Healthcare with AI Transformation (AX)',
          speaker: 'Global AI Healthcare Thought Leaders',
          role: 'Keynote Address',
          tag: 'Keynote'
        },
        {
          time: '15:10 - 15:30',
          title: 'Coffee Break & Interactive AI Healthcare Solution Demo',
          role: 'Exhibition Area',
          tag: 'Break & Demo'
        },
        {
          time: '15:30 - 16:40',
          title: 'AX Session: Eunpyeong St. Mary\'s Smart Hospital AI Implementations',
          speaker: 'Medical Informatics & AI Initiative Taskforce',
          role: 'Case Presentation',
          tag: 'Showcase'
        },
        {
          time: '16:40 - 17:20',
          title: 'Panel Discussion: Roadmap for Next-Gen Smart Hospitals & AI Collaboration',
          speaker: 'Interdisciplinary Expert Panel',
          role: 'Panel Debate',
          tag: 'Panel Discussion'
        },
        {
          time: '17:20 - 17:30',
          title: 'Closing Ceremony & Networking',
          role: 'Auditorium',
          tag: 'Closing'
        }
      ] as ProgramItem[]
    },

    directions: {
      title: 'Directions',
      subtitle: 'Location & Transport Guide',
      hospitalName: 'Eunpyeong St. Mary\'s Hospital',
      hallName: 'Auditorium, G Floor, Main Building',
      addressTitle: 'Hospital Address',
      addressCopySuccess: 'Address copied to clipboard.',
      mapBtnGuide: 'Select your preferred navigation app for real-time routing.',
      transports: [
        {
          icon: 'train',
          title: 'By Subway',
          desc: 'Line 3, Gupabal Station, Exit 3',
          detail: 'Approx. 500m walk towards Eunpyeong New Town (7-8 mins) or hospital shuttle bus'
        },
        {
          icon: 'bus',
          title: 'By Bus',
          desc: 'Eunpyeong St. Mary\'s Hospital Stop',
          detail: 'Blue buses 704, 705, 773 / Green buses 7722, 7723 / Red bus 9709'
        },
        {
          icon: 'car',
          title: 'By Car & Parking',
          desc: 'GPS Search: Eunpyeong St. Mary\'s Hospital',
          detail: 'Underground parking available (Complimentary parking voucher provided for attendees)'
        }
      ]
    },

    cta: {
      directions: 'Directions',
      addToCalendar: 'Add to Calendar',
      share: 'Share Invitation',
      copyAddress: 'Copy Address',
      shareSuccess: 'Invitation link copied to clipboard.',
      calendarAdded: 'Calendar event opened.'
    },

    calendarModal: {
      title: 'Add Event to Calendar',
      desc: 'Seamlessly schedule the summit into your personal calendar.',
      google: 'Add to Google Calendar',
      apple: 'Apple Calendar / Outlook (.ics Download)',
      eventDetails: 'September 29, 2026 (Tue) 14:00 · Auditorium, G Floor, Eunpyeong St. Mary\'s Hospital',
      close: 'Close'
    },

    shareModal: {
      title: 'Share Invitation',
      desc: 'Forward this official invitation to colleagues and attendees.',
      copyLink: 'Copy Invitation Link',
      nativeShare: 'Share via Apps (KakaoTalk, Messages, etc.)',
      copied: 'Copied!',
      close: 'Close'
    },

    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Mins',
      seconds: 'Secs',
      dDay: 'D-Day',
      dDayPassed: 'The Summit was successfully held'
    },

    footer: {
      hospital: 'The Catholic University of Korea Eunpyeong St. Mary\'s Hospital',
      dept: 'Eunpyeong AX Summit 2026 Organizing Committee',
      address: '1021 Tongil-ro, Eunpyeong-gu, Seoul, Republic of Korea',
      inquiry: 'Inquiry: +82-2-2030-2026',
      copyright: '© 2026 The Catholic University of Korea Eunpyeong St. Mary\'s Hospital. All rights reserved.'
    }
  }
};

export const MAP_SERVICES: MapService[] = [
  {
    id: 'naver',
    name: 'NAVER Map',
    color: '#03C75A',
    textColor: '#FFFFFF',
    borderColor: '#03C75A',
    iconType: 'naver',
    webUrl: 'https://map.naver.com/p/search/%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    appUrl: 'nmap://place?lat=37.6334&lng=126.9168&name=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90&appname=com.eunpyeong.axsummit',
    badge: '네이버 지도'
  },
  {
    id: 'kakao',
    name: 'Kakao Map',
    color: '#FEE500',
    textColor: '#191919',
    borderColor: '#E6CF00',
    iconType: 'kakao',
    webUrl: 'https://map.kakao.com/link/search/%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    appUrl: 'kakaomap://search?q=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    badge: '카카오맵'
  },
  {
    id: 'tmap',
    name: 'TMAP',
    color: '#0052FF',
    textColor: '#FFFFFF',
    borderColor: '#0047E0',
    iconType: 'tmap',
    webUrl: 'https://tmap.life/search?q=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    appUrl: 'tmap://search?name=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    badge: '티맵 내비'
  },
  {
    id: 'google',
    name: 'Google Maps',
    color: '#EA4335',
    textColor: '#FFFFFF',
    borderColor: '#D33828',
    iconType: 'google',
    webUrl: 'https://www.google.com/maps/search/?api=1&query=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90+%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    appUrl: 'https://www.google.com/maps/search/?api=1&query=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90+%EC%9D%80%ED%8F%89%EC%84%B1%EB%AA%A8%EB%B3%91%EC%9B%90',
    badge: 'Global Map'
  }
];

export const CALENDAR_DATA = {
  title: '은평 AX Summit 2026 (Eunpyeong AX Summit 2026)',
  location: '가톨릭대학교 은평성모병원 G층 대강당 (1021 Tongil-ro, Eunpyeong-gu, Seoul)',
  description: '가톨릭대학교 은평성모병원 주최 「은평 AX Summit 2026」 모바일 초대장 공식 행사\\n일시: 2026년 9월 29일(화) 14:00 ~ 17:30\\n장소: 가톨릭대학교 은평성모병원 G층 대강당\\n주제: 의료의 미래를 바꾸는 AI Transformation',
  startDate: '20260929T140000',
  endDate: '20260929T173000',
  startDateIso: '2026-09-29T14:00:00+09:00',
  endDateIso: '2026-09-29T17:30:00+09:00',
  eventDate: new Date('2026-09-29T14:00:00+09:00')
};
