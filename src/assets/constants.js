import { Twitter } from "@mui/icons-material";
import { ReactComponent as DocBuddy } from "./images/docquery_demo.svg";
import { ReactComponent as ImageCaption } from "./images/image-caption-bg.svg";
import { ReactComponent as CodeGenerator } from "./images/code-gen-bg.svg";
import { ReactComponent as MyBuddy } from "./images/mybuddy-bg.svg";
import { ReactComponent as AiImage } from "./chatIcons/Aisvg.svg";
import { LinkdinIcon } from "./icons";

export const playgroundrs = [
  {
    title: "Document summary and query",
    content:
      "Automatically summarize documents and answer questions based on the content.",
    Image: () => <DocBuddy />,
    label: "DocBuddy",
    link: "/doc-buddy",
    disabled: false,
  },
  {
    title: "'Ai' Based Chat",
    content:
      "Automated Customer Service with an AI Agent and answer questions based on the content.",
    Image: () => <AiImage />,
    label: "Chat",
    link: "/chat",
    disabled: true,
  },
  {
    title: "Image Captioning",
    content:
      "Get context and descriptions for images using advanced image recognition techniques.",
    Image: () => <ImageCaption className="-ml-[10.5rem]" />,
    label: "Image Caption",
    link: "/image-caption",
    disabled: true,
  },
  {
    title: "Code Generator",
    content:
      "Generate code snippets for various programming languages and use cases.",
    Image: () => <CodeGenerator />,
    label: "Code Generator",
    link: "/code-generator",
    disabled: true,
  },
  {
    title: "myBuddy",
    content:
      "Interact with a conversational AI for various tasks and information retrieval. Coming soon",
    Image: () => <MyBuddy />,
    label: "myBuddy",
    link: "/my-buddy",
    disabled: true,
  },
];

export const aboutUs = [
  {
    label: "Services",
    link: "https://www.openturf.in/services/",
  },
  {
    label: "Projects",
    link: "https://www.openturf.in/recent-projects/",
  },
  {
    label: "Company",
    link: "https://www.openturf.in/company/",
  },
  {
    label: "Resources",
    link: "https://www.openturf.in/nibbles/",
  },
  {
    label: "Contact Us",
    link: "https://www.openturf.in/contact-us/",
  },
];

export const followUs = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/openturftechnologies/",
    icon: <LinkdinIcon />,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/OpenTurfTech",
    icon: <Twitter className="text-blue-500" />,
  },
];
