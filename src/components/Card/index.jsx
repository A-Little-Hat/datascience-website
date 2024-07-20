import React from 'react'

const Card = ({data}) => {
  return (
    <div className="w-full max-w-md bg-card p-6 rounded-lg shadow-md">
          <img
        src={data.imgurl}
        alt="Card Image"
        width={400}
        height={240}
        className="rounded-t-lg object-cover w-full"
      />
      <div className="mt-6 space-y-2">
        <label htmlFor="Title">Title</label>
        <h3 className="text-2xl font-bold text-card-foreground">{data.title}</h3>
        <label htmlFor="Summary">Summary</label>
        <p className="text-muted-foreground">{data.summary}</p>
        <label htmlFor="Description">Description</label>
        <p className="text-muted-foreground">{data.description}</p>
        <a
          href={data.demolink}
          className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          prefetch={false}
        >
          <span>View Demo</span>
        </a>
      </div>
    </div>
  )
}

export default Card