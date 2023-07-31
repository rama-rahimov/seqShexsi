// import express from "express";
// import path from "path";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import http from "http";
// import {sequelize} from './middlewares/db.js';
// // const soap_server = require("soap");
// // eslint-disable-next-line import/no-unresolved
// import cookieParser from 'cookie-parser';

// import { checkurl } from "./middlewares/authenticate.js";
// import { cl, getfile, file, fileName } from "./middlewares/helper.js";

// // import mySoapServices from "./routes/soap_sever_func";

// import auth from "./routes/auth.js";
// import edu_docs from "./routes/edu_docs.js";
// import main from "./routes/main.js";
// import user from "./routes/users.js";
// import soap from "./routes/soap.js";
// import student_apply_new from "./routes/student_apply_new.js";
// import vacancy_appeals from "./routes/vacancy_appeals.js";
// import out_of_schools from "./routes/out_of_schools.js";
// import children from "./routes/children.js";
// import global from "./routes/global.js";
// import global_4448 from "./routes/global_4448.js";
// import olympiad from "./routes/olympiad.js";
// import support from "./routes/support.js";
// import course from "./routes/course.js";
// import pts from "./routes/pts.js";
// import edu_repair from "./routes/edu_repair.js";
// import informal_education from "./routes/informal_education.js";
// import e_reference from "./routes/e-reference.js";
// import certification from "./routes/certification.js";
// import admin from "./routes/admin.js" ;


// // import {Academic_degrees} from './models/academic_degrees.js';
// // import {Additional_educations_other_docs} from './models/additional_educations_other_docs.js';
// // import {Additional_educations_private_data} from './models/additional_educations_private_data.js';
// // import {Additional_educations} from './models/additional_educations.js';
// // import {additionalEducationTypes} from './models/additionalEducationTypes.js';
// // import {Api_limit} from './models/api_limit.js';
// // import {Appealed_courses} from './models/appealed_courses.js';
// // import {Appealed_out_of_schools} from './models/appealed_out_of_schools.js';
// // import {Appealed_vacancies} from './models/appealed_vacancies.js';
// // import {Appeals_out_of_school} from './models/appeals_out_of_school.js';
// // import {Atis_enterprises} from './models/atis_enterprises.js';
// // import {Atis_specialty} from './models/atis_specialty.js';
// // import {Chf} from './models/chf.js';
// // import {Children} from './models/children.js';
// // import {Country} from './models/country.js';
// // import {Course_appeals} from './models/course_appeals.js';
// // import {Currencies} from './models/currencies.js';
// // import {Custompasswords} from './models/custompasswords.js';
// // import {Debt} from './models/debt.js';
// // import {Dim_datas} from './models/dim_datas.js';
// // import {Director_vacancy_appeals} from './models/director_vacancy_appeals.js';
// // import {Districts} from './models/districts.js';
// // import {Doc_enterprises_foreigner} from './models/doc_enterprises_foreigner.js';
// // import {Doc_enterprises} from './models/doc_enterprises.js';
// // import {Doc_specialities_copy} from './models/doc_specialities_copy.js';
// // import {Doc_specialities} from './models/doc_specialities.js';
// // import {Doc_specialities_foreigner} from './models/doc_specialities_foreigner.js';
// // import {documentTypes} from './models/documentTypes.js';
// // import {Dq_miq_exam} from './models/dq_miq_exam.js';
// // import {e_document_files} from './models/e_document_files.js';
// // import {E_documents_apply} from './models/e_documents_apply.js';
// // import {E_documents} from './models/e_documents.js';
// // import {Edu_repair_apply} from './models/edu_repair_apply.js';
// // import {Edu_repair_educations} from './models/edu_repair_educations.js';
// // import {Edu_repair_files} from './models/edu_repair_files.js';
// // import {Education_base} from './models/education_base.js';
// // import {Education_duration} from './models/education_duration.js'
// // import {EducationLanguage} from './models/EducationLanguage.js';
// // import {EducationLevel} from './models/EducationLevel.js';
// // import {educations_for_course} from './models/educations_for_course.js';
// // import {educations} from './models/educations.js';
// // import {EducationStage} from './models/EducationStage.js';
// // import {elevens} from './models/elevens.js';
// // import {Emp_history_scans_for_course} from './models/emp_history_scans_for_course.js';
// // import {Emp_history_scans} from './models/emp_history_scans.js';
// // import {English_degree} from './models/english_degree.js';
// // import {Ent_sp_join} from './models/ent_sp_join.js';
// // import {Enterprises_31} from './models/enterprises_31.js';
// // import {File_api_limit} from './models/file_api_limit.js';
// // import {Files} from './models/files.js';
// // import {fin_data} from './models/fin_data.js';
// // import {FormOfEducation} from './models/FormOfEducation.js';
// // import {government_agencies} from './models/government_agencies.js';
// // import {informal_edu_appeals} from './models/informal_edu_appeals.js';
// // import {informal_edu_documentation_status} from './models/informal_edu_documentation_status.js';
// // import {informal_edu_expert_or_commission_modules} from './models/informal_edu_expert_or_commission_modules.js';
// // import {informal_edu_knowledge_and_skills} from './models/informal_edu_knowledge_and_skills.js';
// // import {informal_edu_module_documents} from './models/informal_edu_module_documents.js';
// // import {informal_edu_previous_info} from './models/informal_edu_previous_info.js';
// // import {informal_edu_roles} from './models/informal_edu_roles.js';
// // import {informal_edu_session_date} from './models/informal_edu_session_date.js';
// // import {informal_edu_session_exam_results} from './models/informal_edu_session_exam_results.js';
// // import {informal_edu_session_specializations} from './models/informal_edu_session_specializations.js';
// // import {informal_edu_session_users} from './models/informal_edu_session_users.js';
// // import {informal_edu_specializations} from './models/informal_edu_specializations.js';
// // import {informal_edu_specialty_modules} from './models/informal_edu_specialty_modules.js';
// // import {informal_edu_status_messages} from './models/informal_edu_status_messages.js';
// // import {informal_edu_task_assessment} from './models/informal_edu_task_assessment.js';
// // import {informal_edu_task_commission_assessment} from './models/informal_edu_task_commission_assessment.js';
// // import {informal_edu_task_content_assessment} from './models/informal_edu_task_content_assessment.js';
// // import {informal_edu_task_contents} from './models/informal_edu_task_contents.js';
// // import {informal_edu_tasks} from './models/informal_edu_tasks.js';
// // import {informal_edu_users} from './models/informal_edu_users.js';
// // import {informal_edu_user_modules} from './models/informal_edu_user_modules.js';
// // import {informal_edu_work_experience} from './models/informal_edu_work_experience.js';
// // import {material_base} from './models/material_base.js';
// // import {miq_neticeler} from './models/miq_neticeler.js';
// // import {nines} from './models/nines.js';
// // import {notifications} from './models/notifications.js';
// // import {olympiad_apply} from './models/olympiad_apply.js';
// // import {olympiad_certificates} from './models/olympiad_certificates.js';
// // import {olympiad_modules} from './models/olympiad_modules.js';
// // import {out_of_school_centers} from './models/out_of_school_centers.js';
// // import {payment_types} from './models/payment_types.js';
// // import {phone_verification} from './models/phone_verification.js';
// // import {ReceptionLine} from './models/Receptionline.js';
// // import {rewards} from './models/rewards.js';
// // import {school_specialties} from './models/school_specialties.js';
// // import {schools_new} from './models/schools_new.js';
// // import {scientific_type} from './models/scientific_type.js';
// // import {service_left_bar} from './models/service_left_bar.js';
// // import {services} from './models/services.js';
// // import {sms_list} from './models/sms_list.js';
// // import {sms_temp_datas} from './models/sms_temp_datas.js';
// // import {specializations} from './models/specializations.js';
// // import {specialty_31} from './models/specialty_31.js';
// // import {specialty_subjects} from './models/specialty_subjects.js';
// // import {student_appeals_common_data} from './models/student_appeals_common_data.js';
// // import {student_appeals_other_docs} from './models/student_appeals_other_docs.js';
// // import {student_appeals_parent_data} from './models/student_appeals_parent_data.js';
// // import {student_appeals_private_data} from './models/student_appeals_private_data.js';
// // import {student_appeals} from './models/student_appeals.js';
// // import {sub_specialities} from './models/sub_specialities.js';
// // import {sub_specializations} from './models/sub_specializations.js';
// // import {subjects} from './models/subjects.js';
// // import {support_apply} from './models/support_apply.js';
// // import {support_files} from './models/support_files.js';
// // import {support_user_files} from './models/support_user_files.js';
// // import {table_name2} from './models/table_name2.js';
// // import {teaching_aids} from './models/teaching_aids.js';
// // import {teaching_language} from './models/teaching_language.js';
// // import {temp7} from './models/temp7.js';
// // import {tempdata22} from './models/tempdata22.js';
// // import {tempdata23} from './models/tempdata23.js';
// // import {uni_specialties} from './models/uni_specialties.js';
// // import {universities} from './models/universities.js';
// // import {Users} from './models/users.js';
// // import {utis_schools_old} from './models/utis_schools_old.js';
// // import {utis_schools} from './models/utis_schools.js';
// // import {Vacancy_appeals} from './models/vacancy_appeals.js';
// // import {work_exp_list_for_course} from './models/work_exp_list_for_course.js';
// // import {work_exp_list} from './models/work_exp_list.js';
// import {DataTypes} from "sequelize";

// E_documents_apply.hasOne(E_documents, {sourceKey:"docNo",foreignKey:{field:"document_no", name:"document_no"}});

// E_documents.hasOne(fin_data, {sourceKey:"fin", foreignKey:{name:"e_documents_fin", type:DataTypes.STRING(50)}});

// Course_appeals.hasOne(Appealed_courses ,{foreignKey:{field:"course_appeals_id"}});

// government_agencies.hasOne(E_documents_apply ,{foreignKey:{field:"government_agency"}});

// Users.hasOne(fin_data, {sourceKey:'fin', foreignKey:{name:'fin', field:'fin'}});

// Children.hasOne(fin_data, {sourceKey:'fin', foreignKey:{name:"children_fin", type:DataTypes.STRING(50)}});

// student_appeals.hasMany(student_appeals_private_data, {foreignKey:{field:"student_appeal_id"}});

// student_appeals.hasMany(student_appeals_parent_data, {foreignKey:{field:"student_appeal_id"}});

// student_appeals.hasMany(student_appeals_common_data, {foreignKey:{field:"student_appeal_id"}});

// Users.hasMany(student_appeals, {foreignKey:{field:"user_id"}});

// informal_edu_specializations.hasMany(informal_edu_session_specializations, {foreignKey:{field:"specialty_id"}});

// informal_edu_appeals.hasMany(informal_edu_specializations, {sourceKey:'ATIS_ID', foreignKey:'ATIS_ID'});

// informal_edu_user_modules.hasOne(informal_edu_module_documents, {sourceKey:"inf_education_apply_id", foreignKey:"inf_education_apply_id"});

// informal_edu_user_modules.hasOne(informal_edu_status_messages, {sourceKey:"status", foreignKey:"status"});

// informal_edu_specialty_modules.hasMany(informal_edu_user_modules, {foreignKey:{field:"module_id"}});

// Atis_enterprises.hasMany(Ent_sp_join, { sourceKey:"ATIS_ID", foreignKey:"enterprise_ATIS_ID" });

// out_of_school_centers.hasMany(Appealed_out_of_schools, {foreignKey:{field:"out_of_school_id"}});

// Appeals_out_of_school.hasMany(Appealed_out_of_schools, {foreignKey:{field:"appeals_out_of_school_id"}});

// Dim_datas.hasOne(student_appeals, {sourceKey:"fin", foreignKey:"fin"});

// Dim_datas.hasOne(student_appeals, {sourceKey:"tur", foreignKey:"tur"});

// // Dim_datas.hasOne(student_appeals, {sourceKey:"specialtyDimCode", foreignKey:"specialtyDimCode"});

// Dim_datas.hasOne(Atis_enterprises, {sourceKey:"institutionAtisId", foreignKey:{name:"ATIS_ID", field:"ATIS_ID"}});

// Vacancy_appeals.hasMany(Appealed_vacancies, {foreignKey:{field:"vacancy_appeals_id"}});

// // fin_data.hasOne(Children, {sourceKey: 'fin', foreignKey: 'fin'});

// dotenv.config();

// // if (cluster.isMaster) {
// // 	for (let i = 0; i < 16; i++) {
// // 		cluster.fork();
// // 	}
// // } else {
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json({ limit: '2000mb' }));
// app.use(bodyParser.urlencoded({ limit: '2000mb', extended: true }));
// app.use(checkurl);
// app.use(cookieParser());
// app.get('/getfile/:file', getfile);
// app.get('/file/:token', file);
// app.get('/filename/:token', fileName);

// app.use("/api/auth", auth);
// app.use("/api/edu_docs", edu_docs);
// app.use("/api/main", main);
// app.use("/api/users", user);
// app.use("/api/soap", soap);
// app.use("/api/vacancy_appeals", vacancy_appeals);
// app.use("/api/out_of_schools", out_of_schools);
// app.use("/api/children", children);
// app.use("/api/global", global);
// app.use("/api/olympiad", olympiad);
// app.use("/api/support", support);
// app.use("/api/course", course);
// app.use("/api/pts", pts);
// app.use("/api/informal-education", informal_education);
// app.use("/api/edu_repair", edu_repair);
// app.use("/api/e-reference", e_reference);
// app.use("/api/student_apply_new", student_apply_new);
// app.use("/api/certification", certification);
// app.use("/api/admin", admin);





// /** QFIT - Admin panel */


// // const qfit = express();
// // import authorization from "../src/qfit/src/router/authorization"
// // import dashboard from "../src/qfit/src/router/dashboard.js";
// // import apply from "../src/qfit/src/router/apply.js";
// // import expert from "../src/qfit/src/router/expert.js";
// // import commission from "../src/qfit/src/router/commission.js";
// // import soap_query from "../src/qfit/src/router/soap_query.js"
// // import module from "../src/qfit/src/router/module.js";
// // import specialty from "../src/qfit/src/router/specialty.js";
// // import applysession from "../src/qfit/src/router/applysession.js";
// // import {getExportExcel, qfitGetfile, getFileIn} from "../src/qfit/src/helper/helper.js";
// // import documentation from "../src/qfit/src/router/documentation.js";
// // import excelexport from "../src/qfit/src/router/excelexport.js";
// //
// // qfit.use(bodyParser.json({ limit: '2000mb' }));
// // qfit.use(bodyParser.urlencoded({ limit: '2000mb', extended: true }));
// // qfit.use(bodyParser.urlencoded({extended: true}))
// // qfit.use(bodyParser.json())
// // qfit.use(checkurl);
// //
// // qfit.get('/getfile/:file', qfitGetfile);
// // qfit.get('/get/excel/export/:folder/:file', getExportExcel);
// // qfit.get('/api/getfile/:doc/:type/:file', getFileIn);
// //
// // qfit.use('/api/auth', authorization)
// // qfit.use('/api/dashboard',dashboard)
// // qfit.use('/api/apply',apply)
// // qfit.use('/api/expert',expert)
// // qfit.use('/api/commission',commission)
// // qfit.use('/api/soap',soap_query)
// // qfit.use('/api/module',module)
// // qfit.use('/api/specialty',specialty)
// // qfit.use('/api/session',applysession)
// // qfit.use('/api/documentation',documentation)
// // qfit.use('/api/excel/export',excelexport)

// /** QFIT - Admin panel -Kod sonu */


// const app2 = express();
// app2.use(cookieParser());
// app2.use(bodyParser.json({ limit: '2000mb' }));
// app2.use(bodyParser.urlencoded({ limit: '2000mb', extended: true }));
// app2.use(checkurl);
// app2.use("/api/global", global_4448);


// /**
//  * app.get('/.well-known/pki-validation/:f', (req, res) => {
// 	res.sendFile(req.params.f, { root: path.join(__dirname, './') })
// });
//  */

// // const root = path.join(__dirname, '../../', 'build/')
// // app.use(express.static(root))
// // app.use((req, res, next) => {
// // 	if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
// // 		res.sendFile('index.html', { root })
// // 	} else next()
// // });



// app.get('/sequelize', async (req, res) => {
// 	await sequelize.sync();
// 	res.json('Sequelize work');
// });

// const server = http.createServer(app).listen(4911, '192.168.1.66',() => cl("Running on:4911", "purple"));
// // const server = http.createServer(app).listen(80, () => cl("Running on:80", "purple"));

//  const server2 = http.createServer(app2).listen(4448, '192.168.1.66',() => cl("Running on:4448", "purple"));

// 	// const server2 = http.createServer(app2).listen(4448, () => cl("Running on:4448", "purple"));

// /* soap_server.listen(server, '/soap_server', mySoapServices, fs.readFileSync(path.resolve(__dirname, './http_myservice.wsdl'), 'utf8'), () => cl("Running HTTP SOAP Server", "purple"));
// */
// 	// const httpsServer = https.createServer({
// 	// 	key: fs.readFileSync("./ssl/portal_edu_az.key"),
// 	// 	cert: fs.readFileSync("./ssl/portal_edu_az.crt")
// 	// }, app).listen(443, () => cl("Running on:443", "purple"));
// 	// soap_server.listen(httpsServer, '/soap_server', mySoapServices, fs.readFileSync(path.resolve(__dirname, './https_myservice.wsdl'), 'utf8'), () => cl("Running HTTPS SOAP Server", "purple"));
// 	// socket(server);
// // }

