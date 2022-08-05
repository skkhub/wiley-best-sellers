import {PropTypes} from 'prop-types';
import styles from './BookItem.module.scss';

function BookItem(props) {
  return <div className={styles["book-item"]}>
    <span className={styles["rank"]}>{props.rank}.</span>
    <img className={styles["book-image"]} src={props.book_image} alt={props.title} />
    <div className={styles["intro"]}>
      <h3 className={styles['title']}>{props.title}</h3>
      <p>by {props.author}</p>
      <p>{props.description}</p>
      <p>ISBN:&nbsp;{props.primary_isbn10}</p>
    </div>
  </div>;
}

BookItem.propTypes = {
  rank: PropTypes.number.isRequired,
  book_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primary_isbn10: PropTypes.string.isRequired,
};

export default BookItem;
