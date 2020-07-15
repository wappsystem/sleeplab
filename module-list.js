(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
        "calendar-sleepstudy-week": { url: "$H/m/calendar-sleepstudy-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-roster", "booking": "booking-form", lookup: "demo-wapp-appointment" },
        "calendar-sleepstudy-scoring-week": { url: "$H/m/calendar-sleepstudy-scoring-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-scoring", lookup: "demo-wapp-appointment" },
        "calendar-sleepstudy-report-week": { url: "$H/m/calendar-sleepstudy-report-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-report", lookup: "demo-wapp-appointment" },
        "calendar-sleepstudy-waiting-list": { url: "$H/m/calendar-sleepstudy-waiting-list.html", Table: "demo-wapp-booking",  "booking": "booking-form", lookup: "demo-wapp-appointment" },
        "calendar-sleepstudy-month": { url: "$H/m/calendar-sleepstudy-month.html", Table: "demo-wapp-booking", "booking": "booking-form" },
        "calendar-sleepstudy-scoring-month": { url: "$H/m/calendar-sleepstudy-scoring-month.html", Table: "demo-wapp-booking", Table2: "demo-wapp-scoring" },
        "calendar-sleepstudy-report-month": { url: "$H/m/calendar-sleepstudy-report-month.html", Table: "demo-wapp-booking", Table2: "demo-wapp-report" },
        "calendar-sleepstudy-day": { url: "$H/m/calendar-sleepstudy-day.html", Table: "demo-wapp-booking", Table2: "demo-wapp-assign", Table3: "demo-wapp-setup", Table4: "demo-wapp-scoring", Table5: "demo-wapp-report", "booking": "booking-form", "assign": "assign-form", "setup": "setup-form", "scoring": "scoring-form", "report": "report-form" },
        "calendar-sleepstudy-assign-day": { url: "$H/m/calendar-sleepstudy-assign-day.html", Table: "demo-wapp-booking", Table2: "demo-wapp-assign", Table3: "demo-wapp-roster", Table4: "demo-wapp-room", "booking": "booking-form", "assign_drop": "assign-drop-form", "assign": "assign-form", "scoring": "scoring-form", "report": "report-form" },
        "calendar-appointment-week": { url: "$H/m/calendar-appointment-week.html", Table: "demo-wapp-appointment", Table2: "demo-wapp-booking", "appointment":"summary-print", "booking": "booking-form"},
        "calendar-appointment-month": { url: "$H/m/calendar-appointment-month.html", Table: "demo-wapp-appointment", Table2: "demo-wapp-booking", "appointment":"summary-print", "booking": "booking-form"},
        "calendar-appointment-waiting-list": { url: "$H/m/calendar-appointment-waiting-list.html", Table: "demo-wapp-appointment", Table2: "demo-wapp-booking", "appointment":"summary-print", "booking": "booking-form"},
        "summary-print": { url: "$H/m/summary-print.html", Table: "demo-wapp-appointment" },
        "booking-form": { url: "$H/m/booking-form.html", Table: "demo-wapp-booking", lookup: "demo-wapp-appointment", lookup2: "demo-wapp-diagnostic-procedure", lookup3: "demo-wapp-research-project", lookup4: "demo-wapp-physician", lookup5: "demo-wapp-appointment"},
        "booking-data": { url: "$H/m/booking-data.html", Table: "demo-wapp-booking", form_module: "booking-form" },
        "setup-form": { url: "$H/m/setup-form.html", Table: "demo-wapp-setup", Table2: "demo-wapp-booking", Table3: "demo-wapp-appointment" },
        "setup-data": { url: "$H/m/setup-data.html", Table: "demo-wapp-setup", form_module: "setup-form" },
        "scoring-form": { url: "$H/m/scoring-form.html", Table: "demo-wapp-scoring", Table2: "demo-wapp-booking", Table3: "demo-wapp-appointment",lookup:"demo-wapp-staff" },
        "scoring-data": { url: "$H/m/scoring-data.html", Table: "demo-wapp-scoring", form_module: "scoring-form"},
        "report-form": { url: "$H/m/report-form.html", Table: "demo-wapp-report", Table2: "demo-wapp-booking", Table3: "demo-wapp-appointment" ,lookup:"demo-wapp-physician"},
        "report-data": { url: "$H/m/report-data.html", Table: "demo-wapp-report", form_module: "report-form" },
        "staff-data": { url: "$H/m/staff-data.html", Table: "demo-wapp-staff", form_module: "staff-form" },
        "staff-form": { url: "$H/m/staff-form.html", Table: "demo-wapp-staff" },
        "position-data": { url: "$H/m/position-data.html", Table: "demo-wapp-position", form_module: "position-form" },
        "position-form": { url: "$H/m/position-form.html", Table: "demo-wapp-position" },
        "diagnostic-procedure-data": { url: "$H/m/diagnostic-procedure-data.html", Table: "demo-wapp-diagnostic-procedure", form_module: "diagnostic-procedure-form" },
        "diagnostic-procedure-form": { url: "$H/m/diagnostic-procedure-form.html", Table: "demo-wapp-diagnostic-procedure", lookup:"demo-wapp-questionnaire" },
        "research-project-data": { url: "$H/m/research-project-data.html", Table: "demo-wapp-research-project", form_module: "research-project-form" },
        "research-project-form": { url: "$H/m/research-project-form.html", Table: "demo-wapp-research-project" },
        "appointment-data": { url: "$H/m/appointment-data.html", Table: "demo-wapp-appointment", form_module: "appointment-form" },
        "appointment-form": { url: "$H/m/appointment-form.html", Table: "demo-wapp-appointment" },
        "physician-data": { url: "$H/m/physician-data.html", Table: "demo-wapp-physician", form_module: "physician-form" },
        "physician-form": { url: "$H/m/physician-form.html", Table: "demo-wapp-physician" },
        "room-data": { url: "$H/m/room-data.html", Table: "demo-wapp-room", form_module: "room-form" },
        "room-form": { url: "$H/m/room-form.html", Table: "demo-wapp-room" },
        "assign-data": { url: "$H/m/assign-data.html", Table: "demo-wapp-assign", form_module: "assign-form" },
        "assign-form": { url: "$H/m/assign-form.html", Table: "demo-wapp-assign", lookup: "demo-wapp-room", lookup2: "demo-wapp-roster" , lookup3: "demo-wapp-appointment" },
        "assign-drop-form": { url: "$H/m/assign-drop-form.html", Table: "demo-wapp-assign", lookup: "demo-wapp-room", Table2: "demo-wapp-roster", Table3: "demo-wapp-room" , lookup3: "demo-wapp-appointment" },
        "online-questionnaire": {url:"$H/online-questionnaire/index.html"},

        "ess-form": { url: "$H/m/library/ess-form.html", Table: "demo-wapp-ess", task_name:"ESS" },
        "psqi-form": { url: "$H/m/library/psqi-form.html", Table: "demo-wapp-psqi", task_name:"PSQI" },
        "dass-form": { url: "$H/m/library/dass-form.html", Table: "demo-wapp-dass", task_name:"DASS" },
        "hads-form": { url: "$H/m/library/hads-form.html", Table: "demo-wapp-hads", task_name:"HADS" },
        "contact-details-form": { url: "$H/m/library/contact-details-form.html", Table: "demo-wapp-contact-details", task_name:"Contact Details" },
        "medicare-referrals-form": { url: "$H/m/medicare-referrals-form.html", Table: "demo-wapp-medicare-referrals", task_name:"Medicare and Referrals" },

    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
