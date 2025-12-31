"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaWhatsapp } from "react-icons/fa6";
import {
  Book,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';


export default function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-violet-900 to-slate-950 text-purple-200 font-mono">
      <div className="container mx-auto px-2 py-12 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:mr-72 rounded-full overflow-hidden">
            <Image
              src="/2.jpeg"
              alt="Bharath Krishna"
              fill
              className="object-center object-cover"
              priority
            />
          </div>
          {/* Text */}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Bharath Krishna
            </h1>
            <h2 className="text-2xl mb-6 sm:mb-2">
              QA Automation Engineer
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/b4r47h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" className='hover:bg-blue-500 ' asChild>
                <Link
                  href="https://linkedin.com/in/b4r47h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" className='hover:bg-red-400 ' asChild>
                <Link
                  href="mailto:bharathkrishnakichu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://docs.google.com/document/d/1mXb9L_kU-p9ugZs86iweVIolRMwBwX0VMhoDrAKCbz0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Book className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" className='hover:bg-green-500 ' asChild>
                <Link
                  href="https://wa.me/+918589952902"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Chat
                </Link>
              </Button>
            </div>
            <p className="text-lg my-12 max-w-xl mx-auto md:mx-0">
              Strong bias toward learning by doing.
              
              Passionate about hardware, software, and automation.
              
            </p>
            <div className="p-3 mt-8 grid grid-cols-3 md:grid-rows-1">
              <Badge variant="outline">Selenium</Badge>
              <Badge variant="outline">NextJS</Badge>
              <Badge variant="outline">TestNG</Badge>
              <Badge variant="outline">Playwright</Badge>
              <Badge variant="outline">Cypress</Badge>
              <Badge variant="outline">JIRA</Badge>
              <Badge variant="outline">JMeter</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">CI/CD</Badge>
            </div>
          </div>

          {/* Profile Image */}

        </section>
        <section>
          <h2 className="text-3xl text-center font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Automation Scripts</h3>
              <p className="mb-4 mt-6 text-center">
                Developed comprehensive automated test suite for an e-commerce platform using Selenium JAVA, TestNG, and Maven.
              </p>
              <Button variant="outline" className="w-full mt-8" asChild>
                <Link
                  href="https://github.com/b4r47h/eComT-scripts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </Link>
              </Button>
            </Card>
            <Card className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Krishna's Divine Counsel</h3>
              <p className="mb-4 text-center">
                Ask Lord Krishna your deepest questions and receive divine guidance through this interactive web application.
              </p>
              <Button variant="default" className="w-10 mb-4 animate-rgb-pulse rounded-full" asChild>
                <Link
                  href="https://kanha-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href="https://github.com/b4r47h/kanha-web-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </Link>
              </Button>
            </Card>
          </div>
          <div className="mt-6  mx-4 backdrop-blur-3xl rounded-xl text-center italic text-xs p-4 bg-inherit">
            <p lang="en">
              "Reason, or the ratio of all we have already known, is not
              the same that it shall be when we know more. The bounded is
              loathed by its possessor. The same dull round, even of a universe, would soon become a mill with complicated wheels. If
              the many become the same as the few when possess'd,  More
              More ! is the cry of a mistaken soul; less than All cannot satisfy Man."</p>
              <p className="font-bold"> ~ W. Blake</p>

          </div>
        </section>
      </div>
    </div>
  );
}
