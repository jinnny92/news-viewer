import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

// const NewsPage = ({ match }) => {
//   const category = match.params.category || 'all';

//   return (
//     <div>
//       <Categories />
//       <NewsList category={category} />
//     </div>
//   );
// };

//V6에서는 match가 사라졌다

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
