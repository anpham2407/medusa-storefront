import Button from "@modules/common/components/button"
import { ProductMedia } from "types/product-media"

type Props = {
  media: ProductMedia
}

const ProductMediaPreview: React.FC<Props> = ({ media }) => {
  const downloadPreview = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/preview?file_path=${media.file_key}&file_name=${media.name}&mime_type=${media.mime_type}`
  }

  return (
    <div>
      <Button variant="secondary" onClick={downloadPreview}>
        Download free preview
      </Button>
    </div>
  )
}

export default ProductMediaPreview