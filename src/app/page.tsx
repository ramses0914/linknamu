import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const profile = {
  name: "BRCHOI",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.jpeg",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://blog.naver.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fdf6ec] via-[#fdefe0] to-[#ffe2c9] px-6 py-16 dark:from-[#241d18] dark:via-[#2b221b] dark:to-[#33261c]">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
