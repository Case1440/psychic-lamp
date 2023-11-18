
$(".saveBtn").on("click", function () {
  var currentHour = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  localStorage.setItem(currentHour, text);
});

$(".time-block").each(function () {
  var currentHour = $(this).attr("id");
  var storedText = localStorage.getItem(currentHour);
  $(this).find(".description").val(storedText);
});

function updateHourBasedOnTime() {
  var time = [
    { element: $("#hour-9"), hour: 9 },
    { element: $("#hour-10"), hour: 10 },
    { element: $('#hour-11'), hour: 11 },
    { element: $("#hour-12"), hour: 12 },
    { element: $("#hour-1"), hour: 13 },
    { element: $("#hour-2"), hour: 14 },
    { element: $("#hour-3"), hour: 15 },
    { element: $("#hour-4"), hour: 16 },
    { element: $("#hour-5"), hour: 17 }
  ];

  var currentTime = dayjs().hour();
  console.log(currentTime)

  for (var i = 0; i < time.length; i++) {
    var element = time[i].element;
    var hour = time[i].hour;

    if (hour < currentTime) {
      element.removeClass("present future").addClass("past");
    } else if (hour > currentTime) {
      element.removeClass("past present").addClass("future");
    } else {
      element.removeClass("past future").addClass("present");
    }
  };
};

updateHourBasedOnTime();

var date = dayjs().format('dddd, MMMM DD');
var date2 = dayjs().format('hh:mm:ss A');
$('#currentDay').text(date2 + " " + date);