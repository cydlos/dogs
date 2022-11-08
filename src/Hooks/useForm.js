import React from "react";

const types = {
  email: {
    regex:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ,
    message: "Email inválido",
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Insira um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      // types[type] equivale a types.email, que não pode ser usado aqui pois inclui string.
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    // Passado como método.
    onBlur: () => validate(value),
  };
};

export default useForm;
