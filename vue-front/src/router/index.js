import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NivelacionMatematica  from '../views/carreras/analistaProgramador/encuestaNivelacionMatematica.vue'

 

var ramosAnalistaProgramador=[
  "Algebra",
  "Arquitectura de sistemas",
  "Computacion en la nube",
  "Comunicacion profesional efectiva",
  "Consulta de base de datos",
  "Cultura y clima laboral",
  "Diseno de base de datos",
  "Diseno de software",
  "Etica profesional",
  "Taller de habilidades comunicativas",
  "Hardware y conectividad",
  "Innovacion Social",
  "Integracion de competencias 1",
  "Internet de las cosas",
 // "Negociacion y adaptacion a los cambios",
  "Nivelacion Matematica",
  "Orientacion al empleo y emprendimiento",
  "Patrones de diseno",
 // "Probabilidad y estadistica",
  "Programacion android",
  "Programacion .NET",
  //"Programacion orientada a objetos",
  "Programacion Web",
  "Especificacion de requerimientos",
 // "Sistemas operativos linux",
  "Sistemas operativos windows",
 // "Taller de habilidades tic",
  "Ingles basico 1",
  "Ingles basico 2"
]
//pendiente
var ramosContabilidadGeneral = [
  "Administracion de empresas",
  "Computacion aplicada",
  "Contabilidad analitica",
  "Contabilidad financiera",
  "Contabilidad para la preparacion de estados financieros",
  "Contabilidad para la toma de decisiones",
  "Costos y analisis contables",
  "Derecho comercial",
  "Derecho laboral",
  "Derecho tributario nacional e internacional",
  "Desarrollo de habilidades comunicativas",
  "Economia",
  "Fundamentos presupuestarios",
  "Impuesto a la renta",
  "Impuesto a las ventas y servicios",
  "Ingles basico 1",
  "Ingles basico 2",
  "Taller de gestion contable computacional",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral"
];

var ramosGastronomia = [
  "Administracion gastronomica",
 "Cocina clasica del mundo y tendencias",
 "Cocina internacional y chilena de cuarto caliente",
 "Cocina internacional y chilena de cuarto frio",
  "Cocina tradicional chilena",
  "Desarrollo De Habilidades Comunicativas ONLINE",
"Diseno y costos de carta y menu",
  "Etica profesional",
  "Fundamentos de la gastronomia",
  "Gastronomia industrial",
  "Gastronomia regional chilena",
  "Higiene y seguridad en la produccion alimentaria",
  "Ingles gastronomico",
 "Nutricion y tecnologia de los alimentos",
  "Reposteria",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de nivelacion matematica ONLINE",
  "Tecnicas de cocina",
 "Tecnicas de panaderia y pasteleria",
  "Tecnicas de servicio de bar vinos y cocteleria",
  "Tecnicas de servicio en restaurantes"
];

var ramosIngAgricolaContinuidad = [
  "Agricultura de precision",
  "Calculo 1",
 // "Costos y presupuestos",
 //"Cultura y valores",
  "Electivo regional",
  "Formulacion y gestion de proyectos",
  "Georreferenciacion",
  "Gestion ambiental",
  "Gestion de recursos humanos",
  "Manejo de base de datos",
  "Marketing alimentario",
  "Organizacion empresarial",
 // "Probabilidad y estadistica",
  "Proyectos colaborativos de innovacion",
 // "Taller de desarrollo personal 2"
];

var ramosEjecucionAdministracion = [
  "Administracion",
  "Administracion de carteras y ventas",
  "Administracion de la produccion",
  "Comercio exterior",
  "Contabilidad",
  "Desarrollo de habilidades comunicativas",
 // "Economia",
  "Etica profesional",
  "Finanzas para administracion",
  "Gestion de personas",
 // "Herramentas Tecnologicas intermedia",
 // "Herramentas Tecnologicas ofimata",
  "Ingles basico 1",
  "Ingles basico 2",
  "Legislacion laboral",
  "Marketing operativo",
  "Matematica financiera",
  "Nivelacion matematica",
  "Presupuesto",
 // "Probabilidad y estadistica",
 //"Sofware ERP",
// "Taller de identidad personal y social",
  "Taller de preparacion laboral",
  "Taller de desarrollo personal 1"
];

var ramosEjecucionAdminContinuidad = [
  "Calculo 1",
  "Control de gestion",
 // "Cultura y valores",
  "Direccion de capital humano",
  "Evaluacion de proyectos",
  "Financiamiento e inversion",
  "Gestion de operaciones",
  "Herramientas tecnologicas avanzadas",
  "Ingles intermedio 1",
  "Ingles intermedio 2",
  "Marketing estrategico",
  "Planificacion estrategica",
  "Procesos de calidad",
  "Proyectos colaborativos de innovacion",
  //"Taller de desarrollo personal 2"
];

var ramosIngAdminRecursosHumanos = [
// "Derecho sindical y negociacion colectiva",
  "Bienestar y calidad de vida",
  "Calculo 1",
  "Capacitacion laboral",
  "Comunicacion organizacional",
  "Contabilidad",
  "Cultura y clima organizacional",
 // "Cultura y valores",
  "Administracion",
  "Desarrollo de capital humano",
  "Desarrollo de habilidades comunicativas",
  "Descripcion de cargos",
  "Economia para RRHH",
 // "Etica profesional",
  "Evaluacion de proyectos",
  "Gestion de administracion de personas",
  "Gestion de RRHH",
 // "Herramientas tecnologicas intermedia",
  "Ingles basico 1",
  "Ingles basico 2",
  "Ingles intermedio 1",
  "Ingles intermedio 2",
  "Legislacion laboral y previsional",
  "Matematica financiera",
  "Nivelacion matematica",
 // "Organizaciones Publicas",
 // "Planificacion estrategica de RRHH",
  "Presupuesto",
  //"Probabilidades y estadistica",
 // "Programa de bienestar y sustentabilidad",
  "Proteccion e inclusion laboral",
  "Proyectos colaborativos de innovacion",
  "Remuneraciones",
  "Sistemas de control de gestion",
  "Sistemas de evaluacion de desempeno",
  "Software ERP de RRHH",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
 //"Herramientas tecnologicas ofimatica",
  //"Valoracion de cargos y desempeno",
  "Reclutamiento y seleccion de recursos humanos",
  "Taller de identidad personal y social",
  "Taller de preparacion laboral"
];

var ramosIngComercioExterior = [
  "Administracion y economia",
  "Almacenamiento e inventarios",
  "Calculo 1",
  "Clasificacion arancelaria",
  "Computacion aplicada",
  "Contabilidad de costos",
  "Control de gestion",
  "Costos y distribucion logistica internacional",
  //"Cultura y valores",
  "Derecho publico y privado internacional aplicado",
  "Desarrollo de habilidades comunicativas",
  "Envases y packaging",
  "Estadistica",
  "Evaluacion de proyectos",
  "Excel avanzado y base de datos",
  "Fundamentos del comercio exterior",
 "Gestion bancaria COMEX",
  "Gestion de transporte multimodal",
  "Gestion presupuestaria",
  "Ingles basico 1",
  "Ingles basico 2",
  "Legislacion aduanera",
"Legislacion y gestion medioambiental",
  "Marketing y negociacion estrategica",
  "Matematica",
  "Negocios internacionales",
  "Operacion de terminales aduaneros",
  "Operaciones de importaciones y exportaciones",
  "Prevencion aplicada al transporte",
  "Prevencion de riesgos y legislacion laboral",
  "Rutas economicas nacional e internacional",
  "Sistema financiero internacional",
  "Supply management chain",
  "Taller avanzado de ingles COMEX",
  "Taller intermedio de ingles COMEX",
  "Taller bancario de comercio exterior",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de liderazgo y trabajo en equipo",
  "Taller de nivelacion matematica ONLINE",
 // "TCL y certificados de origen",
  "Transporte y distribucion nacional e internacional",
  "Etica profesional",
  "Servicios y gestion de clientes"
];


var ramosIngInformatica = [
  "Big data",
  "Calculo 1",
  "Ciberseguridad",
  "Creatividad en la innovacion y emprendimiento",
 // "Cultura y valores",
  "Formulacion y evaluacion de proyectos",
  "Fundamentos de ITIL",
  "Gestion de procesos de negocio",
  "Gestion de proyectos y equipos de trabajo",
  "Ingles intermedio 1",
  "Ingles intermedio 2",
  "Integracion de competencias 3",
  "Mineria de datos",
  "Pentesting",
  "Programacion de videojuegos",
  "Proyectos colaborativos avanzados de innovacion regional",
 // "Probabilidades y estadistica",
  "Tecnologias de conectividad y redes",
  "Tecnologias humanizadas"
];

var ramosIngLogistica = [
  "Calculo 1",
  "Calidad y mejoramiento de procesos",
  "Contabilidad operacional",
  "Creatividad en la innovacion y emprendimiento",
 // "Cultura y valores",
  "Formulacion de proyectos",
  "Habilidades directivas",
  "Inferencia estadistica",
  "Ingles aplicado a la logistica",
  "Integracion de competencias 3",
  "Logistica circular",
  "Logistica integral",
  "Metodos y sistemas de almacenamiento e inventario",
  "Optimizacion de la cadena de suministros",
  "Planificacion de transporte",
  "Proyectos colaborativos avanzados de innovacion regional",
  "Tecnologias de analisis de datos",
  "Tecnologias de gestion logistica",
  "Transporte internacional"
];

var ramosPsicopedagogia = [
 // "Cultura y valores",
  "Desarrollo de habilidades comunicativas",
  "Didactica de la matematica",
  "Didactica de las ciencias",
  "Didactica del lenguaje y comunicacion",
  "Educacion en la diversidad",
  "Educacion psicomotriz",
  "Elaboracion y evaluacion de proyectos sociales",
  "Etica profesional",
  "Evaluacion del pensamiento logico matematico",
  "Evaluacion educacional",
  "Evaluacion en lenguaje y comunicacion",
  "Herramientas tecnologicas de apoyo a la educacion",
  "Ingles basico 1",
  "Ingles basico 2",
  "Intervencion en contexto educativo",
  "Introduccion a la psicopedagogia",
  "Necesidades educativas especiales permanentes",
  "Necesidades educativas especiales transitorias",
  "Neurociencia",
  "Neurodidactica",
  "Proyectos colaborativos de innovacion",
  "Psicologia del aprendizaje",
  "Psicologia del desarrollo",
  "Sistema educacional chileno",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de dinamicas de integracion",
  "Taller de diseno universal de aprendizaje",
  "Taller de elaboracion de instrumentos de evaluacion",
  "Taller de expresion musical",
  "Taller de expresion plastica",
  "Taller de identidad personal y social",
  "Taller de mediacion de intervencion escolar",
  "Taller de nivelacion de competencias comunicativas ONLINE",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Taller de recursos literarios para la educacion",
  "Taller de terapias complementarias de apoyo",
  "Trabajo con el equipo interdisciplinario",
  "Trabajo con la familia"
];

var ramosServiciosAerocomerciales = [
  "Carga y transporte de mercancias",
  "Desarrollo de habilidades comunicativas ONLINE",
  "Empresa de transportes turisticos",
  "Etica profesional",
  "Geografia turistica aplicada",
  "Ingles turistico 1",
  "Ingles turistico 3",
  "Ingles turistico 2",
  "Marketing y comercializacion turistica",
  "Operaciones de comercio exterior",
  "Procesos comerciales y contables",
  "Procesos de gestion con empresas turisticas",
  "Programacion y gestion de viajes",
  "Rutas y sistemas de distribucion turistica",
  "Servicios logicos aeroportuarios",
  "Taller de desarrollo personal 2",
  "Taller de entrenamiento de habilidades personales",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Tecnicas de despacho aerocomercial",
//  "Tecnicas de servicio y protocolo en el turismo",
  "Taller de desarrollo personal 1"
];

var ramosServicioSocial = [
  "Administracion general",
  "Antropologia general",
  "Beneficios previsionales y de salud",
  "Computacion basica",
  "Cultura y valores",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo local",
  "Economia y sociedad",
  "Electivo de formacion profesional 1",
  "Electivo de formacion profesional 2",
  "Electivo de formacion profesional 3",
  "Elementos teoricos y metodologias para la intervencion en trabajo social",
  "Etica profesional",
  "Familia",
  "Gestion de recursos humanos y beneficios laborales",
  "Grupos y comunidades",
  "Ingles basico 1",
  "Ingles basico 2",
  "Introduccion al trabajo social",
  "Legislacion y trabajo social",
  "Manejo de informacion social",
  "Metodologia de la investigacion social",
  "Planificacion social",
  "Politicas publicas y sociales en chile",
  "Psicologia evolutiva",
  "Salud comunitaria",
  "Sociologia general",
  "Taller de competencias profesionales",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de formulacion y evolucion de proyectos sociales",
  "Taller de habilidades directivas",
  "Taller de investigacion aplicada",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Taller de redes sociales",
  "Taller de sistematizacion",
  "Taller de vinculacion laboral",
  "Taller de vinculacion laboral en contextos del trabajo social",
  "Taller de vinculacion laboral RSE",
  "Taller de vinculacion laboral salud publica",
  "Tecnicas de administracion presupuestaria"
];

var ramosTecnicoAgricola = [
  "Administracion de empresas",
  "Aseguramiento de calidad e inocuidad alimentaria",
  "Cultivo de hortalizas de estacion calida",
  "Cultivo de hortalizas de estacion fria",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo de proyectos",
  "Electivo regional",
  "Etica profesional",
  "Factores de produccion",
  "Fetirrigacion",
 // "Labores fruticulas de verano",
 // "Labores fruticulas de invierno",
  "Manejo Agroclimatologico",
  "Manejo de suelo",
  "Nivelacion matematica",
  "Operacion de maquinarias e implementos agricolas",
  "Produccion sustentable y organica",
  "Propagacion vegetal y produccion de semillas",
  "Proyectos colaborativos",
  "Taller de desarrollo personal 1",
  "Taller de identidad personal y social",
  "Taller de nivelacion de competencias comunicativas",
  "Tecnologia de los alimentos",
  "Transferencia tecnologica",
  "Viticultura"
];

var ramosTecnicoAdministracion = [
  "Administracion",
  "Administracion de carteras y ventas",
  "Administracion de la produccion",
  "Comercio exterior",
  "Contabilidad",
  "Desarrollo de habilidades comunicativas",
  "Economia",
  "Etica profesional",
  "Finanzas para administracion",
  "Gestion de personas",
  "Herramientas tecnologicas intermedia",
  "Herramientas tecnologicas ofimatica",
  "Ingles basico 1",
  "Ingles basico 2",
  "Legislacion laboral",
  "Marketing operativo",
  "Matematica financiera",
  "Nivelacion matematica",
  "Presupuesto",
//"Probabilidad y estadistica",
  "Proyectos colaborativos",
"Software ERP",
  "Taller de desarrollo personal 1",
  "Taller de identidad personal y social",
  "Taller de nivelacion de competencias comunicativas",
  "Taller de preparacion laboral"
];

var ramosTecnicoAdminLogistica = [
  "Abastecimiento y gestion de proveedores",
  "Administracion de empresas",
  "Administrador de personal",
  "Almacenamiento y gestion de stock",
  "Calidad y mejoramiento logistico",
  "Computacion aplicada",
  "Contabilidad general",
  "Costos y presupuestos",
  "Desarrollo de habilidades comunicativas",
  "Envases y embalajes",
  "Estadistica",
  "Etica profesional",
  "Gestion de operaciones logisticas",
  "Ingles basico 1",
  "Ingles basico 2",
  "Logistica",
  "Logistica internacional",
  "Matematica",
  "Prevencion de riesgos y medio ambiente",
  "Software administrativo",
  "Taller de desarrollo personal 1",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Tecnologias logisticas",
  "Transporte y distribucion logistica"
];


var ramosTecnicoEducacionEspecial = [
  "Comunicacion alternativa y aumentativa",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo de la comunicacion",
  "Educacion psicomotriz",
  "Etica profesional",
  "Evaluacion en educacion especial",
  "Expresion artistico musical",
  "Integracion de la familia y el entorno",
  "Introduccion a la educacion especial",
  "Juegos y recreacion",
  "Lenguaje artistico plastico manual",
  "Metodologias para el desarrollo de la lectura y escritura",
  "NEE permanentes y metodologias de trabajo 1",
  "NEE permanentes y metodologias de trabajo 2",
  "NEE transitorias y metodologias de trabajo",
  "Pensamiento logico matematico y metodologias de trabajo",
  "Practica 1 NEE transitorias",
  "Practica 2 NEE permanentes",
  "Prevencion de riesgos escolares y primeros auxilios",
  "Psicologia del desarrollo humano",
  "Taller de desarrollo personal",
  "Taller de expresion",
  "Taller de nivelacion matematica ONLINE"
];

var ramosTecnicoEducacionParvularia = [
  "Comunicacion integral 1er y 2do nivel",
  "Comunicacion integral 3er nivel",
  "Curriculum y evaluacion",
  "Etica profesional",
  "Higiene y salud del parvulo",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo personal y social 1er y 2do nivel",
  "Desarrollo personal y social 3er nivel",
  "Matematica para 1er y 2do basico",
  "Elaboracion de proyectos en la educacion parvularia",
  "Estrategias metodologicas para la etapa de transicion escolar",
  "Practica 1 en educacion parvularia",
  "Practica 2 en educacion parvularia",
  "Proyectos colaborativos",
  "Psicologia del desarrollo infantil",
  "Taller de canto e instrumentos musicales",
  "Taller de danza y juegos",
  "Taller de expresion teatral",
  "Taller de identidad personal y social",
  "Taller de inclusion y atencion a la diversidad",
  "Expresion plastica y manualidades",
  "Taller de preparacion laboral",
  "Familia y comunidad",
  "Fundamentos de la educacion parvularia y basica",
  "Interaccion y comprension del entorno 1er y 2do nivel",
//"Interaccion y comprension del entorno 3er nivel",
  "Lectura y escritura para 1er y 2do basico",
  "Proyectos colaborativos",
  "Psicologia del desarrollo infantil",
  "Taller de prevencion de riesgos y primeros auxilios",
  "Taller de titeres literatura y teatro infantil",
  "Taller de canto e instrumentos musicales",
  "Taller de nivelacion de competencias comunicativas",
  "Taller de nivelacion matematica ONLINE"
];

var ramosTecnicoEnfermeria = [
  "Atencion primaria en salud",
  "Bioseguridad IAAS y REAS",
  "Capacitador de sistemas de informacion en salud",
  "Cuidados materno infantil",
  "Cuidados primarios",
  "Cuidados de enfermeria avanzada",
  "Cuidados de rehabilitacion integral",
  "Cuidados integrales del adulto mayor",
  "Cuidados paliativos",
  "Cuidados prehospitalarios",
  "Desarrollo regional en salud",
  "Equipo de salud y rol del tecnico",
  "Etica en salud",
  "Hospitalizacion domicilaria",
  "Integracion de competencias",
  "Modelo de salud en contexto de calidad y salud digital",
  "Procesos fisiologicos humanos",
  "Registros y comunicacion clinica en la era digital",
  "Salud mental comunitaria",
  "Taller cuidador primario",
  "Taller de habilidades comunicativas",
  "Taller de habilidades tic"
];

var ramosTecnicoEnfermeriaGineco = [
  "Administracion de farmacos",
  "Atencion del recien nacido",
  "Atencion del recien nacido patologico",
  "Cuidador en ginecologia",
  "Cuidados en alto riesgo obstetrico",
  "Cuidados en obstetricia",
  "Cuidados en salud familiar",
  "Desarrollo de habilidades comunicativas",
  "Educacion para la salud",
  "Enfermeria basica aplicada",
  "Enfermeria medico quirurgica",
  "Etica profesional",
  "Microbiologia basica aplicada",
  "Modelo de salud familiar",
  "Orientacion profesional del tecnico en salud",
  "Practica de enfermeria 2",
  "Practica de enfermeria basica",
  "Practica en enfermeria 1",
  "Primeros auxilios y prevencion de riesgos",
  "Procesos fisiologicos en el ser humano",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de nivelacion matematica ONLINE",
  "Tecnicas generales del quirofano"
];

var ramosTecnicoHoteleriaTurismo = [
  "Administracion de empresas de servicios turisticos y hoteleros",
  "Contabilidad para empresas de servicios hoteleros",
  "Control de gestion de servicios hoteleros",
  "Desarrollo de habilidades comunicativas",
  "Destinos productos y programacion turistica",
  "Estructura del mercado turistico y hotelero",
  "Etica profesional",
  "Gestion de eventos y banqueteria",
  "Ingles turistico 1",
  "Ingles turistico 2",
  "Ingles turistico 3",
  "Ingles turistico 4",
  "Marketing de servicios turisticos y hoteleros",
  "Sistemas de distribucion turistica y hotelera",
  "Taller de desarrollo personal",
  "Taller de gastronomia",
  "Taller de nivelacion matematica  ONLINE",
  "Tecnicas de servicio de bar vinos y cocteles",
  "Tecnicas de servicio de recepcion de reservas",
  "Tecnicas de servicios en restaurants",
  "Tecnicas de servicio y protocolo en el turismo",
  "Tecnicas de sommeleria"
];

var ramosTecnicoLaboratorioClinico = [
//  "Administracion y registro informatico en el laboratorio",
  "Anatomofisiologia aplicada",
  "Etica en salud",
  "Educacion para la salud",
 // "Microbiologia aplicada al laboratorio",
  "Orientacion profesional y modelo de salud",
  "PAUX y prevencion de riesgos",
  "Practica de imagenologia",
  "Practica de laboratorio clinico",
  "Practica en procedimientos de enfermeria",
  "Procedimientos de bioanalisis clinicos",
  "Procedimientos de colaboracion en diagnostico por imagen y radioterapia",
  "Procedimientos de enfermeria",
  "Procesos de apoyo en banco de sangre",
  "Procesos de laboratorio para la investigacion",
//  "Procesos Hematologicos y bioseguridad en laboratorio clinico",
  "Proteccion radiologica",
  "Taller de desarrollo personal",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Taller de procedimientos centros de sangre UMT",
  "Desarrollo de habilidades comunicativas"
];

var ramosTecnicoOdontologiaHigienista = [
  "Anatomia y fisiologia bucodental",
  "Aplicacion informatica en odontologia",
  "Asistencia clinica por especialidad",
  "Biomateriales dentales",
  "Bioseguridad y asepsia",
  "Clinica higienista dental 1",
  "Clinica higienista dental 2",
  "Desarrollo de habilidades comunicativas",
  "Esterilizacion y manejo de autoclave",
  "Etica profesional",
  "Fundamentos de administracion clinica y odontologica",
  "Instrumental y equipamiento odontologico",
  "Microbiologia dental",
  "Taller de competencias comunicativas",
  "Taller de desarrollo personal",
  "Taller de identidad personal y social",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Taller de radiologia dental",
  "Taller preclinico y primeros auxilios",
  "Odontologia general y modelos de salud",
  "Patologia bucodental",
  "Practica de asistencia clinica",
  "Programa de promocion de salud",
  "Promocion en salud y prevencion de enfermedades bucodentales",
  "Proyectos colaborativos",
  "Radiologia dental"
];

var ramosTecnicoTrabajoSocial = [
  "Administracion general",
  "Antropologia general",
  "Beneficios previsionales y de salud",
  "Computacion basica",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo local",
  "Electivo de formacion profesional 1",
  "Etica personal",
  "Familia",
  "Grupos y comunidades",
  "Introduccion al trabajo social",
  "Legislacion y trabajo social",
  "Manejo de informacion social",
  "Politicas publicas y sociales en chile",
  "Psicologia evolutiva",
  "Salud comunitaria",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de nivelacion matematica",
  "Taller de preparacion laboral",
  "Taller de redes sociales",
  "Taller de vinculacion laboral en contextos del trabajo social",
  "Taller de vinculacion laboral programas sociales e informacion social",
 // "Taller de vinculacion laboral IRS y medio ambiente",
  "Taller de vinculacion laboral salud publica",
  "Tecnicas de administracion presupuestaria"
];

var ramosTecnicoVeterinaria = [
  "Administracion de empresas",
  "Aseguramiento de calidad e inocuidad alimentaria",
  "Asistencia clinica de animales pequenos",
  "Asistencia en laboratorio veterinario",
  "Desarrollo de habilidades comunicativas",
  "Desarrollo de proyectos",
  "Electivo regional",
  "Etica profesional",
  "Inspeccion de plantas faenadoras",
  "Nivelacion matematica",
  "Produccion de monogastricos",
  "Produccion de rumiantes",
  "Produccion en forraje y alimentacion animal",
  "Proyectos colaborativos",
  "Reproduccion animal",
  "Responsabilidad y tenencia de animales de compania",
  "Sanidad de la produccion animal",
  "Taller de desarrollo personal 1",
  "Taller de identidad personal y social",
  "Taller de nivelacion de competencias comunicativas",
  "Taller de preparacion laboral",
  "Tecnicas de asistencia en pabellon",
  "Tecnicas de enfermeria general",
  "Tecnologia de los alimentos",
  "Transferencia tecnologica"
];

var ramosTecnicoJuridico = [
  "Computacion basica",
  "Derecho civil",
  "Derecho notarial",
  "Derecho procesal organico",
  "Desarrollo de habilidades comunicativas",
  "Electivo de formacion profesional 1",
  "Estructura y administracion del estado",
  "Etica profesional",
  "Gestion juridica en la empresa",
  "Gestion notarial e inmobilaria",
  "Introduccion al derecho",
  "Manejo de documentos juridicos",
  "Modulo tecnico practico de juicios civiles",
  "Modulo teorico practico de juicios penales",
  "Procedimientos laborales",
  "Relaciones colectivas del trabajo",
  "Relaciones laborales publico privadas",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de negociacion colectiva",
  "Taller de nivelacion matematica ONLINE",
  "Taller de preparacion laboral",
  "Taller de tramitacion de juicios de familia",
  "Taller de vinculacion laboral"
];

var ramosTecnicoLaboratoristaDental = [
  "Anatomia y fisiologia craneofacial",
  "Desarrollo de habilidades comunicativas",
  "Etica profesional",
  "Generalidades de rehabilitacion sobre implantes",
  "Gestion y administracion de laboratorio dental",
  "Introduccion al laboratorio",
  "Laboratorio base metalica",
  "Laboratorio ceramica y rehabilitacion sobre implantes",
  "Laboratorio de ortodoncia",
  "Laboratorio protesis fija restaurativa",
  "Laboratorio protesis removible parcial",
  "Laboratorio protesis removible total",
  "Morfologia dentaria",
  "Oclusion",
  "Taller de desarrollo personal 1",
  "Taller de desarrollo personal 2",
  "Taller de nivelacion matematica ONLINE"
];
export let ramosObject= {
  ramosContabilidadGeneral,
  ramosAnalistaProgramador,
  ramosTecnicoLaboratoristaDental,
  ramosTecnicoJuridico,
  ramosTecnicoVeterinaria,
  ramosTecnicoTrabajoSocial,
  ramosTecnicoOdontologiaHigienista,
  ramosIngLogistica,
  ramosServicioSocial,
  ramosGastronomia,
  ramosEjecucionAdministracion,
  ramosEjecucionAdminContinuidad,
  ramosIngAgricolaContinuidad,
  ramosTecnicoAdminLogistica,
  ramosTecnicoEducacionEspecial,
  ramosTecnicoEducacionParvularia,
  ramosIngAdminRecursosHumanos,
  ramosTecnicoEnfermeria,
  ramosTecnicoEnfermeriaGineco,
  ramosTecnicoHoteleriaTurismo,

  ramosTecnicoLaboratorioClinico,
  ramosIngInformatica,
  ramosTecnicoAdministracion,
  ramosTecnicoAgricola,
  ramosIngComercioExterior,
  ramosPsicopedagogia,
  ramosServiciosAerocomerciales
  }
  

function toPascalCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
    return match.toUpperCase();
  }).replace(/\s+/g, '');
}


let routes =   [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // Aquí puedes agregar la lógica para enviar el mensaje al servidor antes de ingresar a la ruta
      console.log("Agregar validaciones para cerrar la sesión si el token no es válido.");
      next();
    }
  },
 // {
 //   path: '/about',
 //   name: 'about',
 //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
 // },
  {
    path: '/ingresar',
    name: 'ingresar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ingresar.vue')
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: () => import(/* webpackChunkName: "about" */ '../views/registrarse.vue')
  },
  {
    path: '/miPerfil',
    name: 'miperfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/miPerfil.vue')
  },
  {
    path: '/Estadisticas',
    name: 'statistics',
    component: () => import(/* webpackChunkName: "about" */ '../views/estadisticas.vue')
  },
  {
    path: '/misVotos',
    name: 'misvotos',
    component: () => import(/* webpackChunkName: "about" */ '../views/misVotos.vue')
  },
  {
    path: '/encuestas',
    name: 'encuestas',
    component: () => import(/* webpackChunkName: "about" */ '../views/encuestas.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo',
    name: 'encuestasporramo',
    component: () => import(/* webpackChunkName: "about" */ '../views/encuestasPorRamo.vue')
  },
  {
    path: '/encuestas/encuestaBienestarSocial',
    name: 'Bienestar social',
    component: () => import(/* webpackChunkName: "about" */ '../views/encuestaBienestarSocial.vue')
  },
  {
    path: '/encuestas/encuestaProfesores',
    name: 'Profesores',
    component: () => import(/* webpackChunkName: "about" */ '../views/encuestaProfesores.vue')
  },
  {
    path: '/encuestas/encuestaInfraestructuraEscolar',
    name: 'infraestructura',
    component: () => import(/* webpackChunkName: "about" */ '../views/encuestaInfraestructuraEscolar.vue')
  },
  //inicio materias que no se mapearon bien
  {
    path: '/encuestas/encuestasPorRamo/probabilidadyestadistica',
    name: 'Probabilidad estadistica',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaProbabilidadEstadistica.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/TallerDeHabilidadesTic',
    name: 'Taller de habilidades tic',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaTallerDeHabilidadesTic.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/SistemasOperativosLinux',
    name: 'Sistemas operativos linux',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaSistemasOperativosLinux.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/ProgramacionOrientadaAObjetos',
    name: 'Programacion orientada a objetos',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaProgramacionOrientadaAObjetos.vue')
  },

  {
    path: '/encuestas/encuestasPorRamo/NegociacionYAdaptacionALosCambios',
    name: 'Negociacion y adaptacion a los cambios',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaNegociacionYAdaptacionALosCambios.vue')
  },

  {
    path: '/encuestas/encuestasPorRamo/CostosYPresupuestos',
    name: 'Costos presupuestos',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaCostosPresupuestos.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/Economia',
    name: 'E',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaEconomia.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/TallerDeIdentidadPersonalYSocial',
    name: 'Identidad personal',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaTallerDeIdentidadPersonalYSocial.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/HerramientasTecnologicasIntermedia',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaHerramientasTecnologicasIntermedia.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/HerramientasTecnologicasOfimata',
    name: 'Herramientas ofimata',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaHerramientasOfimata.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/SoftwareERP',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaSoftwareERP.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/EticaProfesional',
    name: 'Etica',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaEticaProfesional.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/OrganizacionesPublicas',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaOrganizacionesPublicas.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/ReclutamientoYSeleccionDeRecursosHumanos',
    name: 'reclutamiento',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaReclutamientoYSeleccionDeRecursosHumanos.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/ValoracionDeCargosYDesempeno',
    name: 'Valorizacion',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaValoracionDeCargosYDesempeno.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/DerechoSindicalYNegociacionColectiva',
    name: 'Valorizacion',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaDerechoSindical.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/PlanificacionEstrategicaDeRRHH',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaPlanificacionEstrategicaDeRRHH.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/ProgramaDeBienestarYSustentabilidad',
    name: 'Valorizacion',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaProgramaDeBienestarYSustentabilidad.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/TCLYCertificadosDeOrigen',
    name: 'ad',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaTCLYCertificadosDeOrigen.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/TecnicasDeServicioYProtocoloEnElTurismo',
    name: 'ad',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaTecnicasDeServicioYProtocoloEnElTurismo.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/LaboresFruticolasDeInvierno',
    name: 'ad',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaLaboresFruticolasDeInvierno.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/LaboresFruticolasDeVerano',
    name: 'aad',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaLaboresFruticolasDeVerano.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/InteraccionYComprensionDelEntorno3erNivel',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaInteraccionYComprensionDelEntorno3erNivel.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/AdministracionYRegistroInformaticoEnElLaboratorio',
    name: 'as',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaAdministracionYRegistroInformaticoEnElLaboratorio.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/ProcesosHetamologicosYBioseguridadEnLaboratorioClinico',
    name: 'as',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaProcesosHetamologicosYBioseguridadEnLaboratorioClinico.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/TallerDeVinculacionLaboralIRSYMedioAmbiente',
    name: 'sss',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaTallerDeVinculacionLaboralIRSYMedioAmbiente.vue')
  },
  {
    path: '/encuestas/encuestasPorRamo/MicrobiologiaAplicadaAlLaboratorio',
    name: 'as',
    component: () => import(/* webpackChunkName: "about" */  '../views/carreras/materiasRezagadas/encuestaMicrobiologiaAplicadaAlLaboratorio.vue')
  },
   //fin materias que no se mapearon bien
...ramosAnalistaProgramador.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/analistaProgramador/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log(e)
  }
 
}),
...ramosServiciosAerocomerciales.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/serviciosAerocomercialesYtransportesTuristicos/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log(e)
  }
 
}),
...ramosTecnicoLaboratoristaDental.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoLaboratoristaDental/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoJuridico.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoJuridico/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoVeterinaria.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnVeterinaria/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoTrabajoSocial.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnTrabajoSocial/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoOdontologiaHigienista.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnOdontologiaMencionHigienistaDental/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosIngLogistica.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaEnLogistica/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosServicioSocial.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/serviciosocial/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosGastronomia.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/Gastronomia/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

,

...ramosEjecucionAdministracion.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaDeEjecucionEnAdministracion/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosEjecucionAdminContinuidad.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaDeEjecucionEnAdministracion-continuidad/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosIngAgricolaContinuidad.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaAgricola-continuidad/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoAdminLogistica.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnAdministracionLogistica/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoEducacionEspecial.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnEducacionEspecial/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosTecnicoEducacionParvularia.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnEducacionParvularia/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosIngAdminRecursosHumanos.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaEnAdministracionDeRecursosHumanos/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosTecnicoEnfermeria.map((element) => {
  try{
    const routeName = toPascalCase(element);

    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnEnfermeria/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosTecnicoEnfermeriaGineco.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnEnfermeriaGineco/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoHoteleriaTurismo.map((element) => {
  try{
    console.log("elemento original:", element);
    const routeName = toPascalCase(element);
    console.log("elemento pascal:", routeName);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnHoteleriaYturismo/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosContabilidadGeneral.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/contabilidadGeneral/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoLaboratorioClinico.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnLaboratorioClinico/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosIngInformatica.map((element) => {
  try{

    const routeName = toPascalCase(element);

    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaEnInformatica/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosTecnicoAdministracion.map((element) => {
  try{
    const routeName = toPascalCase(element);

    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoEnAdministracion/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),

...ramosTecnicoAgricola.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/tecnicoAgricola/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosIngComercioExterior.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/ingenieriaEnComercioExterior/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }

}),

...ramosPsicopedagogia.map((element) => {
  try{
    const routeName = toPascalCase(element);
    return {
      path: `/encuestas/encuestasPorRamo/${routeName}`,
      name: element,
      component: () => import(`../views/carreras/psicopedagogia/encuesta${routeName}.vue`)
    };
  }catch(e){
    console.log("ERROR EN LA ENCUESTA: ESTE ES EL RAMO:",e)
  }


}),


];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//despues se hacer esto, importar 
export default router
