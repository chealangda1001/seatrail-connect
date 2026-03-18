

## Plan

### 1. Merge GTFS message into the subtitle paragraph (lines 26-29)
Update the `<p>` text to incorporate the GTFS/open-standards message. Something like:
> "We provide transport operators with the digital tools they need to sell more tickets, manage operations efficiently, and reach new customers — built on the General Transit Feed Specification (GTFS), an open transit data standard by Google, to structure and distribute routes, schedules, and services across the platform."

### 2. Replace the dashboard mock-up with a GTFS map illustration (lines 33-58)
Remove the current operator-dashboard wireframe. Replace it with an SVG/CSS illustration inspired by the uploaded GTFS-RT image — an isometric-style or flat map visualization showing:
- A teal/dark green map surface
- Bus route lines (green and coral/red paths) with curves
- Map pin markers at stops
- Small bus icons along the routes
- A small data badge (e.g., a bar chart or signal icon)

This will be built purely with CSS/SVG inline in the component — no external image needed. Copy the uploaded `gtfs_by_google.png` to `src/assets/` and use it as the illustration image instead of building custom SVG.

### 3. Remove the GTFS callout block (lines 75-90)
Delete the separate "Built on open standards" card at the bottom since its content is now merged into the subtitle.

### Files changed
- `src/components/SaaSSection.tsx` — all changes above
- Copy `user-uploads://gtfs_by_google.png` → `src/assets/gtfs_by_google.png`

