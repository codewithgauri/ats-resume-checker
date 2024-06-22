export const SCHEMA = {
    "title": "Resume Analysis with ATS Scoring",
    "description": "Analyze a resume and provide an ATS score along with improvement suggestions based on a given job description.",
    "type": "object",
    "properties": {
        "jobDescription": {
            "description": "The job description text for which the resume is being analyzed.",
            "type": "string"
        },
        "resumeText": {
            "description": "The extracted text content of the uploaded resume.",
            "type": "string"
        },
        "atsScore": {
            "description": "The calculated ATS score for the resume based on the job description.",
            "type": "number"
        },
        "improvements": {
            "description": "A list of improvement suggestions for the resume to improve its ATS score.",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "suggestion": {
                        "description": "The specific improvement suggestion for the resume.",
                        "type": "string"
                    }
                }
            }
        }
    },
    "required": ["jobDescription", "resumeText"]
}


export const generationConfig = {
    "responseMimeType": "application/json",
    "responseSchema": {
        "type": "ARRAY",
        "items": {
            "type": "OBJECT",
            "properties": {
                "atsScore": {
                    "type": "number"
                },
                "improvements": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "improvementPoint": {
                                "type": "string"
                            },
                            "improvementWeightage": {
                                "type": "number"
                            }
                        }
                    }
                }
            }
        }
    }
}


export const value = {
    "atsScore": 60,
    "improvementPoints": [
        {
            "improvement": "Add a summary or profile section at the top highlighting your relevant skills and experience in AngularJS and ReactJS.",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Quantify your accomplishments whenever possible. For example, instead of \"Developed a Website & an Android app\", state \"Developed a website and Android app with X features, resulting in Y% increase in user engagement.\"",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Tailor the resume to the specific job description. Highlight skills and experiences that directly align with the requirements, such as REST API development, component-based UI, and performance optimization.",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Use strong action verbs to describe your responsibilities and accomplishments. For example, instead of \"Fabricated a device\", use \"Designed and fabricated a device.\"",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Remove irrelevant information, such as personal details like mobile number and email address. Focus on professional information only.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Avoid using excessive jargon or technical terms. Make sure the resume is understandable to a recruiter without a technical background.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Proofread for grammar and spelling errors. A polished resume reflects professionalism.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "List your skills in a separate section, using keywords from the job description. For example, \"AngularJS, ReactJS, REST API, Object-Oriented JavaScript, HTML, CSS, LESS, SASS, GitLab, GitHub, Mocha, Jest\".",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Provide links to your projects and code repositories on platforms like GitHub and LinkedIn to demonstrate your technical skills.",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Format the resume in a clear and concise manner using bullet points and headings. Use a professional font and consistent formatting.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Remove unnecessary details like your high school education and personal interests. Focus on your relevant work experience and technical skills.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Add a specific section for your AngularJS and ReactJS experience, highlighting your projects and accomplishments using these technologies.",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Mention your proficiency level in different programming languages and technologies, such as \"Proficient in AngularJS, ReactJS, and JavaScript\", instead of just listing them.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Quantify your experience in years. For example, \"4+ years of experience in AngularJS and ReactJS development\".",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Replace the \"To accomplish high career growth...\" statement with a concise and professional objective or career summary.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Use a professional and consistent resume template. There are many free templates available online.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Highlight your experience with performance testing frameworks like Mocha and Jest, as well as your knowledge of browser-based debugging tools.",
            "improvementWeightage": "High"
        },
        {
            "improvement": "Add a section about your experience with user interface design, showcasing your skills in creating user-friendly interfaces.",
            "improvementWeightage": "Medium"
        },
        {
            "improvement": "Consider adding a portfolio website or online resume to showcase your work."
        },
        {
            "improvementWeightage": "Medium"
        }
    ]
}