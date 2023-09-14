import {connection} from '../Database/connection.js';

export const viewEspecializaciones = () =>
{
    
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT * FROM especializaciones',
            function (err, results) {
                resolve(results);
            }
        );
    });
}