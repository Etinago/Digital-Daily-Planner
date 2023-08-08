$(document).ready(function () {
    const timeblocks = $(".time-block");
    const currentTime = dayjs();
    const currentHour = currentTime.hour();
  
    // Update current day
    $("#currentDay").text(currentTime.format("dddd, MMMM D, YYYY"));
  
    // Update timeblocks' styling based on current time
    timeblocks.each(function () {
      const hour = parseInt($(this).attr("data-hour"));
      const description = $(this).find(".description");
  
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // Save event to local storage when save button is clicked
    $(".saveBtn").on("click", function () {
      const hour = $(this).parent().attr("data-hour");
      const description = $(this).siblings(".description").val();
      localStorage.setItem(hour, description);
    });
  
    // Load saved events from local storage
    timeblocks.each(function () {
      const hour = $(this).attr("data-hour");
      const savedDescription = localStorage.getItem(hour);
      $(this).find(".description").val(savedDescription);
    });
  });
  