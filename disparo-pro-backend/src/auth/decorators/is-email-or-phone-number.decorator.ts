import {
  registerDecorator,
  ValidationOptions,
  isEmail,
  isPhoneNumber,
} from 'class-validator';

export function IsEmailOrPhoneNumber(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isEmailOrPhoneNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isEmail(value) || isPhoneNumber(value, 'BR');
        },
        defaultMessage() {
          return 'Has to be int or string';
        },
      },
    });
  };
}
