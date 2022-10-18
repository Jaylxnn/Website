import type { NextPage } from "next";
import Head from "next/head";
import type { Data as LanyardData } from "use-lanyard";
import { useLanyard } from "use-lanyard";
const DISCORD_ID = "363571068012593156";

type lanyardprops = {
  lanyard: LanyardData;
};

export default function Index(prop: lanyardprops) {
  const { data: lanyard } = useLanyard(DISCORD_ID, {
    initialData: prop.lanyard,
  });

  return (
    <div className="text-white antialiased bg-ThemeDark">
      <Head>
        <title>jaylen.lol | Main Page</title>
        <link rel="icon" href={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}`} />
      </Head>

      <main>
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="pt-2 flex items-center justify-between hover:animate-pulse">
              <img
                className="h-12 w-12 rounded-full"
                src={`https://cdn.discordapp.com/avatars/${lanyard?.discord_user.id}/${lanyard?.discord_user.avatar}`}
                alt="picture of me :)"
              />
              <h1 className="ml-2.5 font-mono text-xl">
                {lanyard?.discord_user.username}
              </h1>
            </div>
          </div>
        </nav>

        <div className="bg-transparent max-w-4xl mx-auto mb-6 rounded-lg px-28 py-3 text-left">
          <h1 className="text-6xl font-extrabold py-2 mb-2">Jaylen</h1>
          <span className="text-lg font-semibold w-auto">
            <div className="mb-4">
              Hey there, I'm{" "}
              <span className="font-extrabold text-Blurple">
                {lanyard?.discord_user.username}
              </span>
              <span className="text-sm font-extrabold"> [cis male]</span>.
              Currently living at{" "}
              <span className="font-extrabold text-[#ADD8E6]">
                {lanyard?.kv.location}
              </span>
              . I'm an aspiring Software Developer and currently learning/coding{" "}
              <span className="font-extrabold">
                <span className="text-[#4B8BBE]">Pyt</span>
                <span className="text-[#FFD43B]">hon</span>
              </span>
              , <span className="font-extrabold text-[#e34c26]">HTML</span>,{" "}
              <span className="font-extrabold text-[#F0DB4F]">Javascript</span>,{" "}
              <span className="font-extrabold text-[#ADD8E6]">C & C++</span> &
              more! On my free time I usually do work or try to learn coding
              languages. I'm still rusty at coding but I'm trying my best to
              understand everything.
            </div>
            <h1 className="text-xl font-extrabold py-2 mb-1">
              You might be asking why I made this?
            </h1>
            <span className="text-lg font-semibold w-auto">
              Yeah, you might be in confusion asking why I did this for no
              reason. Honestly, wanted to try making something cool and
              redesigning every once in awhile so I become good with this. So
              every once and awhile, this website will update & it'll be
              different throughout the process.
            </span>
            <hr className="mt-8 mb-6 border-gray-400 dark:border-gray-500" />
            <h1 className="text-3xl font-extrabold pb-2 mb-2">
              Discord Status
            </h1>
            <img
              className="mx-auto shadow-xl"
              src="https://lanyard.cnrad.dev/api/363571068012593156?hideDiscrim=true&idleMessage=I'm%20most%20likely%20sleeping%20or%20doing%20nothing"
            />
          </span>
        </div>
      </main>
      <footer className="bg-[#16171b] font-semibold text-center shadow-xl text-white">
        <div className="mt-10 py-4">
          <span className="text-2xl">made with tailwindcss, nextjs & ❤️</span>
        </div>
      </footer>
    </div>
  );
}
