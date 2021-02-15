import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faAlignLeft, faImage } from '@fortawesome/free-solid-svg-icons'
import { DATASOURCE_STATIC } from './datasourceTypes';

export const BLOCK_TYPES = {
    HEADLINE: 'HEADLINE',
    PARAGRAPH: 'PARAGRAPH',
    IMAGE: 'IMAGE'
}

export const BLOCK_TYPE_SOURCE = {
    HEADLINE: 'texts',
    PARAGRAPH: 'texts',
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
        type: BLOCK_TYPES.PARAGRAPH,
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