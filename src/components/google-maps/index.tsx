"use client"

import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Props = {
    width: number,
    height: number
}

const center = {
    lat: 51.59086,
    lng: -0.04127
}

const Map: React.FC<Props> = ({ width, height }) => {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <GoogleMap mapContainerStyle={{ width, height }} center={center} zoom={15} >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map