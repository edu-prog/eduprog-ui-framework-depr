export enum ValidationStatusDescription {
  NotValidated,
  Invalid,
  Valid,
}

export interface IValidator {
  pattern: RegExp;
  status: ValidationStatusDescription;
  message: string;
}
