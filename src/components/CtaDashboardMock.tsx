import { ChatPanel } from './ChatPanel';
import { VelorahHeroPreview } from './VelorahHeroPreview';

export function CtaDashboardMock() {
  return (
    <div className="liquid-glass w-full max-w-[1100px] aspect-[16/9] rounded-2xl mx-auto overflow-hidden p-3">
      <div className="grid h-full grid-cols-1 sm:grid-cols-[minmax(220px,320px)_1fr] gap-3">
        <div className="min-h-0 hidden sm:block"><ChatPanel animateMessagesIn /></div>
        <div className="min-h-0"><VelorahHeroPreview /></div>
      </div>
    </div>
  );
}
