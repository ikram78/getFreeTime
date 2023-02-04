Get free time slots between given date range
Usage
import {getfreetime} from 'getfreetime'
let jsonData = [
{

      startDate: moment(
        "31-01-2023 15:20",
        "DD-MM-YYYY HH:mm"
      ).valueOf(),
      endDate: moment(
        "31-01-2023 15:30",
        "DD-MM-YYYY HH:mm"
      ).valueOf()
    },
    {
      startDate: moment(
        "31-01-2023 17:20",
        "DD-MM-YYYY HH:mm"
      ).valueOf(),
      endDate: moment(
        "31-01-2023 17:50",
        "DD-MM-YYYY HH:mm"
      ).valueOf()
    }

];
const duration=30
const startDate=moment().valueOf()
const endDate=moment().valueOf()
const slots=getfreetime(jsonData,duration,startDate,endDate)
