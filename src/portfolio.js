/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Arjun Balaji",
	logo_name: "ArjunBalaji",
	nickname: "arjun37602",
	subTitle:
		"A passionate high schooler striving to make a tangible impact on society using the wonders of technology",
	resumeLink:
		"https://linkedin.com/arjun-balaji",
	portfolio_repository: "https://github.com/arjun37602",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/arjun376029",
	linkedin: "https://www.linkedin.com/in/arjun-balaji/",
	gmail: "arjun37602@gmail.com",
	instagram: "https://www.instagram.com/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience working with Computer Vision and Statistical Data Analysis Projects",
        "⚡ Skilled at predicting, modelling, and analyzing data in an accurate manner"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
		  }
		}
      ]
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive websites using React, Django, Html, CSS, and JavaScript ",
        "⚡ Developing mobile applications using React Native, Java (Android Studio), Python (PyQt) ",
        "⚡ Creating application backend in Node, Express, Flask, and Java"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#2C8EBB"
          }
        }
      
      
      ]
    },
    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
       
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
       
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
       
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
       
       
      ]
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
     
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
     
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
     
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Irvington High School",
      subtitle: "High School Diploma",
      logo_path: "viking.png",
      alt_name: "",
      duration: "2018 - Present",
      descriptions: [
    "⚡ President of Irvington Hack Club",
		"⚡ Officer in Computer Science Club and Bring Change to Mind Club",
    "⚡ JV Soccer Team (10th and 11th)",
    "⚡ AP Classes and Dual Enrollment: AP Computer Science A, AP Biology, AP US History, AP English Language and Composition, AP Statistics, Microeconomics, Macroeconomics, Digital Photography, Spanish 3, and Entrepreneurship "
       
      ],
      website_link: "https://ihs-fusd-ca.schoolloop.com/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
		
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		
		
		{
			title: "Python For Everybody Specialization",
			subtitle: "- Charles Russell Severances",
			logo_path: "mich.jpg",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups, non-profit organizations, and universities as a ML Analyst, Software Engineer, or Part of the Board of Directors (Leadership).",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work | Internships",
			experiences: [
				{
					title: "Software Engineering Intern",
					company: "Stria Labs LLC",
					company_url: "https://www.stria.org/",
					logo_path: "legato_logo.png",
					duration: "July 2020 - September 2020",
					location: "Bakersfield, CA (Remote Internship)",
					description:
						"Part of my work involves reaching out to blind centers, obtaining subsidization from multiple states, and getting grants for our new product. Worked with the software engineering team to create a Band that enables blind people to walk in a straight line, preventing them from veering. In addtion, I helped in the development of the Stria App whose goal is to leverage the cloud to develop new veering thresholds and seamlessly integrate walking navigation into the band.",
					color: "#0879bf",
				}
			],
		},
		{
			title: "Research",
			experiences: [
				{
					title: "Research Affliate",
					company: "University of California - Berkeley ",
					company_url: "https://www.berkeley.edu/",
					logo_path: "delhivery_logo.png",
					duration: "May 2020 - July 2020",
					location: "Berkeley, CA (Remote)",
					description:
						"- Utilized Python and Scikit-Learn to conduct machine learning analysis on voter data in order to increase turnout among minority and low propensity voters.  - Created a prediction model using Scikit Learn to predict voter turnout and analyze data from csv files. - Partially used R to randomize data and send out letters prompting people to vote. Later analyzed data to determine any patterns and the effect it had on voter turnout. - Was the only high school student in a team of graduates and undergraduate students", 
					color: "#ee3c26",
				},
				{
					title: "Research Assistant",
					company: "University of Michigan - Ann Harbor",
					company_url:
						"https://umich.edu/",
					logo_path: "mich.jpg",
					duration: "Mar 2020 - May 2020",
					location: "Ann Harbor, MI (Remote)",
					description:
						"- Conducted Data Log Analysis using javascript @ The University of Michigan to enhance the APCSA e-book experience.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "CEO and Founder",
					company: "Tech4U",
					company_url: "https://tech4u.org/",
					logo_path: "google_logo.png",
					duration: "June 2019 - Present",
					location: "Fremont, CA",
					description:
						" Successfully co-founded a non-profit that strives to provide STEM education for all regardless of one's socioeconomic status.",
					color: "#4285F4",
				},
				{
					title: "California Chapter President and Lead Researcher",
					company: "HelyxInitiative",
					company_url: "https://helyx.science/",
					logo_path: "microsoft_logo.png",
					duration: "July 2019 - Present",
					location: "San Diego, CA",
					description:
						"- Researched and developed algorithms for Lung Cancer diagnosis at the radiology lab @ Helyx Medicine. Utilized Computer Vision and Machine Learning Techniques on Computerized Tomography (CT) scan images for diagnosis. Primarily used OpenCV, Python, U-Net, Tensor flow, Pytorch. In addition, I am the California State President for the program and I overlook/ supervise hundreds of children.",
					color: "#D83B01",
				},
				{
					title: "Chapter President",
					company: "Engage STEM",
					company_url: "https://www.engagestem.org/",
					logo_path: "mozilla_logo.png",
					duration: "Oct 2018 - Present",
					location: "Mountain View, CA",
					description:
						"Managed chapter members and created mobile apps and websites for non-profits for free of cost.",
					color: "#000000",
        },
        {
					title: "Executive Director of Technology",
					company: "Epsilon Hacks",
					company_url: "https://epsilonhacks.com/",
					logo_path: "epsilon.jpg",
					duration: "September 2019 - June 2020",
					location: "Mountain View, CA",
					description:
						"Responsible for developing the website and managed the technology team with an emphasis on creating social impact, utilizing digital solutions to mobilize social change.",
					color: "#000000",
				},
				
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "circle-cropped.png",
		description:
			"Feel free to reach out to me for any questions or concerns. YOu can find me on almost any form of social media :)",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"For individual fundamental empowerment, I like to write powerful lessons that create impact on each reader individually to change the core of their character.",
		link: "https://medium.com",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Github",
		subtitle:
			"arjun37602",
		avatar_image_path: "address_image.svg",
	},
	phoneSection: {
		title: "Email",
		subtitle: "arjun37602@gmail.com",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
