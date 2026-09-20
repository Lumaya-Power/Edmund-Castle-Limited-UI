import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ToolItem {
  name: string;
  /** Optional logo, e.g. "/images/tools/revit.svg". The name is always shown. */
  logoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MapNode {
  name: string;
  note: string;
  /** Position inside the 460 x 260 map drawing */
  x: number;
  y: number;
  placement: "left" | "right";
}