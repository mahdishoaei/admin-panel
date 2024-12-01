export const ValidateName = (param) => {
  if (param.length > 2 && param.length < 20) {
    return {
      state: false,
      message: "",
    };
  } else {
    return { state: true, message: "entering name is required" };
  }
};

export const validateEmpty = (param) => {
  if (param == "") {
    return { state: true, message: "this section shoud not be empty" };
  } else {
    return {
      state: false,
      message: "",
    };
  }
};

export const validateNumber = (param) => {
  if (isNaN(param)) {
    return { state: true, message: "just use the number" };
  } else if (param == "") {
    return { state: true, message: "just use the number" };
  } else {
    return { state: false, message: "" };
  }
};
