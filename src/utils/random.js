// Devolver un elemento aleatorio del arreglo que recibe
// Se ocupa redonde hacia abajo para no superar la última posición del array

const getRandomElement = (elements) => {
  const indexRandom = Math.floor(Math.random() * elements.length);
  return elements[indexRandom];
};

export { getRandomElement }