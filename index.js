import  moment from "moment";
let dateFormat="DD-MM-YYYY HH:mm"


const generatesSlots = (startTime, endTime, duration = 30) => {
    const timeStops = [];
    while (startTime.isSameOrBefore(endTime)) {
      let minuts = checkTimeBetween(
        startTime,
        moment(endTime, dateFormat)
      );
      if (minuts >= duration) {
        let startingTime=moment(startTime).valueOf()
        let addTime= startTime.add(duration, "minutes")
        timeStops.push({
            startTime: startingTime,
            endTime:moment(addTime).valueOf(),
         freeTime: `${moment(startingTime).format("hh:mm a")} - ${moment(
            addTime
          ).format("hh:mm a")}`
          });
      } else {
        startTime.add(duration, "minutes");
      }
    }
    return timeStops;
  };

  const checkTimeBetween = (startTime, endTime) => {
    var duration = moment.duration(
      moment(
        moment(endTime).format("DD-MM-YYYY hh:mm a"),
        "DD-MM-YYYY hh:mm a"
      ).diff(
        moment(
          moment(startTime).format("DD-MM-YYYY hh:mm a"),
          "DD-MM-YYYY hh:mm a"
        )
      )
    );
    return duration.asMinutes();
  };

  const convertDate=(date)=> {
    const dt = new Date(date);
    return moment(dt, "DD-MM-YYYY").format("DD-MM-YYYY");
  }

  export const getTimeSlots = (meetingArr=[], duration=30, startDate=moment().valueOf(), endDate=moment().valueOf()) => {
    let meetingArray = [...meetingArr];
    let timeSlotsResult = [];
    meetingArray.sort((a, b) => {
      return a.startTime - b.startTime;
    });
    if (meetingArray.length == 0) {
      let timeSlots = generatesSlots(
        moment(`${convertDate(startDate)} 00:00`, dateFormat),
        moment(`${convertDate(endDate)} 24:00`, dateFormat),
        duration
      );
      return timeSlots;
    }

    let timeSlots = generatesSlots(
      moment(`${convertDate(startDate)} 00:00`, dateFormat),
      moment(
        moment(meetingArray[0].startTime).format(
          dateFormat
        ),
        dateFormat
      ),
      duration
    );
    timeSlotsResult = [...timeSlots];
    meetingArray.forEach((obj, index) => {
      let startTime = moment(obj.endTime);
      let endTime;
      let arrIndex = index + 1;

      if (meetingArray.length === arrIndex) {
        endTime = moment(
          `${convertDate(endDate)} 24:00`,
          dateFormat
        );
      } else {
        endTime = moment(meetingArray[arrIndex].startTime);
      }
      let minuts = checkTimeBetween(startTime, endTime);
      if (minuts >= duration) {
        let slots = generatesSlots(startTime, endTime, duration);
        timeSlotsResult.push(...slots);
      }
    });
    console.log("Result", timeSlotsResult);
    return timeSlotsResult;
  };