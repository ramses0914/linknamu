type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
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
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{name}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
