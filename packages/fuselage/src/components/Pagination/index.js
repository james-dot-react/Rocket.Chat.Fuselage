import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Box } from '../Box';
import { Chevron } from '../Chevron';

const Container = Box.extend('rcx-pagination', 'nav');
const Left = Box.extend('rcx-pagination__left');
const Right = Box.extend('rcx-pagination__right');
const Label = Box.extend('rcx-pagination__label', 'span');
const List = Box.extend('rcx-pagination__list', 'ol');
const ListItem = Box.extend('rcx-pagination__list-item', 'li');
const Link = Box.extend('rcx-pagination__link', 'button');
const BackLink = Box.extend('rcx-pagination__back', 'button');
const ForwardLink = Box.extend('rcx-pagination__forward', 'button');

const defaultItemsPerPageLabel = () => 'Items per page:';

const defaultShowingResultsLabel = ({ count, current, itemsPerPage }) =>
  `Showing results ${ current + 1 } - ${ Math.min(current + itemsPerPage, count) } of ${ count }`;

export function Pagination({
  count,
  current = 0,
  itemsPerPage = 25,
  itemsPerPageLabel = defaultItemsPerPageLabel,
  showingResultsLabel = defaultShowingResultsLabel,
  onSetItemsPerPage,
  onSetCurrent,
  ...props
}) {
  const itemsPerPageOptions = [25, 50, 100].filter((i) => i <= count);
  const hasItemsPerPageSelection = itemsPerPageOptions.length > 1;
  const currentPage = Math.floor(current / itemsPerPage);
  const pages = Math.ceil(count / itemsPerPage);
  const displayedPages = useMemo(() => {
    if (pages <= 7) {
      // 0 1 2 3 4 5 6
      return Array.from({ length: pages }, (_, i) => i);
    }

    if (currentPage < 5) {
      // 0 1 2 3 4 ... N
      return [0, 1, 2, 3, 4, '⋯', pages - 1];
    }

    if (currentPage > pages - 5) {
      // 0 ... N-4 N-3 N-2 N-1 N
      return [0, '⋯', pages - 5, pages - 4, pages - 3, pages - 2, pages - 1];
    }

    // 0 ... x-1 x x-2 ... N
    return [0, '⋯', currentPage - 1, currentPage, currentPage + 1, '⋯', pages - 1];
  }, [pages, currentPage]);

  const renderingContext = { count, pages, current, currentPage, itemsPerPage };

  const handleSetItemsPerPageLinkClick = (itemsPerPageOption) => () => {
    onSetItemsPerPage && onSetItemsPerPage(itemsPerPageOption);
  };

  const handleSetPageLinkClick = (page) => () => {
    onSetCurrent && onSetCurrent(page * itemsPerPage);
  };

  return <Container {...props}>
    {hasItemsPerPageSelection && (
      <Left>
        <Label>{itemsPerPageLabel(renderingContext)}</Label>
        <List>
          {itemsPerPageOptions.map((itemsPerPageOption) =>
            <ListItem key={itemsPerPageOption}>
              <Link disabled={itemsPerPage === itemsPerPageOption} onClick={handleSetItemsPerPageLinkClick(itemsPerPageOption)}>
                {itemsPerPageOption}
              </Link>
            </ListItem>,
          )}
        </List>
      </Left>
    )}
    <Right>
      <Label>{showingResultsLabel(renderingContext)}</Label>
      <List>
        <ListItem>
          <BackLink disabled={currentPage === 0} onClick={handleSetPageLinkClick(currentPage - 1)}>
            <Chevron left size='x16' />
          </BackLink>
        </ListItem>
        {displayedPages.map((page, i) => (
          <ListItem key={i}>
            {page === '⋯'
              ? '⋯'
              : <Link disabled={currentPage === page} onClick={handleSetPageLinkClick(page)}>{page + 1}</Link>}
          </ListItem>
        ))}
        <ListItem>
          <ForwardLink disabled={currentPage === pages - 1} onClick={handleSetPageLinkClick(currentPage + 1)}>
            <Chevron right size='x16' />
          </ForwardLink>
        </ListItem>
      </List>
    </Right>
  </Container>;
}

Pagination.defaultProps = {
  current: 0,
  itemsPerPage: 25,
  itemsPerPageLabel: defaultItemsPerPageLabel,
  showingResultsLabel: defaultShowingResultsLabel,
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number,
  itemsPerPage: PropTypes.oneOf([25, 50, 100]),
};
