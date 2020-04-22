import PropTypes from 'prop-types';
import withData from "../../../apollo/apollo.js";

import { useQuery } from '@apollo/react-hooks';
import { USERS_QUERY } from "apollo/queries";


const CourseInformation = (props) => {
    console.log(data);
    const { loading, error, data, fetchMore } = useQuery(USERS_QUERY);
    if(loading) return 'loading';
    if(error) return error.message;

    console.log('data:: ', data.users);
    return (
        <div id="courseContent" style={props.timeout ? {display: 'none'} : {}}>
    
                <div className="courses">
                    <h1>Батхүлэг</h1>
                    <span className="image main"><img src="/static/images/batkhuleg.png" alt="" /></span>
                    <p>Батхүлэгийн эзэд замдаа жаргалтай.</p>
                    <button><a href="javascript:;" onClick={() => {props.onOpenArticle('bat')}}>Дэлгэрэнгүй</a></button>
            </div>
            <div className="courses">
                
                    {data.users.map(user => <p key = {user._id}>{user.username}</p>)}
                
            </div>
            
        </div>
    )
}


CourseInformation.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default withData(CourseInformation);
