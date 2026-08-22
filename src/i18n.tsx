import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type Locale = 'en' | 'ar'
type Dictionary = Record<string, string>
const dictionaries: Record<Locale, Dictionary> = {
  en: { dashboard: 'Dashboard', settings: 'Settings', greeting: 'Good morning, release captain.', subtitle: 'A calm view of the signals behind your next deploy.', readiness: 'Release readiness', live: 'LIVE CHECK', score: 'confidence score', lowRisk: 'Low deployment risk', update: 'Update signals', service: 'Service', version: 'Version', assess: 'Assess release', tests: 'Automated test coverage', rollback: 'Rollback plan rehearsed', change: 'Change size', pressure: 'Open incident pressure', select: 'Select a service', small: 'Small', medium: 'Medium', large: 'Large', yes: 'Yes', no: 'No', save: 'Save assessment', appearance: 'Appearance', language: 'Language', dark: 'Dark mode', light: 'Light mode', english: 'English', arabic: 'العربية', saved: 'Assessment saved successfully.' },
  ar: { dashboard: 'لوحة التحكم', settings: 'الإعدادات', greeting: 'صباح الخير، قائد الإصدار.', subtitle: 'نظرة هادئة على الإشارات خلف عملية النشر القادمة.', readiness: 'جاهزية الإصدار', live: 'فحص مباشر', score: 'درجة الثقة', lowRisk: 'مخاطر نشر منخفضة', update: 'تحديث الإشارات', service: 'الخدمة', version: 'الإصدار', assess: 'تقييم الإصدار', tests: 'تغطية الاختبارات الآلية', rollback: 'تم التدرب على خطة التراجع', change: 'حجم التغيير', pressure: 'ضغط الحوادث المفتوحة', select: 'اختر خدمة', small: 'صغير', medium: 'متوسط', large: 'كبير', yes: 'نعم', no: 'لا', save: 'حفظ التقييم', appearance: 'المظهر', language: 'اللغة', dark: 'الوضع الداكن', light: 'الوضع الفاتح', english: 'English', arabic: 'العربية', saved: 'تم حفظ التقييم بنجاح.' },
}
const I18nContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string } | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('signal-locale') as Locale | null) ?? 'en')
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; localStorage.setItem('signal-locale', locale) }, [locale])
  const value = useMemo(() => ({ locale, setLocale, t: (key: string) => dictionaries[locale][key] ?? key }), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
export function useI18n() { const value = useContext(I18nContext); if (!value) throw new Error('useI18n must be used inside I18nProvider'); return value }
