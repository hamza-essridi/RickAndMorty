import './PageFilter.css';
const PageFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/*<label>Filter by year</label>*/}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="page=1">Page 1</option>
          <option value="page=2">Page 2</option>
          <option value="page=3">Page 3</option>
          <option value="page=4">Page 4</option>
          <option value="page=5">Page 5</option>
          <option value="page=6">Page 6</option>
          <option value="page=7">Page 7</option>
          <option value="page=8">Page 8</option>
          <option value="page=9">Page 9</option>
          <option value="page=10">Page 10</option>
          <option value="page=11">Page 11</option>
          <option value="page=12">Page 12</option>
          <option value="page=13">Page 13</option>
          <option value="page=14">Page 14</option>
          <option value="page=15">Page 15</option>
          <option value="page=16">Page 16</option>
        </select>
      </div>
    </div>
  );
};
export default PageFilter;
