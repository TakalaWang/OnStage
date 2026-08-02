export function googleMapsSearchUrl(venue: string, city: string | null | undefined): string {
	const query = [venue, city, '台灣'].filter(Boolean).join(' ');
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
