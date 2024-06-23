import fs from 'fs';
import path from 'path';

// Define the shape of the customer


const dataFilePath = path.join(process.cwd(), 'public', 'form.json');

// Ensure the data file exists
const ensureDataFileExists = ()=> {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]', 'utf-8'); // Create an empty array in the file
  }
};

export const readData = () => {
  try {
    ensureDataFileExists();
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

export const addCustomer = (customer) => {
  const data = readData();
  data.push(customer);
console.log(data)
  writeData(data);


  return true; // Return true if added successfully
};

// export const deleteCustomerById = (email: string) => {
//   let data = readData();

//   // Filter out the customer with the specified email
//   data = data.filter((customer) => customer.email !== email);

//   writeData(data);

//   return true; // Return true if a customer was deleted, false otherwise
// };