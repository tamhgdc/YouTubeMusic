/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSearch, setTextInSearch } from '../../../store/slices/initialSlice';
import { useNavigate } from 'react-router-dom';

const useFind = () => {
  const [value, setValue] = useState('');
  const { isSearch, textInSearch } = useSelector((state) => state.initial);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValues, setSearchValues] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();

  const onChangeValue = useCallback((text) => {
    setValue(text);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('searchQueries'));
    if (items) {
      setSearchValues(items);
    }
  }, []);

  useEffect(() => {
    const ref = inputRef.current;

    const enterHandler = (e) => {
      if (e.key === 'Enter') {
        const randomId = Math.floor(Math.random(0, 500) * 500);
        setSearchValues([...searchValues, { id: randomId, text: value }]);
        localStorage.setItem('searchQueries', JSON.stringify([...searchValues, { id: randomId, text: value }]));
        dispatch(setTextInSearch(value));
        setShowDropdown(false);
        navigate('/search');
      }
    };

    if (inputRef.current) {
      ref.addEventListener('keypress', enterHandler);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('keypress', enterHandler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, searchValues]);

  const changeIsOpen = useCallback(() => {
    dispatch(setIsSearch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeSearchValue = useCallback(
    (id) => {
      const filter = searchValues.filter((item) => item.id !== id);
      setSearchValues(filter);
      localStorage.setItem('searchQueries', JSON.stringify(filter));
    },
    [searchValues]
  );

  const addTextFromDropDown = useCallback((text) => {
    setValue(text);
    dispatch(setTextInSearch(text));
    setShowDropdown(false);
    navigate('/search');
    // eslint-disable-next-line prettier/prettier
    },
    []
  );

  useEffect(() => {
    if (textInSearch !== value) {
      setShowDropdown(true);
    }
  }, [textInSearch, value]);

  return {
    value,
    onChangeValue,
    inputRef,
    isSearch,
    changeIsOpen,
    searchValues,
    removeSearchValue,
    showDropdown,
    addTextFromDropDown,
  };
};

export default useFind;
