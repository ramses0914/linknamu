type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="h-32 w-32 rounded-full bg-gradient-to-br from-white/80 to-orange-100/40 p-1.5 shadow-[0_12px_30px_-8px_rgba(180,110,60,0.45)] dark:from-white/10 dark:to-transparent">
        <div className="h-full w-full overflow-hidden rounded-full bg-zinc-200 ring-1 ring-black/5 dark:bg-zinc-800">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-full w-full text-zinc-400 dark:text-zinc-600"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[#3a2f28] dark:text-[#f3e9dc]">
          {name}
        </h1>
        <p className="text-sm text-[#8a7a6d] dark:text-[#c9b8a8]">{bio}</p>
      </div>
    </div>
  );
}
