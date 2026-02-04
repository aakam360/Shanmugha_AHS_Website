import React from 'react';
import { useRouter } from 'next/router';

const Data = [
    {
        Heading: "Laboratories:",
        Desc: [
            "Occupational Therapy Skills Lab",
            "Pediatric Therapy Lab",
            "Neurological Rehabilitation Lab",
            "Assistive Devices & Splinting Lab"
        ]
    },
    {
        Heading: "Hospital / Clinical Tie-ups:",
        Desc: [
            "Government Hospitals",
            "Rehabilitation Centers",
            "Special Schools",
            "Mental Health Centers",
            "Private Multispecialty Hospitals"
        ]
    },
    {
        Heading: "Faculties:",
        Desc: [
            "Dr. R. Mahalakshmi MOT",
            "Dr. K. Suresh MOT",
            "Ms. P. Revathi BOT"
        ]
    }
];

const CourseDetails = () => {
        const router = useRouter();
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-12">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Course</span>
                                <h3 className="title">Bachelor of Occupational Therapy (BOT)</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img
                                                src="/assets/images/msr/course/occupational.jpeg"
                                                alt="BOT Course"
                                                style={{ maxHeight: 550, maxWidth: 550 }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>
                                                Bachelor of Occupational Therapy (BOT) is an undergraduate healthcare
                                                program focused on helping individuals achieve independence in daily
                                                living and work-related activities. Occupational therapists work with
                                                people who have physical, mental, or developmental challenges.
                                                <br /><br />
                                                The program trains students in therapeutic techniques, adaptive
                                                equipment, and rehabilitation strategies to improve patients’ quality
                                                of life across all age groups, including pediatrics, adults, and the
                                                elderly.
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
                                <li>I Year – Anatomy, Physiology, Psychology, Basics of Occupational Therapy</li>
                                <li>II Year – Biomechanics, Pathology, Pharmacology, Therapeutic Activities</li>
                                <li>III Year – Neurology, Orthopaedics, Pediatrics, Psychiatry</li>
                                <li>IV Year – Community-Based Rehabilitation, Assistive Technology, Clinical Training</li>
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
