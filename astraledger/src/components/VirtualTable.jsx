import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'

export default function VirtualTable({ data }) {
  const parentRef = useRef(null)
  
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 10,
  })

  return (
    <div ref={parentRef} className="h-96 overflow-auto">
      <div 
        className="w-full relative"
        style={{ height: rowVirtualizer.getTotalSize() }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            className="absolute top-0 left-0 w-full"
            style={{ transform: `translateY(${virtualRow.start}px)` }}
          >
            <div className="flex items-center p-4 border-b">
              {data[virtualRow.index]?.symbol}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}