import { GraduationCap } from "lucide-react";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import type { FounderInfo, StoryInfo } from "@/types/about";
import "./FounderStory.css";

interface FounderStoryProps {
  founder: FounderInfo;
  story: StoryInfo;
}

export function FounderStory({ founder, story }: FounderStoryProps) {
  return (
    <section className="founder-story" aria-label="Our founder and our story">
      <div className="container founder-story__inner">
        <figure className="founder-story__card">
          <div
            className="founder-story__photo"
            role="img"
            aria-label={`Portrait of ${founder.name}`}
            style={{ backgroundImage: `url(${founder.imageUrl})` }}
          />
          <figcaption className="founder-story__caption">
            <blockquote className="founder-story__quote">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <p className="founder-story__name">{founder.name}</p>
            <p className="founder-story__short-role">{founder.role}</p>
          </figcaption>
        </figure>

        <div className="founder-story__bio">
          <SectionHeading eyebrow="Our founder" title={founder.name} id="founder-title" />
          <p className="founder-story__role">
            {founder.role}, {siteConfig.name}
          </p>

          {founder.bio.map((paragraph) => (
            <p key={paragraph} className="founder-story__text">
              {paragraph}
            </p>
          ))}

          <ul className="founder-story__credentials">
            {founder.credentials.map((credential) => (
              <li key={credential.title} className="founder-story__credential">
                <GraduationCap size={30} strokeWidth={1.25} aria-hidden="true" />
                <p className="founder-story__credential-title">{credential.title}</p>
                <p className="founder-story__credential-school">{credential.institution}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="founder-story__story">
          <SectionHeading eyebrow={story.eyebrow} title={story.title} id="story-title" />
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="founder-story__text">
              {paragraph}
            </p>
          ))}
          <Button to={story.cta.to} variant="outline">
            {story.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}