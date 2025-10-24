const qualifications = [
  {
    category: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "Go",
      "Rust",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Spring Boot",
      "NestJS",
      "Prisma",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Firebase"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Google Cloud",
      "CI/CD Pipelines",
      "Linux",
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Agile/Scrum", "Jira"],
  },
  {
    category: "Testing & Quality Assurance",
    skills: [
      "Jest",
      "Mocha",
      "Cypress",
      "Playwright",
      "JUnit",
      "Selenium",
      "TDD",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time Management",
    ],
  },
  {
    category: "Other",
    skills: [
      "REST APIs",
      "Microservices",
      "System Design",
      "Data Structures & Algorithms",
      "Security Best Practices",
    ],
  },
];

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function JobQualifications() {
  return (
    <section className="py-6">
      <h4 className="mb-2 font-semibold text-xl tracking-tight lg:text-2xl">
        Your qualifications for this job
      </h4>
      <div className="mt-4 space-y-4">
        {qualifications.slice(0, 3).map((q) => (
          <div key={q.category}>
            <h5 className="mb-2 font-semibold">{q.category}</h5>
            <div className="flex flex-wrap gap-2">
              {q.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button>View all qualifications</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="md:text-xl lg:text-2xl">
                Qualifications
              </DialogTitle>
              <DialogDescription>
                These are all the qualifications for this job
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-72">
              <div className="space-y-4">
                {qualifications.map((q) => (
                  <div key={q.category}>
                    <h5 className="mb-2 font-semibold">{q.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {q.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
