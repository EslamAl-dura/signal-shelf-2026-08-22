import { Check, Moon, Sun } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useI18n } from '../i18n'
import { useTheme } from '../theme'

export function Settings() {
  const { t, locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  return <div className="mx-auto max-w-3xl space-y-8"><div><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-teal-600">Signal Shelf</p><h1 className="text-3xl font-extrabold text-ink dark:text-white">{t('settings')}</h1><p className="mt-2 text-slate-500">Tune the workspace to match your team.</p></div><Card><CardHeader><CardTitle>{t('appearance')}</CardTitle><CardDescription>Choose how Signal Shelf looks on this device.</CardDescription></CardHeader><CardContent className="grid gap-3 sm:grid-cols-2"><Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => theme === 'dark' && toggleTheme()}><Sun size={17} className="me-2" /> {t('light')} {theme === 'light' && <Check size={16} className="ms-auto" />}</Button><Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => theme === 'light' && toggleTheme()}><Moon size={17} className="me-2" /> {t('dark')} {theme === 'dark' && <Check size={16} className="ms-auto" />}</Button></CardContent></Card><Card><CardHeader><CardTitle>{t('language')}</CardTitle><CardDescription>Arabic automatically switches the interface to RTL.</CardDescription></CardHeader><CardContent className="grid gap-3 sm:grid-cols-2"><Button variant={locale === 'en' ? 'default' : 'outline'} onClick={() => setLocale('en')}>{t('english')} {locale === 'en' && <Check size={16} className="ms-auto" />}</Button><Button variant={locale === 'ar' ? 'default' : 'outline'} onClick={() => setLocale('ar')}>{t('arabic')} {locale === 'ar' && <Check size={16} className="ms-auto" />}</Button></CardContent></Card></div>
}
