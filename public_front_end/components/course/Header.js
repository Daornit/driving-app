import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-regular/faUser'

const Header = (props) => (
    <>
    <div className="icons">
            <a href="javascript:;" onClick={() => {props.onOpenArticle('login')}}>
              <FontAwesomeIcon icon={faUser} />
            </a>
        </div>
    <header id="header" style={props.timeout ? {} : {}}>
        
        <nav>
            <ul>
                <li><a href="/course" onClick={() => {props.onOpenArsticle('course')}}>Жолооны курс</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('answer')}}>Асуулт хариулт</a></li>
                <li><a href="/news" onClick={() => {props.onOpenArticle('')}}>Мэдээ мэдээлэл</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('use')}}>Хэрхэн ашиглах</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Бидэнтэй холбогдох</a></li>
            </ul>
        </nav>
    </header>
    </>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
