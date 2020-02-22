import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('hey/:id')
  getHello(@Res() response, @Param('id') id: string) {
    return response.status(HttpStatus.OK).json({
      id
    });
  }
}
