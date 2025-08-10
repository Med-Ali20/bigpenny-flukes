import { Grid, Event } from '@/types'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const GridComponent: React.FC<Grid> = ({ Title, Event }) => {
  const events = Event.map((e: Event) => {
    return (
      <div key={uuidv4()} className="event-template-2" cf-collection-template="-">
        <a
          cf-data-href="Url"
          href={e.Url}
          className="link-block-20 w-inline-block"
        >
          <div className="div-block-6">
            <div className="image-wrapper-3-2" style={{height: '260px', overflow: 'hidden'}}>
              <img
                src={e.Image?.data?.attributes?.url}
                loading="lazy"
                cf-data-src="Image.data.attributes.url"
                alt={e.Image?.data?.attributes?.name}
                className="image-wrapper_image-2"
              />
            </div>
            <div className="div-block-8">
              <div className="div-block-7">
                <h3 cf-data-text="PrettyDate" className="heading-3">
                  EVERY WEEK
                </h3>
              </div>
            </div>
          </div>
          <h1 cf-data-text="Title" className="heading-5">
            {e.Title}
          </h1>
        </a>
        <a
          cf-data-href="Url"
          href={e.Url}
          className="link"
        >
          SEE MORE
        </a>
      </div>
    )
  })
  return (
    <section
      cf-component-id="section.grid"
      className="section-3 padding-vertical padding-bottom padding-xlarge"
    >
      <div className="w-embed"></div>
      <div className="page-padding">
        <div className="container-large">
          <h1 cf-data-text="Title" className="events-heading">
            {/* Replace with dynamic title if necessary */}
            {Title}
          </h1>
          <div
            id="events-grid"
            className="w-layout-grid grid"
            cf-collection="Event"
          >
            {/* Dynamic event rendering starts here */}
            {events}
            {/* Add more event items dynamically here */}
          </div>
        </div>
      </div>
    </section>

  )
}

export default GridComponent