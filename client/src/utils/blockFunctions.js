import { BLOCK_TYPES } from "../constants/blockTypes";

export const loadSourceIntoBlockData = (block, source) => {
    switch (block.type) {
        case BLOCK_TYPES.HEADLINE:
            return {
                ...block,
                data: {
                    ...block.data,
                    sourceId: source.id,
                    content: source.title
                }
            }
        case BLOCK_TYPES.TEXT:
            return {
                ...block,
                data: {
                    ...block.data,
                    sourceId: source.id,
                    content: source.body
                }
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
                }
            }
        default:
            return block;
    }
}