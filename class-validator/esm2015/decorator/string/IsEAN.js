import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isEANValidator from 'validator/lib/isEAN';
export const IS_EAN = 'isEAN';
/**
 * Check if the string is an EAN (European Article Number).
 * If given value is not a string, then it returns false.
 */
export function isEAN(value) {
    return typeof value === 'string' && isEANValidator(value);
}
/**
 * Check if the string is an EAN (European Article Number).
 * If given value is not a string, then it returns false.
 */
export function IsEAN(validationOptions) {
    return ValidateBy({
        name: IS_EAN,
        validator: {
            validate: (value, args) => isEAN(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must be an EAN (European Article Number)', validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEAN.js.map