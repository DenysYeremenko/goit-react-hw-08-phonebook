import style from './ContactFilter.module.css';
import { setFilter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

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
