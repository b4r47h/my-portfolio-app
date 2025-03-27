import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Bharath Krishna</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">Software Automation Tester</h2>
          <p className="text-lg mb-6">
            Passionate about ensuring software quality through automated testing.
            Specializing in end-to-end testing, API automation, and continuous integration.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://mail.google.com/mail/?view=cm&to=bharathkrishnakichu@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <MailIcon className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/b4r47h" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/b4r47h" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://x.com/daphukyumean" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="mr-2 h-4 w-4" />
                X
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQHCctoEvrYEGw/profile-displayphoto-shrink_800_800/B56ZXSRwpBHEAc-/0/1742989627313?e=1748476800&v=beta&t=SRcg1FrB706wizMhi8hbYywgY727Yf3rI_z6OJY1Dvo"
            alt="Bharath Krishna"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
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
            <h3 className="text-xl font-semibold mb-4">DevOps & Project Management Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Docker</Badge>
              <Badge>Git</Badge>
              <Badge>JIRA</Badge>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">E-commerce Test Suite</h3>
            <p className="text-muted-foreground mb-4">
              Developed comprehensive automated test suite for an e-commerce platform using Selenium, TestNG, and Maven.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="https://github.com/b4r47h/eComT-scripts" target="_blank" rel="noopener noreferrer">
                View Details
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}