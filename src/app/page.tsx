import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "최병람",
  bio: "사랑에 목마른 자",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://blog.naver.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.id} title={link.title} url={link.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
