export const SERVER_URL = (
  process.env.NODE_ENV === "production"
    ? "https://report-editor.herokuapp.com/"
    : "http://localhost:5000/"
);
export default SERVER_URL;
