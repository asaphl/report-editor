import { BLOCK_TYPES } from "../constants/blockTypes";

export const updateBlockObject = (orig, updates) => {
  return {
    ...orig,
    ...updates,
    data: {
      ...orig.data,
      ...updates.data,
    },
  };
};

export const updateStaticContentOfBlock = (block, value) => {
  let updated = {};
  if (block.type === BLOCK_TYPES.IMAGE) {
    updated = updateBlockObject(block, {
      data: {
        path: value,
      },
    });
  } else {
    updated = updateBlockObject(block, {
      data: { content: value },
    });
  }
  return updated;
};

export const loadSourceIntoBlockData = (block, source) => {
  switch (block.type) {
    case BLOCK_TYPES.HEADLINE:
      return {
        ...block,
        data: {
          ...block.data,
          sourceId: source.id,
          content: source.title,
        },
      };
    case BLOCK_TYPES.TEXT:
      return {
        ...block,
        data: {
          ...block.data,
          sourceId: source.id,
          content: source.body,
        },
      };
    case BLOCK_TYPES.IMAGE:
      return {
        ...block,
        data: {
          ...block.data,
          sourceId: source.id,
          path: source.path,
          caption: source.caption,
          credit: source.credit,
        },
      };
    default:
      return block;
  }
};
