import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjQ3N2YyNTk1OTFjZjhiZDc5ZGE4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjEzODk4MSwiZXhwIjoxNjg2Mzk4MTgxfQ.awOYhFR8s50SiMknEAX-jokUZaqolyoUpkIQ4IYxHq4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
