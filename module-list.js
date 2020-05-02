(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
        "calendar-sleepstudy-week": { url: "$H/m/calendar-sleepstudy-week.html", Table: "demo-wapp-sleepstudy", "booking": "sleepstudy-form", lookup: "demo-wapp-patient" },
        "calendar-sleepstudy-month": { url: "$H/m/calendar-sleepstudy-month.html", Table: "demo-wapp-sleepstudy", "booking": "sleepstudy-form" },
        "calendar-sleepstudy-day": { url: "$H/m/calendar-sleepstudy-day.html", Table: "demo-wapp-sleepstudy", Table2: "demo-wapp-assign", Table3: "demo-wapp-setup", Table4: "demo-wapp-scoring", Table5: "demo-wapp-reporting", "booking": "sleepstudy-form", "assign": "assign-form", "setup": "setup-form" },
        "sleepstudy-form": { url: "$H/m/sleepstudy-form.html", Table: "demo-wapp-sleepstudy", lookup: "demo-wapp-patient", lookup2: "demo-wapp-diagnostic-procedure", lookup3: "demo-wapp-research-project", lookup4: "demo-wapp-physician" },
        "sleepstudy-data": { url: "$H/m/sleepstudy-data.html", Table: "demo-wapp-sleepstudy", form_module: "sleepstudy-form" },
        "setup-form": { url: "$H/m/setup-form.html", Table: "demo-wapp-setup", Table2: "demo-wapp-sleepstudy", Table3: "demo-wapp-patient" },
        "setup-data": { url: "$H/m/setup-data.html", Table: "demo-wapp-setup", form_module: "setup-form" },
        "staff-data": { url: "$H/m/staff-data.html", Table: "demo-wapp-staff", form_module: "staff-form" },
        "staff-form": { url: "$H/m/staff-form.html", Table: "demo-wapp-staff" },
        "position-data": { url: "$H/m/position-data.html", Table: "demo-wapp-position", form_module: "position-form" },
        "position-form": { url: "$H/m/position-form.html", Table: "demo-wapp-position" },
        "diagnostic-procedure-data": { url: "$H/m/diagnostic-procedure-data.html", Table: "demo-wapp-diagnostic-procedure", form_module: "diagnostic-procedure-form" },
        "diagnostic-procedure-form": { url: "$H/m/diagnostic-procedure-form.html", Table: "demo-wapp-diagnostic-procedure" },
        "research-project-data": { url: "$H/m/research-project-data.html", Table: "demo-wapp-research-project", form_module: "research-project-form" },
        "research-project-form": { url: "$H/m/research-project-form.html", Table: "demo-wapp-research-project" },
        "patient-data": { url: "$H/m/patient-data.html", Table: "demo-wapp-patient", form_module: "patient-form" },
        "patient-form": { url: "$H/m/patient-form.html", Table: "demo-wapp-patient" },
        "physician-data": { url: "$H/m/physician-data.html", Table: "demo-wapp-physician", form_module: "physician-form" },
        "physician-form": { url: "$H/m/physician-form.html", Table: "demo-wapp-physician" },
        "room-data": { url: "$H/m/room-data.html", Table: "demo-wapp-room", form_module: "room-form" },
        "room-form": { url: "$H/m/room-form.html", Table: "demo-wapp-room" },
        "assign-data": { url: "$H/m/assign-data.html", Table: "demo-wapp-assign", form_module: "assign-form" },
        "assign-form": { url: "$H/m/assign-form.html", Table: "demo-wapp-assign", lookup: "demo-wapp-room", lookup2: "demo-wapp-roster" },
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
