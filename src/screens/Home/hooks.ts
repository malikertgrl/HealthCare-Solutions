import React, {useEffect, useState} from 'react';
import {PillsModel} from '../../redux/slices/healthSolutionSlice';
import {useAppSelector} from '../../redux/hooks';

const Hooks = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState<PillsModel[]>();
  const data = useAppSelector(state => state.health.todos);

  useEffect(() => {
    setList(data);
  }, [data]);

  const onSearch = (text: string) => {
    console.log('first', text);
    setSearchText(text);
    if (text && list?.length) {
      const filtered = list.filter(
        item =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.time.toLowerCase().includes(text.toLowerCase()),
      );
      setList(filtered);
    } else if (text === '') {
      setList(data);
    }
  };

  return {searchText, setSearchText, list, setList, data, onSearch};
};

export default Hooks;
