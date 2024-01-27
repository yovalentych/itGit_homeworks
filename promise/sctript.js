// const fetchData = async () => {
//   const response = await fetch(`${URL}?id=703448&appid=${APIKEY}`);
//   const data = await response.json();
//   console.log(data);
// };

// fetchData();

// fetch(`${URL}?id=703448&appid=${APIKEY}`)
//   .then((data1) => {
//     return data1.json();
//   })
//   .then((data2) => console.log(data2));

// async function getWeather() {
//   let a = await fetch(`${URL}?id=703448&appid=${APIKEY}`);
//   console.log(a);
//   const res = await a.json();
//   console.log(res);
// }
// getWeather();

// async function f1() {
//   const requestHeaders = new Headers();
//   requestHeaders.append('apikey', 'SqnZ1f7CJD5TTViT');
//   let response = await fetch('https://api.itgid.info/api/26/employee/read', {
//     method: 'GET',
//     headers: requestHeaders,
//   });

//   //   if (!response.ok) {
//   //     const errorMsg = `Error ${response.status}`;
//   //     throw new Error(errorMsg);
//   //   }

//   //   console.log(response);

//   const result = await response.json();
//   console.log(result);
// }

// f1();

async function f2() {
  const requestHeaders = new Headers();
  requestHeaders.append('apikey', 'SqnZ1f7CJD5TTViT');
  const formData = new FormData();
  formData.append('length', 16);
  formData.append('symbols', 1);
  const response = await fetch(
    'https://api.itgid.info/api/26/random/generate-password',
    {
      method: 'POST',
      headers: requestHeaders,
      body: formData,
    }
  );
  const result = await response.json();
  console.log(result);
  console.log(result.password);
}
f2();
