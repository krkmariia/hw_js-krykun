const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "long",
};

const dateInGermany = date.toLocaleString ("de-De", options);
console.log(dateInGermany);

const dateInItaly = date.toLocaleString ("it-It", options);
console.log(dateInItaly);