
frappe.query_reports["Cost Center Profit Analysis"] = {
	"filters": [	
		
		{
			"fieldname":"cost_center",
			"label": __("Cost Center"),
			"fieldtype": "Link",
            "options": "Cost Center",
            "reqd": 1

        }

	]
}