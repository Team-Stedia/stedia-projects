"use client"

import { useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export type MapBranch = {
  name: string
  address: string
  lat: number
  lng: number
}

export type MapLayer = "streets" | "satellite"

const TILES: Record<MapLayer, { url: string; attribution: string }> = {
  streets: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors",
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics",
  },
}

function pin(active: boolean) {
  const color = active ? "#1d4ed8" : "#64748b"
  return L.divIcon({
    className: "stedia-map-pin",
    html: `<span style="display:block;width:26px;height:26px;border-radius:9999px;background:${color};border:3px solid #ffffff;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  })
}

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (target) map.flyTo(target, 13, { duration: 1.2 })
  }, [target, map])
  return null
}

type MapCanvasProps = {
  branches: readonly MapBranch[]
  selected: number | null
  followMe: boolean
  layer: MapLayer
  userPos: [number, number] | null
  onSelect: (index: number) => void
}

export function MapCanvas({ branches, selected, followMe, layer, userPos, onSelect }: MapCanvasProps) {
  const tiles = TILES[layer]
  const branch = selected !== null ? branches[selected] : undefined
  const target: [number, number] | null =
    followMe && userPos ? userPos : branch ? [branch.lat, branch.lng] : null

  return (
    <MapContainer
      center={[15.8, 101.5]}
      zoom={6}
      scrollWheelZoom={false}
      className="z-0 h-72 w-full sm:h-80"
    >
      <TileLayer url={tiles.url} attribution={tiles.attribution} />
      <FlyTo target={target} />
      {branches.map((item, i) => (
        <Marker
          key={item.name}
          position={[item.lat, item.lng]}
          icon={pin(i === selected)}
          eventHandlers={{ click: () => onSelect(i) }}
        >
          <Popup>
            <strong>{item.name}</strong>
            <br />
            {item.address}
          </Popup>
        </Marker>
      ))}
      {userPos && (
        <Marker position={userPos} icon={pin(true)}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}
