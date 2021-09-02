export interface BootcampDetails {
	slug: string;
	name: string;
	description: number;
  careers: string[];
}

export const getAllBootcamps = () => {
  // TODO: Make this url a process env
  return fetch('http://localhost:5000/api/v1/bootcamps')
  .then(data => data.json())
  .then(data => data.data);
}

export const getBootcampBySlug = (slug : string) => {
  // TODO: Make this url a process env
  return fetch(`http://localhost:5000/api/v1/bootcamps?slug=${slug}`)
  .then(data => data.json())
  .then(data => data.data);
}