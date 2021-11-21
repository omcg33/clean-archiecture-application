import { Injectable } from '@nestjs/common';
import { delay } from 'utils';

import { PAGES_URL_ALIASES } from 'consts/pages';

@Injectable()
export class GetPagesRoutesService {
    async get() {
        await delay(100);

        return [
            {
                alias: PAGES_URL_ALIASES.CATS_LIST,
                template: '/cats'
            },
            {
                alias: PAGES_URL_ALIASES.DOGS_LIST,
                template: '/dogs'
            },
        ]
    }
}
