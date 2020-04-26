(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "calendar-sleepstudy-week":       {url:"$H/m/calendar-sleepstudy-week.html", Table:"demo-wapp-sleepstudy","booking":"sleepstudy-form"},
        "calendar-sleepstudy-month":       {url:"$H/m/calendar-sleepstudy-month.html",Table:"demo-wapp-sleepstudy","booking":"sleepstudy-form"},
        "calendar-sleepstudy-day":       {url:"$H/m/calendar-sleepstudy-day.html",Table:"demo-wapp-sleepstudy","booking":"sleepstudy-form"},
        "sleepstudy-form":       {url:"$H/m/sleepstudy-form.html",Table:"demo-wapp-sleepstudy",lookup:"demo-wapp-patient",lookup2:"demo-wapp-diagnostic-procedure",lookup3:"demo-wapp-research-project"},
        "sleepstudy-data":       {url:"$H/m/sleepstudy-data.html",Table:"demo-wapp-sleepstudy",form_module:"sleepstudy-form"},
        "staff-data":       {url:"$H/m/staff-data.html",Table:"demo-wapp-staff",form_module:"staff-form"},
        "staff-form":       {url:"$H/m/staff-form.html",Table:"demo-wapp-staff"},
        "position-data":       {url:"$H/m/position-data.html",Table:"demo-wapp-position",form_module:"position-form"},
        "position-form":       {url:"$H/m/position-form.html",Table:"demo-wapp-position"},
        "diagnostic-procedure-data":       {url:"$H/m/diagnostic-procedure-data.html",Table:"demo-wapp-diagnostic-procedure",form_module:"diagnostic-procedure-form"},
        "diagnostic-procedure-form":       {url:"$H/m/diagnostic-procedure-form.html",Table:"demo-wapp-diagnostic-procedure"},
        "research-project-data":       {url:"$H/m/research-project-data.html",Table:"demo-wapp-research-project",form_module:"research-project-form"},
        "research-project-form":       {url:"$H/m/research-project-form.html",Table:"demo-wapp-research-project"},
        "patient-data":       {url:"$H/m/patient-data.html",Table:"demo-wapp-patient",form_module:"patient-form"},
        "patient-form":       {url:"$H/m/patient-form.html",Table:"demo-wapp-patient"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
