export default async function Fetcher(...args) {
  const res = await fetch(...args);

  return await res.json();
}
