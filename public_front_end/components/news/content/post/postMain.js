import PropTypes from 'prop-types';

const PostMain = (props) => (
    <div id="postContent" style={props.timeout ? {display: 'none'} : {}}>

            <div id="post">
                <div className="postImage">
                    <span className="image main"><img src="/static/images/batkhuleg.png" alt="" /></span>
                </div>
                <div className="postDesc">
                    <h2>БАТХҮЛЭГ</h2>
                    <p>Батхүлэг автосургууль нь B болон BC ангилалдаа хямдрал зарлалаа.</p>
                    <button><a href="javascript:;" onClick={() => {props.onOpenArticle('bat')}}>Дэлгэрэнгүй</a></button>
                </div>
            </div>
        
    </div>
)

PostMain.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default PostMain
