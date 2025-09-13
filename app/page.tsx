"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaWhatsapp } from "react-icons/fa6";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-yellow-100">
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Bharath Krishna
            </h1>
            <h2 className="text-2xl mb-6">
              QA/Software Engineer
            </h2>
            <p className="text-lg mb-6 max-w-xl mx-auto md:mx-0">
                Strong bias toward learning by doing.Timely motivated.
              </p>
            <div className="p-2">
                <Badge variant="outline">Java</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Selenium</Badge>
                <Badge variant="outline">TestNG</Badge>
                <Badge variant="outline">JUnit</Badge>
                <Badge variant="outline">JMeter</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Git</Badge>
          </div>
            
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
                  href="mailto:bharathkrishnakichu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Chat
                </Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-yellow-50">
            <Image
              src="\IMG_20221016_175013.jpg"
              alt="Bharath Krishna"
              fill
              className="object-scale-down object-center"
              priority
            />
          </div>
        </section>
        <section>
          <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Selenium Scripts</h3>
              <p className="mb-4 mt-6">
                Developed comprehensive automated test suite for an e-commerce platform using Selenium, TestNG, and Maven.
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
              <p className="mb-4">
                Ask Lord Krishna your deepest questions and receive divine guidance through this interactive web application(TTS + Text).
              </p>
              <Button variant="outline" className="w-10 mb-4 rounded-full" asChild>
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
