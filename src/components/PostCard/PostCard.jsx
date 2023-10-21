import propTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './PostCard.module.scss';
const PostCard = ({ post }) => {
	const truncate = (text) => {
		return text.substring(0, 175) + '...';
	};
	return (
		<div key={post._id} className={styles.post}>
			<p className={styles.date}>{format(new Date(post.createdAt), 'PPPP')}</p>
			<h3 className={styles.title}>{post.title}</h3>
			<div
				className={styles.body}
				dangerouslySetInnerHTML={{ __html: truncate(post.body.split('.')[0]) }}
			/>
		</div>
	);
};

PostCard.propTypes = {
	post: propTypes.shape({
		_id: propTypes.string,
		title: propTypes.string,
		body: propTypes.string,
		createdAt: propTypes.string,
	}),
};

export default PostCard;
