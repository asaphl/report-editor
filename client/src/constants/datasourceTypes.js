export const DATASOURCE_STATIC = 'DATASOURCE_STATIC';
export const DATASOURCE_LOCAL = 'DATASOURCE_LOCAL';
export const DATASOURCE_REMOTE = 'DATASOURCE_REMOTE';

export const DATASOURCE_TYPES = [
    {
        type: DATASOURCE_STATIC,
        content: ''
    },
    {
        type: DATASOURCE_REMOTE,
        src: 'Wikipedia',
        url: 'https://en.wikipedia.org/w/api.php',
        params: {
            action: 'query',
            format: 'json',
            prop: 'extracts',
            explaintext: 1,
            titles: 'Spain',
        }
    }
];
//     {
//         name: 'Wikipedia',
//         url: 'https://en.wikipedia.org/w/api.php',
//         params: (searchTerm) => {
//             return {
//                 action: 'query',
//                 list: 'search',
//                 origin: '*',
//                 format: 'json',
//                 srsearch: searchTerm
//             }
//         },
//         returns: (res) => {
//             return res.data.query.search.map(result => result.title);
//         }
//     }
// ]

// export default DATASOURCE_TYPES;