import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faAlignLeft, faImage } from '@fortawesome/free-solid-svg-icons'
import { DATASOURCE_STATIC } from './datasourceTypes';

export const BLOCK_TYPES = {
    HEADLINE: 'HEADLINE',
    PARAGRAPH: 'PARAGRAPH',
    IMAGE: 'IMAGE'
}

export const DEFAULT_BLOCKS = [
    {
        type: BLOCK_TYPES.HEADLINE,
        content: '',
        data: {
            type: DATASOURCE_STATIC,
            content: ''
        }
    },
    {
        type: BLOCK_TYPES.PARAGRAPH,
        content: '',
        data: {
            type: DATASOURCE_STATIC,
            content: ''
        }
    },
    {
        type: BLOCK_TYPES.IMAGE,
        content: '',
        data: {
            type: DATASOURCE_STATIC,
            content: ''
        }
    },
];