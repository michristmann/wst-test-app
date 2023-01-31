export enum LayerStyleVariant {
  DEFAULT_PAGE_CONTENT_BOX = 'page-main-content-box',
}

export const LayerStyles = Object.freeze({
  [LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX]: {
    w: '100%',
    maxW: '1252px',
    mx: 'auto',
    py: 6,
  },
});
