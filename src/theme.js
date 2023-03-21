const sharedStyles = {
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  outline: "none",
};

export const theme = {
  light: {
    ...sharedStyles,
    backgroundColor: "#f1f1f1",
    color: "#222222",
  },
  dark: {
    ...sharedStyles,
    backgroundColor: "#222222",
    color: "#f1f1f1",
  },
};

export const pageStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
};
