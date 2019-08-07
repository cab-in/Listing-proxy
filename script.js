import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 220,
  duration: "2m"
};

export default function() {
  let id = Math.ceil(Math.random() * 10000);
  http.get(`http://localhost:4000/${id}`);
  sleep(1);
};