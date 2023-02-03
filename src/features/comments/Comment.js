import { formatDate } from '../../utils/formatDate';
import {useSpring, animated} from 'react-spring';

const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

    const animatedStyle = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      });

    return (
        <animated.p style={animatedStyle}>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </animated.p>
    );
};

export default Comment;