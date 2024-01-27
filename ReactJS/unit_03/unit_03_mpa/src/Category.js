import { useLocation } from 'react-router-dom';

function Category() {
  let url = useLocation();
  return (
    <>
      <h1>Category</h1>
      <ul>
        <li>
          <a href={`${url.pathname}/notebook`}>Ноутбуки</a>
        </li>
        <li>
          <a href={`${url.pathname}/monitor`}>Мониторы</a>
        </li>
        <li>
          <a href={`${url.pathname}/cellphone`}>Мобильные телефоны</a>
        </li>
      </ul>
    </>
  );
}

export default Category;
