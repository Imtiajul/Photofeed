import PhotoDetails from "@/_components/PhotoDetails"

import Modal from "@/_components/Modal"

const PhotoModal = ({params: {id, lang}}) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  )
}

export default PhotoModal
