let baseApiUrl;
if (process.env.NODE_ENV === "development") {
  baseApiUrl = "http://127.0.0.1:8000";
} else {
  baseApiUrl = "http://todolist-env.uim4xi6eyh.us-east-1.elasticbeanstalk.com/";
}

export {
  baseApiUrl
};
