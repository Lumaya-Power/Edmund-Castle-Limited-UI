import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { ToolItem } from "@/types/howWeWork";
import "./ToolsCollaboration.css";

interface ToolsCollaborationProps {
  eyebrow: string;
  title: string;
  text: string;
  imageUrl: string;
  caption: string[];
  tools: ToolItem[];
  panelTitle: string;
  panelItems: string[];
}

export function ToolsCollaboration({
  eyebrow,
  title,
  text,
  imageUrl,
  caption,
  tools,
  panelTitle,
  panelItems,
}: ToolsCollaborationProps) {
  const style = { "--tools-image": `url("${imageUrl}")` } as CSSProperties;

  return (
    <section className="tools" aria-labelledby="tools-title">
      <div className="tools__media" style={style} aria-hidden="true">
        <p className="tools__caption">
          {caption.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <div className="tools__content">
        <div className="tools__main">
          <SectionHeading eyebrow={eyebrow} title={title} id="tools-title" size="md" />
          <p className="tools__text">{text}</p>

          <ul className="tools__list">
            {tools.map((tool) => (
              <li key={tool.name} className="tools__tool">
                {tool.logoUrl && (
                  <img className="tools__logo" src={tool.logoUrl} alt="" width={28} height={28} />
                )}
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tools__panel">
          <h3 className="tools__panel-title">{panelTitle}</h3>
          <ul className="tools__checks">
            {panelItems.map((item) => (
              <li key={item}>
                <span className="tools__check">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}