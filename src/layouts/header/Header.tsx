import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { PageBreadcrumb } from './PageBreadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex flex-1 items-center gap-4">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <PageBreadcrumb />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
