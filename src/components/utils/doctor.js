import docImg from '../../assets/doc-1.png';

export const getDoctors = async () => {
  let data = [];
  const specialties = ['Pediatría', 'Cardiología', 'Cirugía', 'Traumatología'];

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Error al obtener los medicos');
    }

    data = await response.json();
  } catch (error) {
    alert('Error al obtener los medicos', error.message);
  }

  return data.map(({ id, name }) => ({
    id,
    name,
    specialty: specialties[Math.floor(Math.random() * specialties.length)],
    img: docImg,
    experience: Math.floor(Math.random() * 10) + 1,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  }));
};
