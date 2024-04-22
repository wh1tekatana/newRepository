

export class CreateRequestDto {

  readonly title: string;

  readonly description: string;

  readonly date: Date;

  readonly employeeId: number;

  readonly clientId: number;

  readonly status: string;
}