export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex gap-1'>
      {[...Array(rating)].map((_, index) => (
        <span key={index} className='text-yellow-400'>
          ★
        </span>
      ))}
    </div>
  )
}
