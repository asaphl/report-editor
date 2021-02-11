import { DATASOURCE_LOCAL, DATASOURCE_REMOTE, DATASOURCE_STATIC } from '../constants/datasourceTypes';

const initState = [
    {
        blockId: 0,
        type: DATASOURCE_STATIC,
        source: 'TITLE 1'
    },
    {
        blockId: 1,
        type: DATASOURCE_LOCAL,
        source: {
            table: 'Countries',
            column: 'Country Name',
            id: '2'
        }
    },
    {
        blockId: 2,
        type: DATASOURCE_REMOTE,
        source: {
            url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Spain',
            field: 'title'
        }
    }
];

export const datasourcesReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default datasourcesReducer;