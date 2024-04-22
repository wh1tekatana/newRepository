import { Controller, Get, Post, Body, UseGuards, Param, Put } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Request } from './requests.model';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateRequestDto } from './dto/create-request.dto';
import { ProvidedAdvancesService } from 'src/provided-advances/provided-advances.service';
import { UpdateRequestStatusDto } from './dto/update-request-status.dto';

@Controller('requests')
export class RequestsController {
  constructor(
    private readonly requestsService: RequestsService,
    private readonly providedAdvancesService: ProvidedAdvancesService
  ) {}

  // @Roles("fellowWorker")
  // @UseGuards(RolesGuard)
  @Get()
  async findAll(): Promise<Request[]> {
    return this.requestsService.findAll();
  }

  // @Roles("fellowWorker")
  // @UseGuards(RolesGuard)

  @Post()
  async create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(+id);
  }

  @Get(':id/provided-advances')
  async getProvidedAdvances(@Param('id') id: string) {
    return this.providedAdvancesService.findByRequestId(+id);
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: number, @Body() updateRequestStatusDto: UpdateRequestStatusDto) {
    return this.requestsService.updateStatus(id, updateRequestStatusDto);
  }

  @Put(':id/complete')
  async completeRequest(@Param('id') id: number) {
    return this.requestsService.completeRequest(id);
  }
}