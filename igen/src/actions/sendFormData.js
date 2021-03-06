import axios from 'axios';

const sendFormData = async ({ title, option, description, file }) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title);
  formData.append('description', description);
  try {
    await axios.post('https://localhost:3001/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendFormData;
