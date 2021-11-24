export class ApiError {
  message: string;
  statusCode: number;

  constructor (message: string, statusCode: number) {
    this.message = `API error ${message}`
    this.statusCode = statusCode
  }
}
