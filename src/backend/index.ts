import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { england, france, germany } from '../config/config.tsx';

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance, { delayResponse: 200 });

// routes:
// /paintings/:country - роут для получения картин определенной страны

mock
    .onGet(new RegExp('/paintings/[A-Za-z]+'))
    .reply(config => {
        const country = config.url?.split('/')[2];

        switch (country) {
            case 'france':
                return [200, {
                    paintings: [...france]
                }];
            case 'germany':
                return [200, {
                    paintings: [...germany]
                }];
            case 'england':
                return [200, {
                    paintings: [...england]
                }];
            default:
                return [404];
        }
    })

export default axiosInstance;
