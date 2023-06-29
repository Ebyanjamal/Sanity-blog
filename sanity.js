import { createCurrentUserHook} from "next-sanity"
// import { useCurrentUser } from "@sanity/base/hooks";
import {createClient} from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import imageUrlBuilder from '@sanity/image-url'



export const config = { 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", 
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-06-12",

    useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getprops page functions 
 
export const sanityClient = createClient(config);

// A helper function for asscessing data and image urls 


const builder = imageUrlBuilder(config)

export const urlFor = (source) => {
  return builder.image(source)
}

// export const urlFor = (source) => createImageUrlBuilder(client).image(source); // <-----------

// export const useCurrentUser = createCurrentUserHook(config);
