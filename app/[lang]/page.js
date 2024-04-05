import PhotoList from "@/_components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function Home({params: {lang}}) {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);

  const photos = await response.json();
  
    return (
    <main className="container my-4 lg:my-8">
      <PhotoList photos={photos} /> 
    </main>
  );
}
