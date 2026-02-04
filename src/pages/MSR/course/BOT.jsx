import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/BOT';

const CourseDetails = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Bachelor of Occupational Therapy'} />
            <CourseDetailsMain />
        </Wrapper>
    );
};

export default CourseDetails;
