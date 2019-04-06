export default function externalComponent(url) {
  return new Promise((resolve, reject) => {
    const name = url.split(`/`).reverse()[0].match(/^(.*?)\.umd/)[1];
    const script = document.createElement(`script`);
    script.async = true;
    script.addEventListener(`load`, () => {
      resolve(window[name]);
    });
    script.addEventListener(`error`, () => {
      reject(new Error(`Error loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });
}
