import style from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeHandler = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={style.filterLabel}>
      Find contacts by name
      <input
        className={style.filterInput}
        placeholder="Search"
        type="search"
        name="filter"
        onChange={changeHandler}
      ></input>
    </label>
  );
};
