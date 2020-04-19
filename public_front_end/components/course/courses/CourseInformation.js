import PropTypes from 'prop-types';
import withData from "../../../apollo/apollo.js";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const query = gql`
{
	courses {
    name
  }
}
`;

const CourseInformation = (props) => {
    console.log(data);
    const { loading, error, data, fetchMore } = useQuery(query);
    if(loading) return 'loading';
    if(error) return error.message;

    console.log(data)
    return (
        // <div id="courseContent" style={props.timeout ? {display: 'none'} : {}}>
    
        //         <div className="courses">
        //             <h1>Батхүлэг</h1>
        //             <span className="image main"><img src="/static/images/batkhuleg.png" alt="" /></span>
        //             <p>Батхүлэгийн эзэд замдаа жаргалтай.</p>
        //             <button><a href="javascript:;" onClick={() => {props.onOpenArticle('bat')}}>Дэлгэрэнгүй</a></button>
        //     </div>
        //     <div className="courses">
                
        //             {courses.map(c => <h1 key = {c.id}>{c.name}</h1>)}
                
        //     </div>
            
        // </div>
        ''
    )
}


CourseInformation.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default withData(CourseInformation);
