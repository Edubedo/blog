import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/PROFILE.jfif"
          alt="Profile photo"
          className="block mx-auto mt-0 mb-10 bg-gray-100 rounded-full lg:mt-5 lg:mb-5 sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Eduardo Yair Hernández Escobedo
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Manzanillo, México · ezescobedo27@gmail.com
        </p>
        <p>
          Software Developer passionate about crafting impactful solutions. Currently pursuing a bachelor’s degree in software engineering at the University of Colima, with a strong focus on continuous learning and professional growth.
        </p>
        <h2 className="mt-8 text-xl font-medium tracking-tight">Professional Experience</h2>
        <p>
          <strong>IT Arkon</strong><br />
          Web developer<br />
          Manzanillo, México<br />
          July 2023 – Present
        </p>
        <ul>
          <li>Designed and developed new framework modules, contributing to the system’s scalability and performance.</li>
          <li>Resolved complex bugs and optimized existing features to enhance system stability and efficiency.</li>
          <li>Implemented best practices with Husky to enforce commit standards and improve branch management.</li>
          <li>Utilized technologies such as React, Node.js, Tailwind, PostgreSQL, Git, GitHub, and Trello to deliver high-quality solutions.</li>
          <li>Worked collaboratively in an agile team environment, improving communication and problem-solving skills.</li>
        </ul>
        <h2 className="mt-8 text-xl font-medium tracking-tight">Education</h2>
        <p>
          <strong>Universidad de Colima</strong><br />
          Ingeniería de Software<br />
          Manzanillo, México<br />
          August 2024 - Present
        </p>
        <p>
          <strong>Universidad de Colima</strong><br />
          Técnico Analista Programador<br />
          Manzanillo, México<br />
          August 2021 - June 2024
        </p>
        <h2 className="mt-8 text-xl font-medium tracking-tight">Languages</h2>
        <p>
          Spanish: Native<br />
          English: B1
        </p>
        <h2 className="mt-8 text-xl font-medium tracking-tight">Additional Skills</h2>
        <ul>
          <li>Project management</li>
          <li>Team collaboration</li>
          <li>Adaptability</li>
          <li>Problem-Solving</li>
        </ul>
      </div>
    </section>
  );
}