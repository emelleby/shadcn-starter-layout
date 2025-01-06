import './App.css'
import { Dashboard } from "@/app/dashboard/Dashboard"
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { AppLayout } from './layouts/AppLayout'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </ThemeProvider>
  )
}