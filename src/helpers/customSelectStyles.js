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
  multiValueGeneric: baseStyles => ({
    ...baseStyles,
    color: "red",
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
    height: "272px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    overflow: "hidden",
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
    background: "#fff",
    padding: "200px 8px 14px 0",
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

  option: baseStyles => ({
    ...baseStyles,
    display: "inline-flex",
    width: "100%",
    padding: "0",
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
