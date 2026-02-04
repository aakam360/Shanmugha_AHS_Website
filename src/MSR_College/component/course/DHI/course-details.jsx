import React from 'react';

const Data = [
    {
        Heading: "Laboratories:",
        Desc: [
            "Public Health Lab",
            "Environmental Health Lab",
            "Microbiology Lab",
            "Nutrition & Hygiene Lab"
        ]
    },
    {
        Heading: "Hospital / Field Training Tie-ups:",
        Desc: [
            "Government Primary Health Centers (PHC)",
            "Municipal Corporation Health Department",
            "Taluk Government Hospitals",
            "District Public Health Office",
            "Community Health Centers (CHC)"
        ]
    },
    {
        Heading: "Faculties:",
        Desc: [
            "Mr. R. Selvakumar DHI",
            "Ms. P. Anitha DHI",
            "Mr. S. Prakash MPH"
        ]
    }
];

const CourseDetails = () => {
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-12">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Course</span>
                                <h3 className="title">Diploma in Health Inspector</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img
                                                src="/assets/images/msr/course/health.webp"
                                                alt="Health Inspector Course"
                                                style={{ maxHeight: 550, maxWidth: 550 }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>
                                                The Diploma in Health Inspector (DHI) program focuses on public health,
                                                preventive medicine, sanitation, and environmental hygiene.
                                                Health Inspectors play a vital role in safeguarding community health
                                                by monitoring sanitation standards, food safety, disease prevention,
                                                and health awareness programs.
                                                <br /><br />
                                                Graduates are trained to work with government and private health
                                                departments, municipalities, and public health organizations.
                                                Their responsibilities include inspection of food establishments,
                                                water quality monitoring, waste management supervision, and
                                                implementation of national health programs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="title">Subjects :</h3>
                            <ul
                                className="blog-pagination-list prev-post"
                                style={{ paddingLeft: 40, listStyle: 'none' }}
                            >
                                <li>I Year – Anatomy & Physiology, Basics of Public Health, Nutrition, Environmental Sanitation</li>
                                <li>II Year – Microbiology, Communicable Diseases, Epidemiology, Health Education</li>
                                <li>III Year – Food Safety & Standards, Waste Management, National Health Programs, Field Training</li>
                            </ul>

                            <div className="course-overview">
                                {Data.map((section, index) => (
                                    <div key={index}>
                                        <h4 className="title">{section.Heading}</h4>
                                        <ul className="mb--60" style={{ listStyle: "none" }}>
                                            {section.Desc.map((item, subIndex) => (
                                                <li key={subIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
