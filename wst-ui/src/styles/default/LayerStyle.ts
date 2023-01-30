export enum LayerStyleVariant {
  ADMIN_CONTENT_BOX = 'admin-content-box',
  DEFAULT_PAGE_CONTENT_BOX = 'page-main-content-box',
  CARDS_CONTENT_BOX = 'cards-content-box',
}

export const LayerStyles = Object.freeze({
  [LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX]: {
    w: '100%',
    maxW: '1252px',
    mx: 'auto',
    py: 6,
    mt: 24,
  },
});
