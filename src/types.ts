export type Language = 'ko' | 'en';

export interface ProgramItem {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  tag?: string;
}

export interface MapService {
  id: string;
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  iconType: 'naver' | 'kakao' | 'tmap' | 'google';
  webUrl: string;
  appUrl: string;
  badge?: string;
}

export interface TransportGuide {
  icon: string;
  title: string;
  desc: string;
  detail: string;
}
