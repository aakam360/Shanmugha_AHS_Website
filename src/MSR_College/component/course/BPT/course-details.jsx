import React from 'react';

const Data = [
    {
        Heading: "Laboratories:",
        Desc: [
            "Physiotherapy Exercise Lab",
            "Electrotherapy Lab",
            "Anatomy Lab",
            "Biomechanics Lab"
        ]
    },
    {
        Heading: "Hospital / Clinical Tie-ups:",
        Desc: [
            "Government Hospitals",
            "Orthopaedic Hospitals",
            "Rehabilitation Centers",
            "Sports Injury Clinics",
            "Private Multispecialty Hospitals"
        ]
    },
    {
        Heading: "Faculties:",
        Desc: [
            "Dr. S. Rajesh BPT",
            "Mr. K. Senthil BPT"
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
                                <h3 className="title">Bachelor of Physiotherapy (BPT)</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img
                                                src="/assets/images/msr/course/physio.jpg"
                                                alt="BPT Course"
                                                style={{ maxHeight: 550, maxWidth: 550 }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>
                                                Bachelor of Physiotherapy (BPT) is a professional undergraduate
                                                program that focuses on physical rehabilitation, movement sciences,
                                                and therapeutic exercise. Physiotherapists help patients recover
                                                from injuries, surgeries, neurological disorders, and musculoskeletal
                                                conditions.
                                                <br /><br />
                                                Graduates are trained to assess, diagnose, and treat physical
                                                impairments through exercise therapy, electrotherapy, and manual
                                                techniques in hospitals, rehabilitation centers, and sports clinics.
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
                                <li>I Year – Anatomy, Physiology, Biochemistry</li>
                                <li>II Year – Biomechanics, Exercise Therapy, Electrotherapy</li>
                                <li>III Year – Pathology, Orthopaedics, Neurology</li>
                                <li>IV Year – Community Medicine, Sports Physiotherapy, Clinical Training</li>
                                <li>Internship – Compulsory Rotatory Internship</li>
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
