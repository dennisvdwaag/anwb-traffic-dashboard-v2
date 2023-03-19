interface LatLonLoc {
    lat: number
    lon: number
}

export interface Bounds {
    southWest: LatLonLoc
    northEast: LatLonLoc
}

interface Event {
    alertC: number
    text: string
    distance?: number
}

export interface Roadwork {
    id: number
    road: string
    segmentId: number
    codeDirection: number
    type: string
    afrc: number
    category: string
    incidentType: string
    from: string
    fromLoc: LatLonLoc
    to: string
    toLoc: LatLonLoc
    polyline: string
    bounds: Bounds
    events: Event[]
    start: Date
    stop: Date
    reason: string
}

export interface Jam {
    id: number
    road: string
    segmentId: number
    codeDirection: number
    type: string
    afrc: number
    category: string
    incidentType: string
    from: string
    fromLoc: LatLonLoc
    to: string
    toLoc: LatLonLoc
    polyline: string
    bounds: Bounds
    events: Event[]
    distance: number
    delay: number
    start: Date
}

interface Segment {
    start: string
    end: string
    jams?: Jam[]
    roadworks?: Roadwork[]
}

interface TotalInputs {
    distance: number
    delay: number
    count: number
}

interface Totals {
    a: TotalInputs
    n: TotalInputs
    other: TotalInputs
    all: TotalInputs
}

export interface Road {
    road: string
    type: string
    segments: Segment[]
    totals: Totals
    warnings: string[]
}

export interface Incidents {
    _uploaded_at: Date
    success: boolean
    copyright: string
    dateTime: Date
    roads: Road[]
}
