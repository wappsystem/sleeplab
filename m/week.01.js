//---------------------------------------------
var m = $vm.module_list['__MODULE__'];
if (m.prefix == undefined) m.prefix = "";
m.change_status = 0;
m.ref = 0
//---------------------------------------------
$('#previous__ID').on('click', function () { m.ref--; m.set_ref(); m.request_and_render(); })
$('#this__ID').on('click', function () { m.ref = 0; m.set_ref(); m.request_and_render(); })
$('#next__ID').on('click', function () { m.ref++; m.set_ref(); m.request_and_render(); })
$('#refresh__ID').on('click', function () { m.request_and_render(); })
//---------------------------------------------
m.set_ref = function () {
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";      
      var d = $vm.first_day_of_current_week();
      m.first_day = $vm.date_add_days(d, 7 * m.ref);
      m.last_day = $vm.date_add_days(d, 7 * m.ref + 6);
      var s = "From " + $vm.yyyymmdd_to_ddmmyyyy($vm.date_to_yyyymmdd(m.first_day)) + " to " + $vm.yyyymmdd_to_ddmmyyyy($vm.date_to_yyyymmdd(m.last_day));
      $('#period__ID').text(s);
      var header=""
      for(var i=0;i<7;i++){
            var dates=$vm.date_add_days(d, 7 * m.ref+i)
            header+="<div class='col_header__ID'>"+weekday[dates.getDay()]+" "+$vm.yyyymmdd_to_ddmmyyyy($vm.date_to_yyyymmdd(dates))+"</div>";
      }
      console.log(header) 
      $('#day_header__ID').html(header);
}
m.set_ref();
//---------------------------------------------
m.get_cell_div = function (d) {
      var R = undefined;
      $('#calendar__ID u').each(function () {
            var ddd = $(this).data('d');
            if (ddd !== undefined) {
                  var sd = $vm.date_to_yyyymmdd(ddd)
                  if (sd === d) {
                        R = $(this).parent().next().next();
                        return false;
                  }
            }
      })
      if (R !== undefined) return $(R);
      return R;
}
//-----------------------------------
m.calendar_render = function (html) {
      $('#body__ID').html('');
      var id = new Date().getTime();
      for (var i = 0; i < 1; i++) {
            var row = "<div class=row__ID>";
            for (var j = 0; j < 7; j++) {
                  var idd = 'A' + id + '_' + i + '_' + j
                  var d = $vm.date_add_days(m.first_day, j)
                  var N = d.getDate();
                  var N = "<u id=" + idd + " style=cursor:pointer><i class='fas fa-plus'></i></u>";
                  var weekday = "";
                  if (j == 0) weekday = "<span class=weekday>Monday</span>";
                  if (j == 1) weekday = "<span class=weekday>Tuesday</span>";
                  if (j == 2) weekday = "<span class=weekday>Wednesday</span>";
                  if (j == 3) weekday = "<span class=weekday>Thursday</span>";
                  if (j == 4) weekday = "<span class=weekday>Friday</span>";
                  if (j == 5) weekday = "<span class=weekday>Saturday</span>";
                  if (j == 6) weekday = "<span class=weekday>Sunday</span>";
                  if (d.getDate() == new Date().getDate() && d.getMonth() == new Date().getMonth()) row += "<div class=col__ID><div class=day__ID style='background-color:lightcoral'>" + N + "</div>" + weekday + "&nbsp;<div class=event_container__ID>" + html + "</div></div>";
                  else row += "<div class=col__ID><div class=day__ID>" + N + "</div>" + weekday + "&nbsp;<div class=event_container__ID>" + html + "</div></div>";
            }
            row += "</div>";
            $('#body__ID').append(row);
            for (var j = 0; j < 7; j++) {
                  var d = $vm.date_add_days(m.first_day, j);
                  var idd = 'A' + id + '_' + i + '_' + j
                  $('#' + idd).data('d', d);
                  $('#' + idd).on('click', function () {
                        var date = $vm.date_to_yyyymmdd($(this).data('d'))
                        m.on_day_click_fun(date);
                  })
            }
      }
}
//-----------------------------------
m.on_day_click_fun = function () { }
m.request_and_render = function () { };
//---------------------------------------------
