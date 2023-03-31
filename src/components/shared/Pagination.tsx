import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

import { COLORS } from '../../constants/colors';

interface PaginationProps {
  count: number;
}

const Pagination = ({ count }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(count / 10);
  const page = Number(searchParams.get('page')) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const activePageId = (item: number) => {
    if (item === page) return 'active';
    return '';
  };

  const slicePages = (page: number) => {
    if (page < 4) return pages.slice(0, 5);
    if (page > totalPages - 3) return pages.slice(totalPages - 5);
    return pages.slice(page - 3, page + 2);
  };

  const prevPage = () => {
    if (page === 1) return;
    searchParams.set('page', String(page - 1));
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    if (page === totalPages) return;
    searchParams.set('page', String(page + 1));
    setSearchParams(searchParams);
  };

  const lastpage = () => {
    if (page === totalPages) return;
    searchParams.set('page', String(totalPages));
    setSearchParams(searchParams);
  };

  const isLastPageShown = slicePages(page).includes(totalPages);

  return (
    <Container>
      <Arrows onClick={prevPage}>
        <img src='/prev.svg' /> 이전
      </Arrows>
      <div>
        {slicePages(page).map((page) => (
          <Page
            key={page}
            id={activePageId(page)}
            onClick={() => {
              searchParams.set('page', String(page));
              setSearchParams(searchParams);
            }}>
            {page}
          </Page>
        ))}
        {!isLastPageShown && <Page id='dots'>{'...'}</Page>}
        {!isLastPageShown && <Page onClick={lastpage}>{totalPages}</Page>}
      </div>
      <Arrows onClick={nextPage}>
        다음 <img src='/next.svg' />
      </Arrows>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px auto 0 auto;
`;

const Arrows = styled.button`
  background-color: ${COLORS.LIGHT_GRAY};
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  color: ${COLORS.DEEP_GRAY};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.4rem;
`;

const Page = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  color: ${COLORS.DEEP_GRAY};
  cursor: pointer;
  &:hover {
    color: ${COLORS.MAIN};
    &#dots {
      color: ${COLORS.DEEP_GRAY};
      cursor: default;
    }
  }
  &#active {
    background-color: ${COLORS.MAIN};
    color: white;
  }
`;
