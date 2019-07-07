/**
 * 所有的权限列表
 * 
 */

let full_pm_list = [
    {
        "code": "equipment_monitor",
        "name": "equipment_monitor",
        "id": "5cae05bb899173245e09039c",
        "type": 1
    },
    {
        "code": "customer_manage",
        "name": "customer_manage",
        "id": "5cae05bb899173245e09039d",
        "type": 1
    },
    {
        "code": "customer_stat_manage",
        "name": "customer_stat_manage",
        "pid": "5cae05bb899173245e09039d",
        "id": "5cae05bb899173245e09039e",
        "type": 1
    },
    {
        "code": "customer_info_manage",
        "name": "customer_info_manage",
        "pid": "5cae05bb899173245e09039d",
        "id": "5cae05bb899173245e09039f",
        "type": 1
    },
    {
        "code": "customer_equipment_manage",
        "name": "customer_equipment_manage",
        "pid": "5cae05bb899173245e09039d",
        "id": "5cae05bb899173245e0903a0",
        "type": 1
    },
    {
        "code": "customer_bo_manage",
        "name": "customer_bo_manage",
        "pid": "5cae05bb899173245e09039d",
        "id": "5cae05bb899173245e0903a1",
        "type": 1
    },
    {
        "code": "customer_satisfaction_manage",
        "name": "customer_satisfaction_manage",
        "pid": "5cae05bb899173245e09039d",
        "id": "5cae05bb899173245e0903a2",
        "type": 1
    },
    {
        "code": "customer_info_manage_add",
        "name": "customer_info_manage_add",
        "pid": "5cae05bb899173245e09039f",
        "id": "5cae05bb899173245e0903a3",
        "type": 3
    },
    {
        "code": "customer_info_manage_export",
        "name": "customer_info_manage_export",
        "pid": "5cae05bb899173245e09039f",
        "id": "5cae05bb899173245e0903a4",
        "type": 3
    },
    {
        "code": "customer_info_manage_info",
        "name": "customer_info_manage_info",
        "pid": "5cae05bb899173245e09039f",
        "id": "5cae05bb899173245e0903a5",
        "type": 3
    },
    {
        "code": "customer_info_manage_import",
        "name": "customer_info_manage_import",
        "pid": "5cae05bb899173245e09039f",
        "id": "5cae05bb899173245e0903a6",
        "type": 3
    },
    {
        "code": "customer_info_manage_delete",
        "name": "customer_info_manage_delete",
        "pid": "5cae05bb899173245e09039f",
        "id": "5cae05bb899173245e0903a7",
        "type": 3
    },
    // {
    //     "code": "customer_equipment_manage_add",
    //     "name": "customer_equipment_manage_add",
    //     "pid": "5cae05bb899173245e0903a0",
    //     "id": "5cae05bb899173245e0903a8",
    //     "type": 3
    // },
    // {
    //     "code": "customer_equipment_manage_export",
    //     "name": "customer_equipment_manage_export",
    //     "pid": "5cae05bb899173245e0903a0",
    //     "id": "5cae05bb899173245e0903a9",
    //     "type": 3
    // },
    // {
    //     "code": "customer_equipment_manage_info",
    //     "name": "customer_equipment_manage_info",
    //     "pid": "5cae05bb899173245e0903a0",
    //     "id": "5cae05bb899173245e0903aa",
    //     "type": 3
    // },
    // {
    //     "code": "customer_equipment_manage_import",
    //     "name": "customer_equipment_manage_import",
    //     "pid": "5cae05bb899173245e0903a0",
    //     "id": "5cae05bb899173245e0903ab",
    //     "type": 3
    // },
    // {
    //     "code": "customer_equipment_manage_delete",
    //     "name": "customer_equipment_manage_delete",
    //     "pid": "5cae05bb899173245e0903a0",
    //     "id": "5cae05bb899173245e0903ac",
    //     "type": 3
    // },
    // {
    //     "code": "customer_bo_manage_add",
    //     "name": "customer_bo_manage_add",
    //     "pid": "5cae05bb899173245e0903a1",
    //     "id": "5cae05bb899173245e0903ad",
    //     "type": 3
    // },
    // {
    //     "code": "customer_bo_manage_info",
    //     "name": "customer_bo_manage_info",
    //     "pid": "5cae05bb899173245e0903a1",
    //     "id": "5cae05bb899173245e0903ae",
    //     "type": 3
    // },
    // {
    //     "code": "customer_bo_manage_record_follow",
    //     "name": "customer_bo_manage_record_follow",
    //     "pid": "5cae05bb899173245e0903a1",
    //     "id": "5cae05bb899173245e0903af",
    //     "type": 3
    // },
    // {
    //     "code": "customer_bo_manage_record_edit",
    //     "name": "customer_bo_manage_record_edit",
    //     "pid": "5cae05bb899173245e0903a1",
    //     "id": "5cae05bb899173245e0903b0",
    //     "type": 3
    // },
    // {
    //     "code": "customer_satisfaction_manage_add",
    //     "name": "customer_satisfaction_manage_add",
    //     "pid": "5cae05bb899173245e0903a2",
    //     "id": "5cae05bb899173245e0903b1",
    //     "type": 3
    // },
    // {
    //     "code": "customer_satisfaction_manage_export",
    //     "name": "customer_satisfaction_manage_export",
    //     "pid": "5cae05bb899173245e0903a2",
    //     "id": "5cae05bb899173245e0903b2",
    //     "type": 3
    // },
    // {
    //     "code": "customer_satisfaction_manage_info",
    //     "name": "customer_satisfaction_manage_info",
    //     "pid": "5cae05bb899173245e0903a2",
    //     "id": "5cae05bb899173245e0903b3",
    //     "type": 3
    // },
    // {
    //     "code": "sop",
    //     "name": "sop",
    //     "id": "5cae05bb899173245e0903cc",
    //     "type": 1
    // },
    // {
    //     "code": "sop_stat",
    //     "name": "sop_stat",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903cd",
    //     "type": 1
    // },
    // {
    //     "code": "sop_warning",
    //     "name": "sop_warning",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903ce",
    //     "type": 1
    // },
    // {
    //     "code": "sop_warning_add",
    //     "name": "sop_warning_add",
    //     "pid": "5cae05bb899173245e0903ce",
    //     "id": "5cae05bb899173245e0903cf",
    //     "type": 3
    // },
    // {
    //     "code": "sop_warning_export",
    //     "name": "sop_warning_export",
    //     "pid": "5cae05bb899173245e0903ce",
    //     "id": "5cae05bb899173245e0903d0",
    //     "type": 3
    // },
    // {
    //     "code": "sop_warning_info",
    //     "name": "sop_warning_info",
    //     "pid": "5cae05bb899173245e0903ce",
    //     "id": "5cae05bb899173245e0903d1",
    //     "type": 3
    // },
    // {
    //     "code": "sop_warning_delete",
    //     "name": "sop_warning_delete",
    //     "pid": "5cae05bb899173245e0903ce",
    //     "id": "5cae05bb899173245e0903d2",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection",
    //     "name": "sop_inspection",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903d3",
    //     "type": 1
    // },
    // {
    //     "code": "sop_inspection_add",
    //     "name": "sop_inspection_add",
    //     "pid": "5cae05bb899173245e0903d3",
    //     "id": "5cae05bb899173245e0903d4",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_export",
    //     "name": "sop_inspection_export",
    //     "pid": "5cae05bb899173245e0903d3",
    //     "id": "5cae05bb899173245e0903d5",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_info",
    //     "name": "sop_inspection_info",
    //     "pid": "5cae05bb899173245e0903d3",
    //     "id": "5cae05bb899173245e0903d6",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_delete",
    //     "name": "sop_inspection_delete",
    //     "pid": "5cae05bb899173245e0903d3",
    //     "id": "5cae05bb899173245e0903d7",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance",
    //     "name": "sop_maintenance",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903d8",
    //     "type": 1
    // },
    // {
    //     "code": "sop_maintenance_add",
    //     "name": "sop_maintenance_add",
    //     "pid": "5cae05bb899173245e0903d8",
    //     "id": "5cae05bb899173245e0903d9",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_export",
    //     "name": "sop_maintenance_export",
    //     "pid": "5cae05bb899173245e0903d8",
    //     "id": "5cae05bb899173245e0903da",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_info",
    //     "name": "sop_maintenance_info",
    //     "pid": "5cae05bb899173245e0903d8",
    //     "id": "5cae05bb899173245e0903db",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_delete",
    //     "name": "sop_maintenance_delete",
    //     "pid": "5cae05bb899173245e0903d8",
    //     "id": "5cae05bb899173245e0903dc",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_standard",
    //     "name": "sop_inspection_standard",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903dd",
    //     "type": 1
    // },
    // {
    //     "code": "sop_inspection_standard_add",
    //     "name": "sop_inspection_standard_add",
    //     "pid": "5cae05bb899173245e0903dd",
    //     "id": "5cae05bb899173245e0903de",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_standard_info",
    //     "name": "sop_inspection_standard_info",
    //     "pid": "5cae05bb899173245e0903dd",
    //     "id": "5cae05bb899173245e0903df",
    //     "type": 3
    // },
    // {
    //     "code": "sop_inspection_standard_delete",
    //     "name": "sop_inspection_standard_delete",
    //     "pid": "5cae05bb899173245e0903dd",
    //     "id": "5cae05bb899173245e0903e0",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_standard",
    //     "name": "sop_maintenance_standard",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903e1",
    //     "type": 1
    // },
    // {
    //     "code": "sop_maintenance_standard_add",
    //     "name": "sop_maintenance_standard_add",
    //     "pid": "5cae05bb899173245e0903e1",
    //     "id": "5cae05bb899173245e0903e2",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_standard_info",
    //     "name": "sop_maintenance_standard_info",
    //     "pid": "5cae05bb899173245e0903e1",
    //     "id": "5cae05bb899173245e0903e3",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_standard_delete",
    //     "name": "sop_maintenance_standard_delete",
    //     "pid": "5cae05bb899173245e0903e1",
    //     "id": "5cae05bb899173245e0903e4",
    //     "type": 3
    // },
    // {
    //     "code": "sop_common",
    //     "name": "sop_common",
    //     "pid": "5cae05bb899173245e0903cc",
    //     "id": "5cae05bb899173245e0903e5",
    //     "type": 1
    // },
    // {
    //     "code": "sop_common_info",
    //     "name": "sop_common_info",
    //     "pid": "5cae05bb899173245e0903e5",
    //     "id": "5cae05bb899173245e0903e6",
    //     "type": 3
    // },
    // {
    //     "code": "warning",
    //     "name": "warning",
    //     "id": "5cae05bb899173245e0903e7",
    //     "type": 1
    // },
    // {
    //     "code": "warning_stat",
    //     "name": "warning_stat",
    //     "pid": "5cae05bb899173245e0903e7",
    //     "id": "5cae05bb899173245e0903e8",
    //     "type": 1
    // },
    // {
    //     "code": "warning_apply",
    //     "name": "warning_apply",
    //     "pid": "5cae05bb899173245e0903e7",
    //     "id": "5cae05bb899173245e0903e9",
    //     "type": 1
    // },
    // {
    //     "code": "warning_apply_info",
    //     "name": "warning_apply_info",
    //     "pid": "5cae05bb899173245e0903e9",
    //     "id": "5cae05bc899173245e0903ea",
    //     "type": 3
    // },
    // {
    //     "code": "warning_system",
    //     "name": "warning_system",
    //     "pid": "5cae05bb899173245e0903e7",
    //     "id": "5cae05bc899173245e0903eb",
    //     "type": 1
    // },
    // {
    //     "code": "warning_system_info",
    //     "name": "warning_system_info",
    //     "pid": "5cae05bc899173245e0903eb",
    //     "id": "5cae05bc899173245e0903ec",
    //     "type": 3
    // },
    // {
    //     "code": "warning_history",
    //     "name": "warning_history",
    //     "pid": "5cae05bb899173245e0903e7",
    //     "id": "5cae05bc899173245e0903ed",
    //     "type": 1
    // },
    // {
    //     "code": "warning_history_info",
    //     "name": "warning_history_info",
    //     "pid": "5cae05bc899173245e0903ed",
    //     "id": "5cae05bc899173245e0903ee",
    //     "type": 3
    // },
    // {
    //     "code": "setting",
    //     "name": "setting",
    //     "id": "5cae05bc899173245e0903ef",
    //     "type": 1
    // },
    // {
    //     "code": "setting_equipment",
    //     "name": "setting_equipment",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e0903f0",
    //     "type": 1
    // },
    // {
    //     "code": "setting_equipment_category",
    //     "name": "setting_equipment_category",
    //     "pid": "5cae05bc899173245e0903f0",
    //     "id": "5cae05bc899173245e0903f1",
    //     "type": 1
    // },
    // {
    //     "code": "setting_equipment_category_save",
    //     "name": "setting_equipment_category_save",
    //     "pid": "5cae05bc899173245e0903f1",
    //     "id": "5cae05bc899173245e0903f2",
    //     "type": 3
    // },
    // {
    //     "code": "setting_equipment_model",
    //     "name": "setting_equipment_model",
    //     "pid": "5cae05bc899173245e0903f0",
    //     "id": "5cae05bc899173245e0903f3",
    //     "type": 1
    // },
    // {
    //     "code": "setting_equipment_model_add",
    //     "name": "setting_equipment_model_add",
    //     "pid": "5cae05bc899173245e0903f3",
    //     "id": "5cae05bc899173245e0903f4",
    //     "type": 3
    // },
    // {
    //     "code": "setting_equipment_model_info",
    //     "name": "setting_equipment_model_info",
    //     "pid": "5cae05bc899173245e0903f3",
    //     "id": "5cae05bc899173245e0903f5",
    //     "type": 3
    // },
    // {
    //     "code": "setting_equipment_model_delete",
    //     "name": "setting_equipment_model_delete",
    //     "pid": "5cae05bc899173245e0903f3",
    //     "id": "5cae05bc899173245e0903f6",
    //     "type": 3
    // },
    // {
    //     "code": "setting_base",
    //     "name": "setting_base",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e0903f7",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_area",
    //     "name": "setting_base_area",
    //     "pid": "5cae05bc899173245e0903f7",
    //     "id": "5cae05bc899173245e0903f8",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_area_save",
    //     "name": "setting_base_area_save",
    //     "pid": "5cae05bc899173245e0903f8",
    //     "id": "5cae05bc899173245e0903f9",
    //     "type": 3
    // },
    // {
    //     "code": "setting_base_industry",
    //     "name": "setting_base_industry",
    //     "pid": "5cae05bc899173245e0903f7",
    //     "id": "5cae05bc899173245e0903fa",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_industry_save",
    //     "name": "setting_base_industry_save",
    //     "pid": "5cae05bc899173245e0903fa",
    //     "id": "5cae05bc899173245e0903fb",
    //     "type": 3
    // },
    // {
    //     "code": "setting_base_client",
    //     "name": "setting_base_client",
    //     "pid": "5cae05bc899173245e0903f7",
    //     "id": "5cae05bc899173245e0903fc",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_client_save",
    //     "name": "setting_base_client_save",
    //     "pid": "5cae05bc899173245e0903fc",
    //     "id": "5cae05bc899173245e0903fd",
    //     "type": 3
    // },
    // {
    //     "code": "setting_base_bo",
    //     "name": "setting_base_bo",
    //     "pid": "5cae05bc899173245e0903f7",
    //     "id": "5cae05bc899173245e0903fe",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_bo_save",
    //     "name": "setting_base_bo_save",
    //     "pid": "5cae05bc899173245e0903fe",
    //     "id": "5cae05bc899173245e0903ff",
    //     "type": 3
    // },
    // {
    //     "code": "setting_base_warning",
    //     "name": "setting_base_warning",
    //     "pid": "5cae05bc899173245e0903f7",
    //     "id": "5cae05bc899173245e090400",
    //     "type": 1
    // },
    // {
    //     "code": "setting_base_warning_save",
    //     "name": "setting_base_warning_save",
    //     "pid": "5cae05bc899173245e090400",
    //     "id": "5cae05bc899173245e090401",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account",
    //     "name": "setting_account",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e090402",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_base",
    //     "name": "setting_account_base",
    //     "pid": "5cae05bc899173245e090402",
    //     "id": "5cae05bc899173245e090403",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_user",
    //     "name": "setting_account_user",
    //     "pid": "5cae05bc899173245e090402",
    //     "id": "5cae05bc899173245e090404",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_user_add",
    //     "name": "setting_account_user_add",
    //     "pid": "5cae05bc899173245e090404",
    //     "id": "5cae05bc899173245e090405",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_permission",
    //     "name": "setting_account_user_permission",
    //     "pid": "5cae05bc899173245e090404",
    //     "id": "5cae05bc899173245e090406",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_info",
    //     "name": "setting_account_user_info",
    //     "pid": "5cae05bc899173245e090404",
    //     "id": "5cae05bc899173245e090407",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_delete",
    //     "name": "setting_account_user_delete",
    //     "pid": "5cae05bc899173245e090404",
    //     "id": "5cae05bc899173245e090408",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role",
    //     "name": "setting_account_role",
    //     "pid": "5cae05bc899173245e090402",
    //     "id": "5cae05bc899173245e090409",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_role_add",
    //     "name": "setting_account_role_add",
    //     "pid": "5cae05bc899173245e090409",
    //     "id": "5cae05bc899173245e09040a",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role_info",
    //     "name": "setting_account_role_info",
    //     "pid": "5cae05bc899173245e090409",
    //     "id": "5cae05bc899173245e09040b",
    //     "type": 3
    // },
    // {
    //     "code": "setting_push",
    //     "name": "setting_push",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e09040c",
    //     "type": 1
    // },
    // {
    //     "code": "setting_push_msg",
    //     "name": "setting_push_msg",
    //     "pid": "5cae05bc899173245e09040c",
    //     "id": "5cae05bc899173245e09040d",
    //     "type": 1
    // },
    // {
    //     "code": "setting_push_chart",
    //     "name": "setting_push_chart",
    //     "pid": "5cae05bc899173245e09040c",
    //     "id": "5cae05bc899173245e09040e",
    //     "type": 1
    // },
    // {
    //     "code": "setting_advice",
    //     "name": "setting_advice",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e09040f",
    //     "type": 1
    // },
    // {
    //     "code": "setting_about",
    //     "name": "setting_about",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e090410",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_stat",
    //     "name": "equipment_monitor_stat",
    //     "pid": "5cae05bb899173245e09039c",
    //     "id": "5cae05bc899173245e090411",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_info",
    //     "name": "equipment_monitor_info",
    //     "pid": "5cae05bb899173245e09039c",
    //     "id": "5cae05bc899173245e090412",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_info_real",
    //     "name": "equipment_monitor_info_real",
    //     "pid": "5cae05bc899173245e090412",
    //     "id": "5cae05bc899173245e090413",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_info_chart",
    //     "name": "equipment_monitor_info_chart",
    //     "pid": "5cae05bc899173245e090412",
    //     "id": "5cae05bc899173245e090414",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_info_setting",
    //     "name": "equipment_monitor_info_setting",
    //     "pid": "5cae05bc899173245e090412",
    //     "id": "5cae05bc899173245e090415",
    //     "type": 1
    // },
    // {
    //     "code": "equipment_monitor_info_gateway",
    //     "name": "equipment_monitor_info_gateway",
    //     "pid": "5cae05bc899173245e090412",
    //     "id": "5cae05bc899173245e090416",
    //     "type": 1
    // },
    // {
    //     "code": "sop_inspection_standard_import",
    //     "name": "sop_inspection_standard_import",
    //     "pid": "5cae05bb899173245e0903dd",
    //     "id": "5cae05bc899173245e090417",
    //     "type": 3
    // },
    // {
    //     "code": "sop_maintenance_standard_import",
    //     "name": "sop_maintenance_standard_import",
    //     "pid": "5cae05bb899173245e0903e1",
    //     "id": "5cae05bc899173245e090418",
    //     "type": 3
    // },
    // {
    //     "code": "report",
    //     "name": "report",
    //     "id": "5cae05bc899173245e090419",
    //     "type": 1
    // },
    // {
    //     "code": "report_standard",
    //     "name": "report_standard",
    //     "pid": "5cae05bc899173245e090419",
    //     "id": "5cae05bc899173245e09041a",
    //     "type": 1
    // },
    // {
    //     "code": "report_custom",
    //     "name": "report_custom",
    //     "pid": "5cae05bc899173245e090419",
    //     "id": "5cae05bc899173245e09041b",
    //     "type": 1
    // },
    // {
    //     "code": "setting_report",
    //     "name": "setting_report",
    //     "pid": "5cae05bc899173245e0903ef",
    //     "id": "5cae05bc899173245e09041c",
    //     "type": 1
    // },
    // {
    //     "code": "setting_report_option",
    //     "name": "setting_report_option",
    //     "pid": "5cae05bc899173245e09041c",
    //     "id": "5cae05bc899173245e09041d",
    //     "type": 1
    // },
    // {
    //     "code": "setting_var",
    //     "name": "setting_var",
    //     "pid": "5cae05bc899173245e09041c",
    //     "id": "5cae05bc899173245e09041e",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale",
    //     "name": "after_sale",
    //     "id": "5cc2f8a16477136530fa0c07",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_stat",
    //     "name": "after_sale_stat",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c08",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order",
    //     "name": "after_sale_service_order",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c09",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_stat",
    //     "name": "after_sale_service_order_stat",
    //     "pid": "5cc2f8a16477136530fa0c09",
    //     "id": "5cc2f8a16477136530fa0c0a",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current",
    //     "name": "after_sale_service_order_current",
    //     "pid": "5cc2f8a16477136530fa0c09",
    //     "id": "5cc2f8a16477136530fa0c0b",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_add",
    //     "name": "after_sale_service_order_current_add",
    //     "pid": "5cc2f8a16477136530fa0c0b",
    //     "id": "5cc2f8a16477136530fa0c0c",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_service_order_current_info",
    //     "name": "after_sale_service_order_current_info",
    //     "pid": "5cc2f8a16477136530fa0c0b",
    //     "id": "5cc2f8a16477136530fa0c0d",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_mess",
    //     "name": "after_sale_service_order_current_info_mess",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c0e",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_req",
    //     "name": "after_sale_service_order_current_info_req",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c0f",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_res",
    //     "name": "after_sale_service_order_current_info_res",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c10",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_deal",
    //     "name": "after_sale_service_order_current_info_deal",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c11",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_use",
    //     "name": "after_sale_service_order_current_info_use",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c12",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_trim",
    //     "name": "after_sale_service_order_current_info_trim",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c13",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_current_info_cost",
    //     "name": "after_sale_service_order_current_info_cost",
    //     "pid": "5cc2f8a16477136530fa0c0d",
    //     "id": "5cc2f8a16477136530fa0c14",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history",
    //     "name": "after_sale_service_order_history",
    //     "pid": "5cc2f8a16477136530fa0c09",
    //     "id": "5cc2f8a16477136530fa0c15",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info",
    //     "name": "after_sale_service_order_history_info",
    //     "pid": "5cc2f8a16477136530fa0c15",
    //     "id": "5cc2f8a16477136530fa0c16",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_service_order_history_info_mess",
    //     "name": "after_sale_service_order_history_info_mess",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c17",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_req",
    //     "name": "after_sale_service_order_history_info_req",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c18",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_res",
    //     "name": "after_sale_service_order_history_info_res",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c19",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_deal",
    //     "name": "after_sale_service_order_history_info_deal",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c1a",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_use",
    //     "name": "after_sale_service_order_history_info_use",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c1b",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_trim",
    //     "name": "after_sale_service_order_history_info_trim",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c1c",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_cost",
    //     "name": "after_sale_service_order_history_info_cost",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c1d",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_service_order_history_info_eval",
    //     "name": "after_sale_service_order_history_info_eval",
    //     "pid": "5cc2f8a16477136530fa0c16",
    //     "id": "5cc2f8a16477136530fa0c1e",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order",
    //     "name": "after_sale_wo_order",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c1f",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_stat",
    //     "name": "after_sale_wo_order_stat",
    //     "pid": "5cc2f8a16477136530fa0c1f",
    //     "id": "5cc2f8a16477136530fa0c20",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current",
    //     "name": "after_sale_wo_order_current",
    //     "pid": "5cc2f8a16477136530fa0c1f",
    //     "id": "5cc2f8a16477136530fa0c21",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info",
    //     "name": "after_sale_wo_order_current_info",
    //     "pid": "5cc2f8a16477136530fa0c21",
    //     "id": "5cc2f8a16477136530fa0c23",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_mess",
    //     "name": "after_sale_wo_order_current_info_mess",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c24",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_req",
    //     "name": "after_sale_wo_order_current_info_req",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c25",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_deal",
    //     "name": "after_sale_wo_order_current_info_deal",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c26",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_use",
    //     "name": "after_sale_wo_order_current_info_use",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c27",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_cost",
    //     "name": "after_sale_wo_order_history_info_cost",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c28",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_cost",
    //     "name": "after_sale_wo_order_current_info_cost",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c29",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_current_info_fin",
    //     "name": "after_sale_wo_order_current_info_fin",
    //     "pid": "5cc2f8a16477136530fa0c23",
    //     "id": "5cc2f8a16477136530fa0c2a",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history",
    //     "name": "after_sale_wo_order_history",
    //     "pid": "5cc2f8a16477136530fa0c1f",
    //     "id": "5cc2f8a16477136530fa0c2b",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info",
    //     "name": "after_sale_wo_order_history_info",
    //     "pid": "5cc2f8a16477136530fa0c2b",
    //     "id": "5cc2f8a16477136530fa0c2c",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_mess",
    //     "name": "after_sale_wo_order_history_info_mess",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c2d",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_req",
    //     "name": "after_sale_wo_order_history_info_req",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c2e",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_deal",
    //     "name": "after_sale_wo_order_history_info_deal",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c2f",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_use",
    //     "name": "after_sale_wo_order_history_info_use",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c30",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_wo_order_history_info_eval",
    //     "name": "after_sale_wo_order_history_info_eval",
    //     "pid": "5cc2f8a16477136530fa0c2c",
    //     "id": "5cc2f8a16477136530fa0c31",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_all_timetab",
    //     "name": "after_sale_all_timetab",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c32",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_all_timetab_info",
    //     "name": "after_sale_all_timetab_info",
    //     "pid": "5cc2f8a16477136530fa0c32",
    //     "id": "5cc2f8a16477136530fa0c33",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_my_timetab",
    //     "name": "after_sale_my_timetab",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c34",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_grade",
    //     "name": "after_sale_grade",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c35",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_grade_look_echart",
    //     "name": "after_sale_grade_look_echart",
    //     "pid": "5cc2f8a16477136530fa0c35",
    //     "id": "5cc2f8a16477136530fa0c36",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_grade_look_cust",
    //     "name": "after_sale_grade_look_cust",
    //     "pid": "5cc2f8a16477136530fa0c35",
    //     "id": "5cc2f8a16477136530fa0c37",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_grade_look_cust_rec",
    //     "name": "after_sale_grade_look_cust_rec",
    //     "pid": "5cc2f8a16477136530fa0c35",
    //     "id": "5cc2f8a16477136530fa0c38",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_grade_look_cust_rec_info",
    //     "name": "after_sale_grade_look_cust_rec_info",
    //     "pid": "5cc2f8a16477136530fa0c35",
    //     "id": "5cc2f8a16477136530fa0c39",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_base",
    //     "name": "after_sale_base",
    //     "pid": "5cc2f8a16477136530fa0c07",
    //     "id": "5cc2f8a16477136530fa0c3a",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_base_pri",
    //     "name": "after_sale_base_pri",
    //     "pid": "5cc2f8a16477136530fa0c3a",
    //     "id": "5cc2f8a16477136530fa0c3b",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_base_pri_info",
    //     "name": "after_sale_base_pri_info",
    //     "pid": "5cc2f8a16477136530fa0c3b",
    //     "id": "5cc2f8a16477136530fa0c3c",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_base_re",
    //     "name": "after_sale_base_re",
    //     "pid": "5cc2f8a16477136530fa0c3a",
    //     "id": "5cc2f8a16477136530fa0c3d",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_base_re_info",
    //     "name": "after_sale_base_re_info",
    //     "pid": "5cc2f8a16477136530fa0c3d",
    //     "id": "5cc2f8a16477136530fa0c3e",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_base_step",
    //     "name": "after_sale_base_step",
    //     "pid": "5cc2f8a16477136530fa0c3a",
    //     "id": "5cc2f8a16477136530fa0c3f",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_base_step_info",
    //     "name": "after_sale_base_step_info",
    //     "pid": "5cc2f8a16477136530fa0c3f",
    //     "id": "5cc2f8a16477136530fa0c40",
    //     "type": 3
    // },
    // {
    //     "code": "after_sale_base_grade",
    //     "name": "after_sale_base_grade",
    //     "pid": "5cc2f8a16477136530fa0c3a",
    //     "id": "5cc2f8a16477136530fa0c41",
    //     "type": 1
    // },
    // {
    //     "code": "after_sale_base_grade_info",
    //     "name": "after_sale_base_grade_info",
    //     "pid": "5cc2f8a16477136530fa0c41",
    //     "id": "5cc2f8a16477136530fa0c42",
    //     "type": 3
    // },
    // {
    //     "code": "parts_manager",
    //     "name": "parts_manager",
    //     "id": "5cc2f8a16477136530fa0c43",
    //     "type": 1
    // },
    // {
    //     "code": "parts_manager_add",
    //     "name": "parts_manager_add",
    //     "pid": "5cc2f8a16477136530fa0c43",
    //     "id": "5cc2f8a16477136530fa0c44",
    //     "type": 3
    // },
    // {
    //     "code": "parts_manager_export",
    //     "name": "parts_manager_export",
    //     "pid": "5cc2f8a16477136530fa0c43",
    //     "id": "5cc2f8a16477136530fa0c45",
    //     "type": 3
    // },
    // {
    //     "code": "parts_manager_info",
    //     "name": "parts_manager_info",
    //     "pid": "5cc2f8a16477136530fa0c43",
    //     "id": "5cc2f8a16477136530fa0c46",
    //     "type": 3
    // },
    // {
    //     "code": "parts_manager_import",
    //     "name": "parts_manager_import",
    //     "pid": "5cc2f8a16477136530fa0c43",
    //     "id": "5cc2f8a16477136530fa0c47",
    //     "type": 3
    // },
    // {
    //     "code": "parts_manager_delete",
    //     "name": "parts_manager_delete",
    //     "pid": "5cc2f8a16477136530fa0c43",
    //     "id": "5cc2f8a16477136530fa0c48",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account",
    //     "name": "setting_account",
    //     "id": "5cc2f8a16477136530fa0c49",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_user",
    //     "name": "setting_account_user",
    //     "pid": "5cc2f8a16477136530fa0c49",
    //     "id": "5cc2f8a16477136530fa0c4a",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_user_equ",
    //     "name": "setting_account_user_equ",
    //     "pid": "5cc2f8a16477136530fa0c4a",
    //     "id": "5cc2f8a16477136530fa0c4b",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_sub",
    //     "name": "setting_account_user_sub",
    //     "pid": "5cc2f8a16477136530fa0c4a",
    //     "id": "5cc2f8a16477136530fa0c4c",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_info",
    //     "name": "setting_account_user_info",
    //     "pid": "5cc2f8a16477136530fa0c4a",
    //     "id": "5cc2f8a16477136530fa0c4d",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_delete",
    //     "name": "setting_account_user_delete",
    //     "pid": "5cc2f8a16477136530fa0c4a",
    //     "id": "5cc2f8a16477136530fa0c4e",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_user_save",
    //     "name": "setting_account_user_save",
    //     "pid": "5cc2f8a16477136530fa0c4a",
    //     "id": "5cc2f8a16477136530fa0c4f",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role",
    //     "name": "setting_account_role",
    //     "pid": "5cc2f8a16477136530fa0c49",
    //     "id": "5cc2f8a16477136530fa0c50",
    //     "type": 1
    // },
    // {
    //     "code": "setting_account_role_add",
    //     "name": "setting_account_role_add",
    //     "pid": "5cc2f8a16477136530fa0c50",
    //     "id": "5cc2f8a16477136530fa0c51",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role_delete",
    //     "name": "setting_account_role_delete",
    //     "pid": "5cc2f8a16477136530fa0c50",
    //     "id": "5cc2f8a16477136530fa0c52",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role_info",
    //     "name": "setting_account_role_info",
    //     "pid": "5cc2f8a16477136530fa0c50",
    //     "id": "5cc2f8a16477136530fa0c53",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role_ran",
    //     "name": "setting_account_role_ran",
    //     "pid": "5cc2f8a16477136530fa0c50",
    //     "id": "5cc2f8a16477136530fa0c54",
    //     "type": 3
    // },
    // {
    //     "code": "setting_account_role_save",
    //     "name": "setting_account_role_save",
    //     "pid": "5cc2f8a16477136530fa0c50",
    //     "id": "5cc2f8a16477136530fa0c55",
    //     "type": 3
    // }
]

export default full_pm_list;