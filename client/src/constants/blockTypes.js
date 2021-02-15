export const BLOCK_TYPES = {
    HEADLINE: 'HEADLINE',
    TEXT: 'TEXT',
    IMAGE: 'IMAGE'
}

export const BLOCK_TYPE_SOURCE = {
    HEADLINE: 'texts',
    TEXT: 'texts',
    IMAGE: 'images',
}


export const DEFAULT_BLOCKS = [
    {
        type: BLOCK_TYPES.HEADLINE,
        data: {
            type: null
        }
    },
    {
        type: BLOCK_TYPES.TEXT,
        data: {
            type: null
        }
    },
    {
        type: BLOCK_TYPES.IMAGE,
        data: {
            type: null
        }
    },
];