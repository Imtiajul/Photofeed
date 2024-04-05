import PhotoDetails from "@/_components/PhotoDetails"

const page = ({params: {id, lang}}) => {
  return (
   <main className="container my-4 lg:my-8">
      <PhotoDetails id={id} lang={lang}/>
   </main>
  )
}

export default page
