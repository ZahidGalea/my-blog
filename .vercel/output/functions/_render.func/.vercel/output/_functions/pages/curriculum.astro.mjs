import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CZbmP_ed.mjs';
import 'kleur/colors';
/* empty css                                      */
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AT8tak2v.mjs';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Curriculum = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Zahid Galea - Welcome";
  const identification = {
    name: "Zahid Galea",
    location: "Swieqi, Malta",
    mail: "zahidale.zg@gmail.com",
    phone: "+356 9981 7146",
    linkedin: "linkedin.com/in/zahidgalea"
  };
  const experiences = [
    {
      company: "ACID Labs",
      position: "Lead of Data Engineering",
      location: "Santiago, Chile (Remote)",
      period: "April 2023\u2013Present",
      description: "Data Engineer with 6 years of experience in technology. Specialized in designing and optimizing data solutions, with strong expertise in cloud computing (GCP). Complementary skills in Full Stack development and DataOps. Pioneer in implementing AI Generative practices.",
      projects: [
        {
          name: "Enterprise Data Architecture",
          description: "Led the development and data architecture of the consultancy's own enterprise data, focusing on NoOps tools specific to the GCP suite.",
          technologies: [
            {
              name: "Google Cloud Platform",
              objective: "Cloud Functions, Cloud Run, Cloud Storage"
            },
            {
              name: "Dataplex",
              objective: "Data governance"
            },
            {
              name: "Dataform",
              objective: "ELT processes"
            },
            {
              name: "Looker Studio",
              objective: "Visualization"
            },
            {
              name: "Bitbucket Pipelines",
              objective: "CI/CD"
            },
            {
              name: "Terraform",
              objective: "Infrastructure as Code"
            }
          ]
        },
        {
          name: "Coca-Cola Chile Logistics Project",
          description: "Tech lead on a logistics-oriented project for Coca-Cola Chile, aimed at flattening the delivery curve in B2B.",
          technologies: [
            {
              name: "AWS",
              objective: "Cloud infrastructure"
            },
            {
              name: "CloudFormation",
              objective: "Infrastructure as Code"
            },
            {
              name: "Lambda",
              objective: "Serverless computing"
            },
            {
              name: "Athena",
              objective: "Query service"
            },
            {
              name: "DynamoDB",
              objective: "NoSQL database"
            }
          ]
        },
        {
          name: "Leadership & Certification",
          description: "Led the attainment of 4 certifications as GCP Professional Data Engineer, leading Data Analytics specialization. Consultatively led 20+ data engineers, participated in performance evaluations and career roadmap development."
        },
        {
          name: "AI Innovation & Pre-sales",
          description: "Developed multiple POCs in pre-sales and research phases, creating new services within the organization specifically in AI technologies.",
          technologies: [
            {
              name: "OpenAI",
              objective: "AI models"
            },
            {
              name: "Google AI",
              objective: "AI models"
            },
            {
              name: "Langraph",
              objective: "AI framework"
            },
            {
              name: "LlamaIndex",
              objective: "AI framework"
            },
            {
              name: "KSQL",
              objective: "Streaming architecture"
            },
            {
              name: "Apache Hudi",
              objective: "Lake House technology"
            }
          ]
        }
      ]
    },
    {
      company: "ACID Labs",
      position: "Data Engineer Senior",
      location: "Santiago, Chile",
      period: "February 2022\u2013April 2023",
      description: "Worked with Walmart Chile on data infrastructure modernization and automation.",
      projects: [
        {
          name: "Data Migration & Architecture",
          description: "Migrated manual data loading processes from MSSQL Server to automated process using Docker & Kubernetes, moving data to corporate BigQuery. Designed data architecture for operations team.",
          technologies: [
            {
              name: "Docker",
              objective: "Containerization"
            },
            {
              name: "Kubernetes",
              objective: "Container orchestration"
            },
            {
              name: "BigQuery",
              objective: "Data warehouse"
            },
            {
              name: "dbt",
              objective: "ELT transformations"
            },
            {
              name: "Microsoft Azure",
              objective: "Cloud platform"
            },
            {
              name: "Jenkins",
              objective: "CI/CD"
            }
          ]
        }
      ]
    },
    {
      company: "Kavak.com",
      position: "Senior Software Engineer",
      location: "Santiago, Chile",
      period: "October 2022\u2013March 2023",
      description: "Freelance position focused on automation and optimization.",
      projects: [
        {
          name: "Tableau Access Management",
          description: "Developed automated GitOps-based system for Tableau access management using CI/CD practices.",
          technologies: [
            {
              name: "Tableau API",
              objective: "Access control"
            },
            {
              name: "GitOps",
              objective: "Infrastructure management"
            }
          ]
        },
        {
          name: "AWS Optimization",
          description: "Designed and implemented small file compaction processes over CDC S3 Files, improving system performance and reducing costs. Optimized AWS Glue processes.",
          technologies: [
            {
              name: "AWS S3",
              objective: "Storage"
            },
            {
              name: "AWS Glue",
              objective: "ETL service"
            }
          ]
        }
      ]
    },
    {
      company: "WOM",
      position: "Data Engineer",
      location: "Santiago, Chile",
      period: "October 2020\u2013February 2022",
      description: "Focus on logistics automation and data warehouse migration.",
      projects: [
        {
          name: "Logistics Automation",
          description: "Developed automated processes for the logistics department, enhancing operational efficiency.",
          technologies: [
            {
              name: "Apache Airflow",
              objective: "Process orchestration"
            },
            {
              name: "Cloud Functions",
              objective: "Serverless computing"
            },
            {
              name: "DBT",
              objective: "ELT tool"
            }
          ]
        },
        {
          name: "Data Warehouse Migration",
          description: "Consulted on migration of on-premises data warehouse from Netezza to GCP and IBM DataStage",
          technologies: [
            {
              name: "GCP",
              objective: "Cloud platform"
            },
            {
              name: "IBM DataStage",
              objective: "Data integration"
            },
            {
              name: "Netezza",
              objective: "Legacy data warehouse"
            }
          ]
        }
      ]
    }
  ];
  const education = [
    {
      institution: "Duoc UC",
      degree: "Engineer's degree, Information Technology",
      location: "Santiago, Chile",
      status: "2020 - Unfinished"
    },
    {
      institution: "CaleiSeis Foundation",
      degree: "Machine Learning Specialization",
      location: "Santiago, Chile",
      year: "2018"
    },
    {
      institution: "Desaf\xEDo Latam",
      degree: "Fullstack Bootcamp",
      location: "Santiago, Chile",
      year: "2018"
    },
    {
      institution: "Universidad Central de Venezuela",
      degree: "Geography licenciature",
      location: "Caracas, Venezuela",
      status: "2015 - Unfinished"
    }
  ];
  const languages = [
    {
      language: "Spanish",
      level: "Native"
    },
    {
      language: "English",
      level: "B2"
    }
  ];
  const certifications = [
    {
      name: "Google Cloud Certified - Professional Data Engineer",
      period: "Sep 2023 - Sep 2025",
      url: "https://google.accredible.com/6df3e512-380a-4670-b1ff-177e304e6d3a"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center justify-center align-middle max-w-3xl p-2 mt-5 mx-auto"> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate` <a href="/Zahid Galea - CV English.pdf" download="Zahid Galea - CV English.pdf">Download PDF for more Details</a> ` })} </div> <div class="leading-normal tracking-normal"> <div class="container mx-auto p-5"> <div class="flex flex-col md:flex-col"> <div class="w-full"> <div class="p-4 text-center"> <h1 class="text-3xl font-bold mb-2">${identification.name}</h1> <p class="mb-2">${identification.location}</p> <p class="mb-2"> <a${addAttribute(`https://${identification.linkedin}`, "href")} target="_blank" class="text-blue-500">${identification.linkedin}</a> </p> <p class="mb-2">${identification.phone}</p> <a${addAttribute(`mailto:${identification.mail}`, "href")} class="text-blue-500">${identification.mail}</a> </div> </div> <div class="w-full"> <div class="p-6"> <h2 class="text-3xl font-bold mb-6 text-center pt-5">Professional Experience</h2> <div class="grid md:grid-cols-1 gap-4 mb-5"> ${experiences.map((experience, index) => renderTemplate`<div> <h3 class="text-2xl font-bold">${experience.company} — ${experience.position}</h3> <p class="text-gray-600">${experience.location} | ${experience.period}</p> <p class="mt-2">${experience.description}</p> ${experience.projects && experience.projects.length > 0 && renderTemplate`<div class="mt-4"> ${experience.projects.map((project) => renderTemplate`<div class="mb-4"> <h5 class="font-bold">${project.name}</h5> <p class="pl-5 italic">${project.description}</p> ${project.technologies && project.technologies.length > 0 && renderTemplate`<div> <h1 class="text-1xl font-bold m-2">
Technologies:</h1> <ul class="list-disc ml-5"> ${project.technologies.map((tech) => renderTemplate`<li>${tech.name}${tech.objective && ` - ${tech.objective}`}</li>`)} </ul> </div>`} </div>`)} </div>`} ${index < experiences.length - 1 && renderTemplate`<hr class="my-6 border-t border-gray-300">`} </div>`)} </div> <h2 class="text-3xl font-bold mb-3 text-center pt-5">Education</h2> <div class="mb-5"> ${education.map((edu, index) => renderTemplate`<div class="mb-3"> <h3 class="font-bold">${edu.institution}</h3> <p>${edu.degree}</p> <p class="text-gray-600">${edu.location} | ${edu.year || edu.status}</p> ${index < education.length - 1 && renderTemplate`<hr class="my-3 border-t border-gray-200">`} </div>`)} </div> <h2 class="text-3xl font-bold mb-3 text-center pt-5">Professional Certifications</h2> <ul class="list-disc ml-5 mb-5"> ${certifications.map((cert) => renderTemplate`<li> <a${addAttribute(cert.url, "href")} target="_blank" class="text-blue-500"> ${cert.name}. ${cert.period} </a> </li>`)} </ul> <h2 class="text-3xl font-bold mb-3 text-center pt-5">Languages</h2> <ul class="list-disc ml-5 mb-5"> ${languages.map((lang) => renderTemplate`<li>${lang.language} - ${lang.level}</li>`)} </ul> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/zahidgaleajorge/Projects/personal/my-blog/src/pages/curriculum.astro", void 0);

const $$file = "/Users/zahidgaleajorge/Projects/personal/my-blog/src/pages/curriculum.astro";
const $$url = "/curriculum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Curriculum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
