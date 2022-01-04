import { Request } from 'express';
import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { CatPageService } from '@src/modules/api/pages/cat/cat.service';
import { WithAlias } from '@src/modules/common/http';

import { PAGES_KEYS, PAGES_URL_ALIASES } from '../../../../../common';
import { CommonPageService } from '../services/common.service';
import { ClientService } from '../services/client.service';
import { adaptCommonPageDataToCommonInitialState } from '../adapters/common';

@Controller()
export class CatPageController {

    constructor(
        private _commonPageService: CommonPageService,
        private _catPageService: CatPageService,
        private _clientService: ClientService
    ) { }

    @Render('index')
    @Get('cats/:id')
    @WithAlias(PAGES_URL_ALIASES.CAT)
    async get(@Req() req: Request, @Param('id') id: string) {       
        const [commonPageData, pageData] = await Promise.all([
            this._commonPageService.get(req),
            this._catPageService.get(parseInt(id))
        ]);
        const { location } = commonPageData;

        return this._clientService.getRenderData(
            location,
            {
            ...adaptCommonPageDataToCommonInitialState(commonPageData),
            [PAGES_KEYS.CAT]: pageData
        })
    }
}
