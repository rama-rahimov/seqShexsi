var DataTypes = require("sequelize").DataTypes;
var _academic_degrees = require("./academic_degrees");
var _additional_educations = require("./additional_educations");
var _additional_educations_other_docs = require("./additional_educations_other_docs");
var _additional_educations_private_data = require("./additional_educations_private_data");
var _additionaleducationtypes = require("./additionaleducationtypes");
var _api_limit = require("./api_limit");
var _appealed_courses = require("./appealed_courses");
var _appealed_out_of_schools = require("./appealed_out_of_schools");
var _appealed_vacancies = require("./appealed_vacancies");
var _appeals_out_of_school = require("./appeals_out_of_school");
var _atis_enterprises = require("./atis_enterprises");
var _atis_specialty = require("./atis_specialty");
var _chf = require("./chf");
var _children = require("./children");
var _country = require("./country");
var _course_appeals = require("./course_appeals");
var _currencies = require("./currencies");
var _custompasswords = require("./custompasswords");
var _debt = require("./debt");
var _dim_datas = require("./dim_datas");
var _director_vacancy_appeals = require("./director_vacancy_appeals");
var _districts = require("./districts");
var _doc_enterprises = require("./doc_enterprises");
var _doc_enterprises_foreigner = require("./doc_enterprises_foreigner");
var _doc_specialities = require("./doc_specialities");
var _doc_specialities_copy = require("./doc_specialities_copy");
var _doc_specialities_foreigner = require("./doc_specialities_foreigner");
var _documenttypes = require("./documenttypes");
var _dq_miq_exam = require("./dq_miq_exam");
var _e_document_files = require("./e_document_files");
var _e_documents = require("./e_documents");
var _e_documents_apply = require("./e_documents_apply");
var _edu_repair_apply = require("./edu_repair_apply");
var _edu_repair_educations = require("./edu_repair_educations");
var _edu_repair_files = require("./edu_repair_files");
var _education_base = require("./education_base");
var _education_duration = require("./education_duration");
var _educationlanguage = require("./educationlanguage");
var _educationlevel = require("./educationlevel");
var _educations = require("./educations");
var _educations_for_course = require("./educations_for_course");
var _educationstage = require("./educationstage");
var _elevens = require("./elevens");
var _emp_history_scans = require("./emp_history_scans");
var _emp_history_scans_for_course = require("./emp_history_scans_for_course");
var _english_degree = require("./english_degree");
var _ent_sp_join = require("./ent_sp_join");
var _enterprises_31 = require("./enterprises_31");
var _file_api_limit = require("./file_api_limit");
var _files = require("./files");
var _fin_data = require("./fin_data");
var _formofeducation = require("./formofeducation");
var _government_agencies = require("./government_agencies");
var _informal_edu_appeals = require("./informal_edu_appeals");
var _informal_edu_documentation_status = require("./informal_edu_documentation_status");
var _informal_edu_expert_or_commission_modules = require("./informal_edu_expert_or_commission_modules");
var _informal_edu_knowledge_and_skills = require("./informal_edu_knowledge_and_skills");
var _informal_edu_module_documents = require("./informal_edu_module_documents");
var _informal_edu_previous_info = require("./informal_edu_previous_info");
var _informal_edu_roles = require("./informal_edu_roles");
var _informal_edu_session_date = require("./informal_edu_session_date");
var _informal_edu_session_exam_results = require("./informal_edu_session_exam_results");
var _informal_edu_session_specializations = require("./informal_edu_session_specializations");
var _informal_edu_session_users = require("./informal_edu_session_users");
var _informal_edu_specializations = require("./informal_edu_specializations");
var _informal_edu_specialty_modules = require("./informal_edu_specialty_modules");
var _informal_edu_status_messages = require("./informal_edu_status_messages");
var _informal_edu_task_assessment = require("./informal_edu_task_assessment");
var _informal_edu_task_commission_assessment = require("./informal_edu_task_commission_assessment");
var _informal_edu_task_content_assessment = require("./informal_edu_task_content_assessment");
var _informal_edu_task_contents = require("./informal_edu_task_contents");
var _informal_edu_tasks = require("./informal_edu_tasks");
var _informal_edu_user_modules = require("./informal_edu_user_modules");
var _informal_edu_users = require("./informal_edu_users");
var _informal_edu_work_experience = require("./informal_edu_work_experience");
var _material_base = require("./material_base");
var _miq_neticeler = require("./miq_neticeler");
var _nines = require("./nines");
var _notifications = require("./notifications");
var _olympiad_apply = require("./olympiad_apply");
var _olympiad_certificates = require("./olympiad_certificates");
var _olympiad_modules = require("./olympiad_modules");
var _out_of_school_centers = require("./out_of_school_centers");
var _payment_types = require("./payment_types");
var _phone_verification = require("./phone_verification");
var _receptionline = require("./receptionline");
var _rewards = require("./rewards");
var _school_specialties = require("./school_specialties");
var _schools_new = require("./schools_new");
var _scientific_type = require("./scientific_type");
var _service_left_bar = require("./service_left_bar");
var _services = require("./services");
var _sms_list = require("./sms_list");
var _sms_temp_datas = require("./sms_temp_datas");
var _specializations = require("./specializations");
var _specialty_31 = require("./specialty_31");
var _specialty_subjects = require("./specialty_subjects");
var _student_appeals = require("./student_appeals");
var _student_appeals_common_data = require("./student_appeals_common_data");
var _student_appeals_other_docs = require("./student_appeals_other_docs");
var _student_appeals_parent_data = require("./student_appeals_parent_data");
var _student_appeals_private_data = require("./student_appeals_private_data");
var _sub_specialities = require("./sub_specialities");
var _sub_specializations = require("./sub_specializations");
var _subjects = require("./subjects");
var _support_apply = require("./support_apply");
var _support_files = require("./support_files");
var _support_user_files = require("./support_user_files");
var _table_name2 = require("./table_name2");
var _teaching_aids = require("./teaching_aids");
var _teaching_language = require("./teaching_language");
var _temp7 = require("./temp7");
var _tempdata22 = require("./tempdata22");
var _tempdata23 = require("./tempdata23");
var _uni_specialties = require("./uni_specialties");
var _universities = require("./universities");
var _users = require("./users");
var _utis_schools = require("./utis_schools");
var _utis_schools_old = require("./utis_schools_old");
var _vacancy_appeals = require("./vacancy_appeals");
var _work_exp_list = require("./work_exp_list");
var _work_exp_list_for_course = require("./work_exp_list_for_course");

function initModels(sequelize) {
  var academic_degrees = _academic_degrees(sequelize, DataTypes);
  var additional_educations = _additional_educations(sequelize, DataTypes);
  var additional_educations_other_docs = _additional_educations_other_docs(sequelize, DataTypes);
  var additional_educations_private_data = _additional_educations_private_data(sequelize, DataTypes);
  var additionaleducationtypes = _additionaleducationtypes(sequelize, DataTypes);
  var api_limit = _api_limit(sequelize, DataTypes);
  var appealed_courses = _appealed_courses(sequelize, DataTypes);
  var appealed_out_of_schools = _appealed_out_of_schools(sequelize, DataTypes);
  var appealed_vacancies = _appealed_vacancies(sequelize, DataTypes);
  var appeals_out_of_school = _appeals_out_of_school(sequelize, DataTypes);
  var atis_enterprises = _atis_enterprises(sequelize, DataTypes);
  var atis_specialty = _atis_specialty(sequelize, DataTypes);
  var chf = _chf(sequelize, DataTypes);
  var children = _children(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var course_appeals = _course_appeals(sequelize, DataTypes);
  var currencies = _currencies(sequelize, DataTypes);
  var custompasswords = _custompasswords(sequelize, DataTypes);
  var debt = _debt(sequelize, DataTypes);
  var dim_datas = _dim_datas(sequelize, DataTypes);
  var director_vacancy_appeals = _director_vacancy_appeals(sequelize, DataTypes);
  var districts = _districts(sequelize, DataTypes);
  var doc_enterprises = _doc_enterprises(sequelize, DataTypes);
  var doc_enterprises_foreigner = _doc_enterprises_foreigner(sequelize, DataTypes);
  var doc_specialities = _doc_specialities(sequelize, DataTypes);
  var doc_specialities_copy = _doc_specialities_copy(sequelize, DataTypes);
  var doc_specialities_foreigner = _doc_specialities_foreigner(sequelize, DataTypes);
  var documenttypes = _documenttypes(sequelize, DataTypes);
  var dq_miq_exam = _dq_miq_exam(sequelize, DataTypes);
  var e_document_files = _e_document_files(sequelize, DataTypes);
  var e_documents = _e_documents(sequelize, DataTypes);
  var e_documents_apply = _e_documents_apply(sequelize, DataTypes);
  var edu_repair_apply = _edu_repair_apply(sequelize, DataTypes);
  var edu_repair_educations = _edu_repair_educations(sequelize, DataTypes);
  var edu_repair_files = _edu_repair_files(sequelize, DataTypes);
  var education_base = _education_base(sequelize, DataTypes);
  var education_duration = _education_duration(sequelize, DataTypes);
  var educationlanguage = _educationlanguage(sequelize, DataTypes);
  var educationlevel = _educationlevel(sequelize, DataTypes);
  var educations = _educations(sequelize, DataTypes);
  var educations_for_course = _educations_for_course(sequelize, DataTypes);
  var educationstage = _educationstage(sequelize, DataTypes);
  var elevens = _elevens(sequelize, DataTypes);
  var emp_history_scans = _emp_history_scans(sequelize, DataTypes);
  var emp_history_scans_for_course = _emp_history_scans_for_course(sequelize, DataTypes);
  var english_degree = _english_degree(sequelize, DataTypes);
  var ent_sp_join = _ent_sp_join(sequelize, DataTypes);
  var enterprises_31 = _enterprises_31(sequelize, DataTypes);
  var file_api_limit = _file_api_limit(sequelize, DataTypes);
  var files = _files(sequelize, DataTypes);
  var fin_data = _fin_data(sequelize, DataTypes);
  var formofeducation = _formofeducation(sequelize, DataTypes);
  var government_agencies = _government_agencies(sequelize, DataTypes);
  var informal_edu_appeals = _informal_edu_appeals(sequelize, DataTypes);
  var informal_edu_documentation_status = _informal_edu_documentation_status(sequelize, DataTypes);
  var informal_edu_expert_or_commission_modules = _informal_edu_expert_or_commission_modules(sequelize, DataTypes);
  var informal_edu_knowledge_and_skills = _informal_edu_knowledge_and_skills(sequelize, DataTypes);
  var informal_edu_module_documents = _informal_edu_module_documents(sequelize, DataTypes);
  var informal_edu_previous_info = _informal_edu_previous_info(sequelize, DataTypes);
  var informal_edu_roles = _informal_edu_roles(sequelize, DataTypes);
  var informal_edu_session_date = _informal_edu_session_date(sequelize, DataTypes);
  var informal_edu_session_exam_results = _informal_edu_session_exam_results(sequelize, DataTypes);
  var informal_edu_session_specializations = _informal_edu_session_specializations(sequelize, DataTypes);
  var informal_edu_session_users = _informal_edu_session_users(sequelize, DataTypes);
  var informal_edu_specializations = _informal_edu_specializations(sequelize, DataTypes);
  var informal_edu_specialty_modules = _informal_edu_specialty_modules(sequelize, DataTypes);
  var informal_edu_status_messages = _informal_edu_status_messages(sequelize, DataTypes);
  var informal_edu_task_assessment = _informal_edu_task_assessment(sequelize, DataTypes);
  var informal_edu_task_commission_assessment = _informal_edu_task_commission_assessment(sequelize, DataTypes);
  var informal_edu_task_content_assessment = _informal_edu_task_content_assessment(sequelize, DataTypes);
  var informal_edu_task_contents = _informal_edu_task_contents(sequelize, DataTypes);
  var informal_edu_tasks = _informal_edu_tasks(sequelize, DataTypes);
  var informal_edu_user_modules = _informal_edu_user_modules(sequelize, DataTypes);
  var informal_edu_users = _informal_edu_users(sequelize, DataTypes);
  var informal_edu_work_experience = _informal_edu_work_experience(sequelize, DataTypes);
  var material_base = _material_base(sequelize, DataTypes);
  var miq_neticeler = _miq_neticeler(sequelize, DataTypes);
  var nines = _nines(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var olympiad_apply = _olympiad_apply(sequelize, DataTypes);
  var olympiad_certificates = _olympiad_certificates(sequelize, DataTypes);
  var olympiad_modules = _olympiad_modules(sequelize, DataTypes);
  var out_of_school_centers = _out_of_school_centers(sequelize, DataTypes);
  var payment_types = _payment_types(sequelize, DataTypes);
  var phone_verification = _phone_verification(sequelize, DataTypes);
  var receptionline = _receptionline(sequelize, DataTypes);
  var rewards = _rewards(sequelize, DataTypes);
  var school_specialties = _school_specialties(sequelize, DataTypes);
  var schools_new = _schools_new(sequelize, DataTypes);
  var scientific_type = _scientific_type(sequelize, DataTypes);
  var service_left_bar = _service_left_bar(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var sms_list = _sms_list(sequelize, DataTypes);
  var sms_temp_datas = _sms_temp_datas(sequelize, DataTypes);
  var specializations = _specializations(sequelize, DataTypes);
  var specialty_31 = _specialty_31(sequelize, DataTypes);
  var specialty_subjects = _specialty_subjects(sequelize, DataTypes);
  var student_appeals = _student_appeals(sequelize, DataTypes);
  var student_appeals_common_data = _student_appeals_common_data(sequelize, DataTypes);
  var student_appeals_other_docs = _student_appeals_other_docs(sequelize, DataTypes);
  var student_appeals_parent_data = _student_appeals_parent_data(sequelize, DataTypes);
  var student_appeals_private_data = _student_appeals_private_data(sequelize, DataTypes);
  var sub_specialities = _sub_specialities(sequelize, DataTypes);
  var sub_specializations = _sub_specializations(sequelize, DataTypes);
  var subjects = _subjects(sequelize, DataTypes);
  var support_apply = _support_apply(sequelize, DataTypes);
  var support_files = _support_files(sequelize, DataTypes);
  var support_user_files = _support_user_files(sequelize, DataTypes);
  var table_name2 = _table_name2(sequelize, DataTypes);
  var teaching_aids = _teaching_aids(sequelize, DataTypes);
  var teaching_language = _teaching_language(sequelize, DataTypes);
  var temp7 = _temp7(sequelize, DataTypes);
  var tempdata22 = _tempdata22(sequelize, DataTypes);
  var tempdata23 = _tempdata23(sequelize, DataTypes);
  var uni_specialties = _uni_specialties(sequelize, DataTypes);
  var universities = _universities(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var utis_schools = _utis_schools(sequelize, DataTypes);
  var utis_schools_old = _utis_schools_old(sequelize, DataTypes);
  var vacancy_appeals = _vacancy_appeals(sequelize, DataTypes);
  var work_exp_list = _work_exp_list(sequelize, DataTypes);
  var work_exp_list_for_course = _work_exp_list_for_course(sequelize, DataTypes);

  appealed_out_of_schools.belongsTo(appeals_out_of_school, { as: "appeals_out_of_school", foreignKey: "appeals_out_of_school_id"});
  appeals_out_of_school.hasMany(appealed_out_of_schools, { as: "appealed_out_of_schools", foreignKey: "appeals_out_of_school_id"});
  ent_sp_join.belongsTo(atis_enterprises, { as: "enterprise_ATI", foreignKey: "enterprise_ATIS_ID"});
  atis_enterprises.hasMany(ent_sp_join, { as: "ent_sp_joins", foreignKey: "enterprise_ATIS_ID"});
  fin_data.belongsTo(children, { as: "children_fin_child", foreignKey: "children_fin"});
  children.hasMany(fin_data, { as: "fin_data", foreignKey: "children_fin"});
  appealed_courses.belongsTo(course_appeals, { as: "course_appeal", foreignKey: "course_appeals_id"});
  course_appeals.hasMany(appealed_courses, { as: "appealed_courses", foreignKey: "course_appeals_id"});
  atis_enterprises.belongsTo(dim_datas, { as: "ATI", foreignKey: "ATIS_ID"});
  dim_datas.hasOne(atis_enterprises, { as: "atis_enterprise", foreignKey: "ATIS_ID"});
  student_appeals.belongsTo(dim_datas, { as: "fin_dim_data", foreignKey: "fin"});
  dim_datas.hasMany(student_appeals, { as: "student_appeals", foreignKey: "fin"});
  student_appeals.belongsTo(dim_datas, { as: "tur_dim_data", foreignKey: "tur"});
  dim_datas.hasMany(student_appeals, { as: "tur_student_appeals", foreignKey: "tur"});
  fin_data.belongsTo(e_documents, { as: "e_documents_fin_e_document", foreignKey: "e_documents_fin"});
  e_documents.hasMany(fin_data, { as: "fin_data", foreignKey: "e_documents_fin"});
  e_documents.belongsTo(e_documents_apply, { as: "document_no_e_documents_apply", foreignKey: "document_no"});
  e_documents_apply.hasMany(e_documents, { as: "e_documents", foreignKey: "document_no"});
  e_documents_apply.belongsTo(government_agencies, { as: "government_agency_government_agency", foreignKey: "government_agency"});
  government_agencies.hasMany(e_documents_apply, { as: "e_documents_applies", foreignKey: "government_agency"});
  informal_edu_specializations.belongsTo(informal_edu_appeals, { as: "ATI", foreignKey: "ATIS_ID"});
  informal_edu_appeals.hasMany(informal_edu_specializations, { as: "informal_edu_specializations", foreignKey: "ATIS_ID"});
  informal_edu_session_specializations.belongsTo(informal_edu_specializations, { as: "specialty", foreignKey: "specialty_id"});
  informal_edu_specializations.hasMany(informal_edu_session_specializations, { as: "informal_edu_session_specializations", foreignKey: "specialty_id"});
  informal_edu_user_modules.belongsTo(informal_edu_specialty_modules, { as: "module", foreignKey: "module_id"});
  informal_edu_specialty_modules.hasMany(informal_edu_user_modules, { as: "informal_edu_user_modules", foreignKey: "module_id"});
  informal_edu_module_documents.belongsTo(informal_edu_user_modules, { as: "inf_education_apply", foreignKey: "inf_education_apply_id"});
  informal_edu_user_modules.hasMany(informal_edu_module_documents, { as: "informal_edu_module_documents", foreignKey: "inf_education_apply_id"});
  informal_edu_status_messages.belongsTo(informal_edu_user_modules, { as: "status_informal_edu_user_module", foreignKey: "status"});
  informal_edu_user_modules.hasMany(informal_edu_status_messages, { as: "informal_edu_status_messages", foreignKey: "status"});
  appealed_out_of_schools.belongsTo(out_of_school_centers, { as: "out_of_school", foreignKey: "out_of_school_id"});
  out_of_school_centers.hasMany(appealed_out_of_schools, { as: "appealed_out_of_schools", foreignKey: "out_of_school_id"});
  student_appeals_common_data.belongsTo(student_appeals, { as: "student_appeal", foreignKey: "student_appeal_id"});
  student_appeals.hasMany(student_appeals_common_data, { as: "student_appeals_common_data", foreignKey: "student_appeal_id"});
  student_appeals_parent_data.belongsTo(student_appeals, { as: "student_appeal", foreignKey: "student_appeal_id"});
  student_appeals.hasMany(student_appeals_parent_data, { as: "student_appeals_parent_data", foreignKey: "student_appeal_id"});
  student_appeals_private_data.belongsTo(student_appeals, { as: "student_appeal", foreignKey: "student_appeal_id"});
  student_appeals.hasMany(student_appeals_private_data, { as: "student_appeals_private_data", foreignKey: "student_appeal_id"});
  fin_data.belongsTo(users, { as: "fin_user", foreignKey: "fin"});
  users.hasMany(fin_data, { as: "fin_data", foreignKey: "fin"});
  student_appeals.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(student_appeals, { as: "student_appeals", foreignKey: "user_id"});
  appealed_vacancies.belongsTo(vacancy_appeals, { as: "vacancy_appeal", foreignKey: "vacancy_appeals_id"});
  vacancy_appeals.hasMany(appealed_vacancies, { as: "appealed_vacancies", foreignKey: "vacancy_appeals_id"});

  return {
    academic_degrees,
    additional_educations,
    additional_educations_other_docs,
    additional_educations_private_data,
    additionaleducationtypes,
    api_limit,
    appealed_courses,
    appealed_out_of_schools,
    appealed_vacancies,
    appeals_out_of_school,
    atis_enterprises,
    atis_specialty,
    chf,
    children,
    country,
    course_appeals,
    currencies,
    custompasswords,
    debt,
    dim_datas,
    director_vacancy_appeals,
    districts,
    doc_enterprises,
    doc_enterprises_foreigner,
    doc_specialities,
    doc_specialities_copy,
    doc_specialities_foreigner,
    documenttypes,
    dq_miq_exam,
    e_document_files,
    e_documents,
    e_documents_apply,
    edu_repair_apply,
    edu_repair_educations,
    edu_repair_files,
    education_base,
    education_duration,
    educationlanguage,
    educationlevel,
    educations,
    educations_for_course,
    educationstage,
    elevens,
    emp_history_scans,
    emp_history_scans_for_course,
    english_degree,
    ent_sp_join,
    enterprises_31,
    file_api_limit,
    files,
    fin_data,
    formofeducation,
    government_agencies,
    informal_edu_appeals,
    informal_edu_documentation_status,
    informal_edu_expert_or_commission_modules,
    informal_edu_knowledge_and_skills,
    informal_edu_module_documents,
    informal_edu_previous_info,
    informal_edu_roles,
    informal_edu_session_date,
    informal_edu_session_exam_results,
    informal_edu_session_specializations,
    informal_edu_session_users,
    informal_edu_specializations,
    informal_edu_specialty_modules,
    informal_edu_status_messages,
    informal_edu_task_assessment,
    informal_edu_task_commission_assessment,
    informal_edu_task_content_assessment,
    informal_edu_task_contents,
    informal_edu_tasks,
    informal_edu_user_modules,
    informal_edu_users,
    informal_edu_work_experience,
    material_base,
    miq_neticeler,
    nines,
    notifications,
    olympiad_apply,
    olympiad_certificates,
    olympiad_modules,
    out_of_school_centers,
    payment_types,
    phone_verification,
    receptionline,
    rewards,
    school_specialties,
    schools_new,
    scientific_type,
    service_left_bar,
    services,
    sms_list,
    sms_temp_datas,
    specializations,
    specialty_31,
    specialty_subjects,
    student_appeals,
    student_appeals_common_data,
    student_appeals_other_docs,
    student_appeals_parent_data,
    student_appeals_private_data,
    sub_specialities,
    sub_specializations,
    subjects,
    support_apply,
    support_files,
    support_user_files,
    table_name2,
    teaching_aids,
    teaching_language,
    temp7,
    tempdata22,
    tempdata23,
    uni_specialties,
    universities,
    users,
    utis_schools,
    utis_schools_old,
    vacancy_appeals,
    work_exp_list,
    work_exp_list_for_course,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
