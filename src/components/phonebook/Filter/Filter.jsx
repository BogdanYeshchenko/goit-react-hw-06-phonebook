import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chengeFilter } from 'redux/phoneBook/phoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.phoneBook.filter);

  function handleCengeInput(e) {
    const { value } = e.target;
    dispatch(chengeFilter(value));
  }

  return (
    <div className={css.filterBox}>
      <label className="form-label">
        <span>Find contacts by name</span>
        <input
          onChange={handleCengeInput}
          className="form-control"
          type="text"
          value={filter}
          name="filter"
        />
      </label>
    </div>
  );
};
