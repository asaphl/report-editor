export const REMOTE_SERVER =
  process.env.NODE_ENV === "production"
    ? "https://report-builder.herokuapp.com/"
    : "http://localhost:5000/";
export default REMOTE_SERVER;
