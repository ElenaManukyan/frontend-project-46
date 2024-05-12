import { stylish, stylishObj } from './stylish.js';
import plain from './plain.js';
import JsonFormatter from './JSON.js';

function chooseFormatters(difference, formatName = 'stylish') {
  switch (formatName) {
    case 'json':
      return JsonFormatter(difference);
    case 'plain':
      return plain(difference);
    case 'stylish':
      return stylish(stylishObj(difference));
    default:
      throw new Error(`Format name ${formatName} doesn't exist`);
  }
}

export default chooseFormatters;
