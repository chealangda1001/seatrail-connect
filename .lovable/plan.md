## Plan

Replace the `gtfsImage` PNG with an inline SVG illustration in `SaaSSection.tsx` that depicts how a bus operator's routes and ticket bookings appear on Google Maps via GTFS.

### The SVG illustration will include:

- A **Google Maps-style base** with a **Blue**: #2EBAE2 / #18A1CF  map background, road grid lines, and subtle terrain
- **Bus route polylines** — **Orange**: #EC5D24 colored paths (e.g., teal and coral) showing intercity routes with curves
- **Stop markers** — Google Maps-style pin markers at key stops (e.g., 3-4 stops along each route)
- **A bus icon** on one of the routes to indicate active service
- **A Google Maps-style info card/popup** floating over a stop showing a sample booking listing: operator name, departure time, price, and a "Book" button — representing how GTFS data powers discoverability and booking on Google Maps
- **A small GTFS data badge** in the corner (a subtle "GTFS" label with a feed icon)

### File changes:

- `**src/components/SaaSSection.tsx**` — Remove `gtfsImage` import; replace the `<img>` block (lines 36-47) with an inline SVG component built directly in the file
- `**src/assets/gtfs_by_google.png**` — Can be deleted (no longer referenced)