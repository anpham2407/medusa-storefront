import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import Thumbnail from "@modules/products/components/thumbnail"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"
import Link from "next/link"
import medusaRequest from "../medusa-fetch"
import Button from "@modules/common/components/button"
import { blob } from "stream/consumers"

type ItemsProps = {
  items: LineItem[]
  region: Region
  cartId: string
}

const Items = ({ items, region, cartId }: ItemsProps) => {
  const enrichedItems = useEnrichedLineItems(items, cartId)
  const handleDownload = async (variant_id: string, item: any) => {

    const apiUrl = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/product-media/download/${variant_id}`;
    await fetch(apiUrl, {
      credentials: "include",
    }).then((res) => res.blob()).then((blob) => {
      // Create blob link to download
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = window.document.createElement('a');
      var currentDate = new Date();
      var day = currentDate.getDate()
      var month = currentDate.getMonth() + 1
      var year = currentDate.getFullYear()
      anchor.download = `${item.title}_${day}-${month}-${year}`;
      anchor.href = blobUrl;
      anchor.click();
      window.URL.revokeObjectURL(blobUrl);
    })
  }

  return (
    <div className="p-10 border-b border-gray-200 gap-y-4 flex flex-col">
      {enrichedItems?.length
        ? enrichedItems.map((item) => {
            return (
              <div className="grid grid-cols-[122px_1fr] gap-x-4" key={item.id}>
                <div className="w-[122px]">
                  <Thumbnail thumbnail={item.thumbnail} size="full" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col flex-1 text-small-regular">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4">
                          <Link
                            href={`/products/${item.variant.product.handle}`}
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <LineItemOptions variant={item.variant} />
                        <span>Quantity: {item.quantity}</span>
                      </div>
                      <div className="flex justify-end">
                        <LineItemPrice region={region} item={item} />
                        <Button 
                          variant="secondary" 
                          onClick={() => handleDownload(item.variant.id, item)}>
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : Array.from(Array(items.length).keys()).map((i) => {
            return <SkeletonLineItem key={i} />
          })}
    </div>
  )
}

export default Items