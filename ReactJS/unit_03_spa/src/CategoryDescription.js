import { Link, useParams } from 'react-router-dom';
function CategoryDescription() {
  let { catName } = useParams();
  return (
    <>
      <Link to="/cat">Назад</Link>
      <h1>Category: {catName}</h1>
    </>
  );
}

export default CategoryDescription;
