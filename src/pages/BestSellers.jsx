import styles from './BestSellers.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookItem from '@/components/BookItem';
import {useListApi} from '@/utils/hooks';

// 排序方式
const sortWays = [
  {label: 'Rank', value: 'rank'},
  {label: 'Title', value: 'title'},
  {label: 'Author', value: 'author'},
  {label: 'ISBN', value: 'primary_isbn10'},
];

function BestSellers() {
  const {list, setList, end, getList} = useListApi();
  
  function sortBy(way) {
    setList((val) => {
      return [...val.sort((a, b) => a[way] < b[way] ? -1 : 1)];
    });
  }

  return <>
    <Header />
    <main className={styles['main']}>
      <h1 className={styles['title']}>Paperback Nonfiction Bestsellers</h1>
      <span>Sort by:&nbsp;</span>
      {/* 使用原生表单的缺点是无法保证UI一致性 */}
      <select onChange={e => sortBy(e.target.value)}>
        {sortWays.map(way => <option value={way.value} key={way.label}>{way.label}</option>)}
      </select>
      <div className={styles['list']}>
        {list.map((book) => (
          <BookItem {...book} key={book.rank} />
        ))}
      </div>
      {list.length > 0 && !end && <button className={styles['btn-more']} onClick={getList}>SHOW MORE</button>}
    </main>
    <Footer />
  </>;
}

export default BestSellers;
