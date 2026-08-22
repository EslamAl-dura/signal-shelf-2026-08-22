import { createRootRoute, createRoute, createRouter, Link, Outlet } from '@tanstack/react-router'
import { Activity, Languages, Moon, Settings as SettingsIcon, Sun } from 'lucide-react'
import { Button } from './components/ui/button'
import { useI18n } from './i18n'
import { useTheme } from './theme'
import { Dashboard } from './pages/dashboard'
import { Settings } from './pages/settings'

function RootLayout() {
  const { t, locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  return <div className="min-h-screen bg-mist text-slate-700 dark:bg-slate-950 dark:text-slate-300"><header className="border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link to="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white dark:bg-teal-500 dark:text-slate-950"><Activity size={21} /></span><span className="font-bold tracking-tight text-ink dark:text-white">Signal Shelf</span></Link><nav className="flex items-center gap-1"><Link to="/" className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">{t('dashboard')}</Link><Link to="/settings" className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"><SettingsIcon className="inline" size={16} /> <span className="hidden sm:inline">{t('settings')}</span></Link><Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</Button><Button variant="ghost" size="icon" aria-label="Toggle language" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}><Languages size={17} /></Button></nav></div></header><main className="mx-auto max-w-6xl px-5 py-10"><Outlet /></main></div>
}

const rootRoute = createRootRoute({ component: RootLayout })
const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Dashboard })
const settingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/settings', component: Settings })
const routeTree = rootRoute.addChildren([dashboardRoute, settingsRoute])
export const router = createRouter({ routeTree })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }
