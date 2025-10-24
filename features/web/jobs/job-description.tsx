"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function JobDescription() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="space-y-6 py-6">
      {/* about */}
      <div className="flex flex-col gap-2">
        <h4 className="mb-2 font-semibold text-xl tracking-tight lg:text-2xl">
          About ABC Legal Services:
        </h4>
        <p className="text-primary/80">
          ABC Legal Service is proud to be the national leader in service of
          process. We are growing and are looking for talented new team members
          to support our growth and solve exciting challenges!
        </p>
        <p className="text-primary/80">
          We are a team of over 700 with offices in Los Angeles, Phoenix,
          Oklahoma City, Brooklyn, Chicago, and more. Seattle is our home and
          headquarters. We've been successful in this unique business for over
          30 years and we continue to advance our technology and business
          processes to remain years ahead of what our competition is able to
          offer.
        </p>
      </div>
      {/* overview */}
      <div className="flex flex-col gap-2">
        <h4 className="mb-2 font-semibold text-xl tracking-tight lg:text-2xl">
          Job Overview:
        </h4>
        <p className="text-primary/80">
          The e-File Specialist reviews and files legal documents utilizing
          online platforms and tools developed by ABC Legal. This role works
          closely with the e-Fulfillment and e-Filing team to collaborate on
          projects, resolve issues as they arise and meet common goals.{" "}
          <span className="font-semibold">
            This position is remote but must be located in Puerto Rico.
          </span>
        </p>
      </div>
      {/* responsibilities */}
      {showAll && (
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-xl tracking-tight">
            Key Responsibilities:
          </h3>
          <ul className="list-disc space-y-1 pl-6 text-primary/80">
            <li>
              Review and file legal documents using internal systems and email
            </li>
            <li>
              Participate in ongoing training to expand knowledge of industry
              and process
            </li>
            <li>Investigate discrepancies as they arise</li>
            <li>Complete additional projects as assigned</li>
          </ul>
        </div>
      )}
      {/* qualifications */}
      {showAll && (
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-xl tracking-tight">
            Qualifications:
          </h3>
          <ul className="list-disc space-y-1 pl-6 text-primary/80">
            <li>No experience necessary; data entry experience a plus</li>
            <li>Tech experience is strongly preferred</li>
            <li>Must be able to read, write, and speak English</li>
            <li>High school diploma or GED required</li>
            <li>Ability to perform repetitive tasks with accuracy</li>
            <li>Exceptional attention to detail</li>
            <li>Desire and ability to be a team player</li>
            <li>Experience and basic proficiency with Microsoft Office</li>
            <li>Typing speed of at 50 to 60 wpm</li>
            <li>
              Proficiency in English, including strong writing and communication
              skills, is essential for this role
            </li>
          </ul>
        </div>
      )}
      {/* why join us */}
      {showAll && (
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-xl tracking-tight">Why Join Us?</h3>
          <p className="text-primary/80">
            We know that a company's success starts with its employees. We also
            know that an individual's success starts with the right career
            opportunity. Join our team today!
          </p>
        </div>
      )}
      {/* benefits */}
      {showAll && (
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-xl tracking-tight">Benefits:</h3>
          <ul className="list-disc space-y-1 pl-6 text-primary/80">
            <li>Retirement plan with company matching</li>
            <li>Medical, Dental, and Vision insurance</li>
            <li>PTO</li>
            <li>7 paid holidays per year</li>
            <li>4 Floating holidays</li>
            <li>Referral program</li>
          </ul>
        </div>
      )}
      {/* starting pay and schedule */}
      {showAll && (
        <div className="flex flex-col gap-2">
          <p className="text-primary/80">
            <span className="font-semibold">Starting Pay</span>: $12.00 to
            $14.00 per hour
          </p>
          <p className="text-primary/80">
            <span className="font-semibold">Schedule</span>: Full-time, Monday
            through Friday
          </p>
        </div>
      )}
      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? "View less" : "View all"}
      </Button>
    </section>
  );
}
