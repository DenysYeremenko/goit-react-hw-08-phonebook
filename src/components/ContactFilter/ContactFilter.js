import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeHandler = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        placeholder="Search"
        type="search"
        name="filter"
        onChange={changeHandler}
      ></input>
    </label>
  );
};
