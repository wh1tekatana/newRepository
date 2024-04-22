// src/probes/dto/create-probe.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateProbeDto {

  readonly title: string;

  readonly location: string;

  readonly employeeId: number;

  readonly requestId: number;
}