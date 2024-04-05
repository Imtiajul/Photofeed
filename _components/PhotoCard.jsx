import Image from "next/image"
import Link from "next/link"

const PhotoCard = ({ photo: { id, title, url } }) => {
  return (
    <Link href={`/photos/${id}`} className="group">
      <Image src={url} alt={title} width={700} height={700} />

      <div className="title-container">
        <h4 className="title">{title}</h4>
      </div>
    </Link>
  )
}

export default PhotoCard
