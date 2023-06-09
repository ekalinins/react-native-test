export const truncateText = (maxRowsToShow: string) => ({
  display: '-webkit-box',
  WebkitLineClamp: maxRowsToShow,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
