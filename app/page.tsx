"use client";

import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Bharath Krishna
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Software Automation Tester
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
              Dedicated to delivering high-quality software through innovative automation solutions.
              Expert in crafting robust test frameworks for E2E testing, API validation, and CI/CD pipelines.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button asChild>
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
                  href="https://github.com/b4r47h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://linkedin.com/in/b4r47h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://medium.com/@b4r47h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookIcon className="mr-2 h-4 w-4" />
                  Medium
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://x.com/daphukyumean"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="mr-2 h-4 w-4" />
                  X
                </Link>
              </Button>

            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="\IMG_20221016_175013.jpg"
              alt="Bharath Krishna"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Test Automation Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Selenium Java</Badge>
                <Badge>TestNG</Badge>
                <Badge>JUnit</Badge>
                <Badge>JMeter</Badge>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML</Badge>
                <Badge>JS</Badge>
                <Badge>Python</Badge>
                <Badge>Java</Badge>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">DevOps & Project Management</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Docker</Badge>
                <Badge>Git</Badge>
                <Badge>JIRA</Badge>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <Script
            src="https://substack.com/embedjs/embed.js"
            strategy="afterInteractive"
            async
            charSet="utf-8"
          />
          <h2 className="text-3xl font-bold text-center mb-10">Beyond The Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="substack-post-embed">
                <p lang="en">Ivan Shishkin knew how to paint the woods.</p>
                <p> - M. E. Rothwell</p>
                <a data-comment-link href="https://substack.com/@merothwell/note/c-111730747">
                  Read on Substack
                </a>
              </div>
            </Card>
            <Card className="p-6">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">&quot;The high energy state is a relaxed state of readiness. The infant brain with a very high metabolic rate easily goes into complete relaxed sleep and replenishes its energy so it&#39;s ready for another episode of very intense activity.&quot; Ray Peat 
              <a href="https://t.co/rUh4zozPCq">https://t.co/rUh4zozPCq</a>
              </p>&mdash; Master Metabolism (@lowmegatron) 
              <a href="https://twitter.com/lowmegatron/status/1898297743988384164?ref_src=twsrc%5Etfw">
              March 8, 2025</a></blockquote> <Script async src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"/>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Test Suite</h3>
              <p className="text-gray-600 mb-4">
                Developed comprehensive automated test suite for an e-commerce platform using Selenium, TestNG, and Maven.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href="https://github.com/b4r47h/eComT-scripts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Krishna's Divine Counsel</h3>
              <p className="text-gray-600 mb-4">
                Ask Lord Krishna your deepest questions and receive divine guidance through this interactive web application.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href="https://kanha-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </Link>
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
