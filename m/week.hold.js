//---------------------------------------------
var m = $vm.module_list['__MODULE__'];
if (m.prefix == undefined) m.prefix = "";
m.change_status = 0;
m.ref = 0
//---------------------------------------------
$('#refresh__ID').on('click', function () { m.request_and_render(); })
$('#xnew__ID').on('click', function(){m.on_day_click_fun();})
//---------------------------------------------
m.set_ref = function () {
      var d = $vm.first_day_of_current_week();
      m.first_day = $vm.date_add_days(d, 7 * m.ref);
      m.last_day = $vm.date_add_days(d, 7 * m.ref + 6);
      var s = "Sleepstudies on hold";
      $('#period__ID').text(s);
      var header=""
      for(var i=0;i<7;i++){
            header+="<div class='col_header__ID'"+i+" >&nbsp;</div>";
      }
      $('#day_header__ID').html(header);
}
m.set_ref();
//---------------------------------------------
m.calendar_render = function (html) {
      $('#body__ID').html('');
      var id = new Date().getTime();
      var row = "<div class=row__ID>";
      for (var j = 0; j < 7; j++) {
            row += "<div class=col__ID><div class=event_container__ID id=hold_bookings__ID"+j+">" + html + "</div></div>";
      }
      row += "</div>";
      $('#body__ID').append(row);
      $('#new__ID').on('click', function () {
            $vm.load_module(m.booking,'',{goback:1})
      })
}
//-----------------------------------
m.on_day_click_fun = function () { }
m.request_and_render = function () { };
//---------------------------------------------
