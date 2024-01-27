import { useParams } from 'react-router-dom';
function CategoryDescription() {
  let { catName } = useParams();
  return (
    <>
      <a href="/cat">Назад</a>
      <h1>Category: {catName}</h1>
    </>
  );
}

export default CategoryDescription;
