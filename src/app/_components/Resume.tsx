import { Button, HeaderLogo } from "@/components";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/icons";
import Image, { type ImageProps } from "next/image";
import SocialLink from "./SocialLink";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          unoptimized
          fill
          className="rounded-full"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

const Resume = () => {
  const resume: Role[] = [
    {
      company: "TravelPerfect",
      title: "Founder & Creator",
      logo: "/favicon.ico",
      start: "2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Axio",
      title: "Software Engineer II & Scrum Master",
      logo: "https://travelperfect-bucket.s3.us-west-1.amazonaws.com/icons/AxioIcon",
      start: "2022",
      end: "2023",
    },
    {
      company: "Mural",
      title: "Lead Frontend Engineer",
      logo: "https://travelperfect-bucket.s3.us-west-1.amazonaws.com/icons/MuralIcon",
      start: "2021",
      end: "2022",
    },
  ];

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        {/* Button to download CV */}
        <a
          download
          href="/resume/Schwartz, Spenser - Resume.pdf"
          target="_blank"
        >
          <Button variant="secondary" className="group mt-6 w-full">
            Download CV
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </Button>
        </a>
      </div>

      {/* Social Links */}
      <div className="">
        <div className="lg:pl-10">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>

            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spenser.m.schwartz@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spenser.m.schwartz@gmail.com
            </SocialLink>

            <div className="mt-8 flex justify-center border-t border-zinc-100 pt-8 align-bottom dark:border-zinc-700/40">
              <HeaderLogo />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
