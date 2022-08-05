import {useState, useEffect} from 'react';
import {get} from './http';
import {listUrl} from './constants';
import {debounce} from './index';

// 接口返回数据的每页大小
const pageSize = 20;
// 当前已加载的数量
let curNumResults = 0;

export function useListApi() {
  const [list, setList] = useState([]);
  const [end, setEnd] = useState(false);

  const getList = debounce(async () => {
    if (end) {
      return;
    }

    try {
      const result = await get(listUrl, {params: {offset: curNumResults}});

      if (curNumResults === 0) {
        setList(result.results.books);
      }
      else {
        setList(pre => [...pre, ...(result.results?.books ?? [])]);
      }
  
      curNumResults += pageSize;
      // 已加载数量等于或超过num_results表明已加载全部数据
      setEnd(curNumResults >= result.num_results);
    }
    catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    setList,
    end,
    getList,
  };
}
