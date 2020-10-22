import isStatic from '../utils/isStatic';

export default function limitBy(limit) {
  return options => options.slice(0, limit + options.filter(isStatic).length);
}
