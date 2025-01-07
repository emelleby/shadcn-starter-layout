import './App.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { AppLayout } from './layouts/AppLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import GetStarted from '@/pages/Documentation/GetStarted';
import Documentation from '@/pages/Documentation/Documentation';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/documentation/get-started" element={<GetStarted />} />
            <Route path="/documentation/" element={<Documentation />} />
            {/* Add more routes matching your sidebarData structure */}
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
