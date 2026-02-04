import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/BPT';

const CourseDetails = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Bachelor of Physiotherapy'} />
            <CourseDetailsMain />
        </Wrapper>
    );
};

export default CourseDetails;
