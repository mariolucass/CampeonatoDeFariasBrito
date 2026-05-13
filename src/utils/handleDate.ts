import moment from "moment";
import "moment/locale/pt-br";

export const handleDateWithMoment = (date: Date | string) => {
  moment.locale("pt-br");
  return moment(date, "YYYY-MM-DDTHH:mm")
    .format("LLLL")
    .replace(",", " -")
    .replace("às", " -")
    .replace("de 2023", "")
    .toUpperCase();
};
