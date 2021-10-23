export const STORAGE_KEY = "USER-SCRIPT-COURSE-FULLNAMES";
export const REQUEST_CONFIG = [
  {
    index: 0,
    methodname: "core_course_get_enrolled_courses_by_timeline_classification",
    args: {
      offset: 0,
      limit: 0,
      classification: "all",
      sort: "shortname",
      customfieldname: "semester",
      customfieldvalue: "",
    },
  },
];
