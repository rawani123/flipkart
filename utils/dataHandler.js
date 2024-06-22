import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(),"public",'/data.json');

export const readData = () => {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (err) {
    console.error('Error reading data file:', err);
    return [];
  }
};

export const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing data file:', err);
  }
};

export const addOrUpdateProduct = (product) => {
  const data = readData();
  const existingProduct = data.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.count = (existingProduct.count || 1) + 1;
  } else {
    product.count = 1;
    data.push(product);
  }

  writeData(data);

  return !existingProduct; // Return true if added, false if count was incremented
};

export const deleteProductById = (idToDelete) => {
  let data = readData();

  // Filter out the product with the specified id
  data = data.filter((product) => product.id !== idToDelete);

  writeData(data);

  return !(data.length !== data.length); // Return true if a product was deleted, false otherwise
};