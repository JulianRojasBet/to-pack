import isBrowser from "@/utils/isBrowser";
import { dateOptions } from "@/utils/format/constants";

const locale = isBrowser() ? navigator?.language : "en-US";

const date = (datetime: string, options: Intl.DateTimeFormatOptions = dateOptions): string => {
  const formatter = new Intl.DateTimeFormat(locale, options);
  const _date = new Date(datetime);
  return formatter.format(_date);
};

const format = {
  date,
};

export default format;
