type LinkCardProps = {
  title: string;
  url: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-[#3a2f28] shadow-[0_4px_20px_-6px_rgba(180,110,60,0.25)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_24px_-6px_rgba(180,110,60,0.35)] active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-[#f3e9dc] dark:hover:bg-white/10"
    >
      <span className="flex-1 text-center">{title}</span>
      <span className="shrink-0 text-xs font-normal text-[#8a7a6d] dark:text-[#c9b8a8]">
        {clickCount}회
      </span>
    </a>
  );
}
