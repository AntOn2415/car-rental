export const customSelectStyles = {
  control: () => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8px",
    width: "224px",
    borderRadius: "14px",
    background: "#f7f7fb",
    color: "#121417",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "calc(20 / 18)",
    outline: "none",
    border: "none",
    cursor: "text",
  }),

  valueContainer: baseStyles => ({
    ...baseStyles,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "14px 18px",
    height: "48px",
    width: "165px",
  }),

  input: baseStyles => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
  }),

  singleValue: baseStyles => ({ ...baseStyles, width: "165px", margin: "0" }),

  placeholder: baseStyles => ({
    ...baseStyles,
    color: "#121417",
  }),

  indicatorsContainer: () => ({
    display: "none",
  }),

  menu: baseStyles => ({
    ...baseStyles,
    position: "absolute",
    zIndex: "999",
    display: "inline-flex",
    padding: "0 8px 0 18px",
    maxHeight: "272px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    overflow: "hidden",
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    padding: "0 8px 14px 0",
    background: "#fff",

    "&::-webkit-scrollbar": {
      width: "8px",
      height: "130px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),
  multiValue: baseStyles => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
    background: "transparent",
    color: "#121417",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "calc(20 / 18)",
  }),

  option: baseStyles => ({
    ...baseStyles,
    display: "inline-flex",
    width: "100%",
    padding: "0",
    marginTop: "8px",
    color: "rgba(18, 20, 23, 0.2)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    transition: "color  300ms ease",
    cursor: "pointer",
    background: "#fff",

    "&:hover": {
      background: "transparent",
      color: "#121417",
    },
  }),
};

export const customSelectCityStyles = {
  control: () => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px #3470ff",
    color: "#3470ff",
    minWidth: "160px",
    borderRadius: "12px",
    outline: "none",
    background: "#fff",
    cursor: "text",

    transition: "color 300ms ease, border 300ms ease",

    "&:hover, &:focus": {
      border: "solid 1px #0b44cd",
      color: "#0b44cd",
    },
  }),

  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: "10px 14px",
  }),

  input: baseStyles => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
  }),

  singleValue: baseStyles => ({ ...baseStyles }),

  placeholder: baseStyles => ({
    ...baseStyles,
  }),

  indicatorsContainer: () => ({
    display: "none",
  }),

  menu: baseStyles => ({
    ...baseStyles,
    position: "absolute",
    top: "-290px",
    zIndex: "999",
    display: "inline-flex",
    padding: "0 8px 0 18px",
    maxHeight: "272px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    overflow: "hidden",
  }),
  menuList: baseStyles => ({
    ...baseStyles,

    "&::-webkit-scrollbar": {
      width: "8px",
      height: "130px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),
  multiValue: baseStyles => ({
    ...baseStyles,
  }),

  option: baseStyles => ({
    ...baseStyles,
    display: "inline-flex",
    width: "100%",
    padding: "0",
    marginTop: "8px",
    color: "rgba(18, 20, 23, 0.2)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    transition: "color  300ms ease",
    cursor: "pointer",
    background: "#fff",

    "&:hover": {
      background: "transparent",
      color: "#121417",
    },
  }),
};
