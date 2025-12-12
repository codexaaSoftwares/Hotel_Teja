/**
 * StructuredData Component
 * Adds JSON-LD structured data for SEO (Schema.org)
 * Includes Hotel, Restaurant, and LocalBusiness schemas
 */

const StructuredData = () => {
  const baseUrl = 'https://YOUR_DOMAIN_HERE'
  
  // Hotel Schema
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Teja Hotel & Restaurant",
    "description": "Teja Hotel & Restaurant in Lunawada, Mahisagar, Gujarat - Best hotel near Godhra-Lunawada highway. Experience authentic Gujarati, Punjabi, Chinese & South Indian cuisine.",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/images/logo.png`,
    "image": [
      `${baseUrl}/assets/images/banquet hall.jpg`,
      `${baseUrl}/assets/images/J_J_5849.JPG`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Godhra-Lunawada Highway",
      "addressLocality": "Lunawada",
      "addressRegion": "Mahisagar",
      "addressCountry": "IN",
      "postalCode": "389230"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.1284",
      "longitude": "73.6107"
    },
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone number
    "priceRange": "₹₹",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Room Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Banquet Hall",
        "value": true
      }
    ],
    "numberOfRooms": {
      "@type": "QuantitativeValue",
      "value": "Multiple"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3"
    }
  }

  // Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Teja Restaurant",
    "description": "Authentic Gujarati, Punjabi, Chinese, and South Indian cuisine in Lunawada, Mahisagar, Gujarat.",
    "url": `${baseUrl}/#menu`,
    "image": `${baseUrl}/assets/images/OUR CUISINES.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Godhra-Lunawada Highway",
      "addressLocality": "Lunawada",
      "addressRegion": "Mahisagar",
      "addressCountry": "IN",
      "postalCode": "389230"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.1284",
      "longitude": "73.6107"
    },
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone number
    "priceRange": "₹₹",
    "servesCuisine": [
      "Gujarati",
      "Punjabi",
      "Chinese",
      "South Indian",
      "North Indian"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "acceptsReservations": true
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Teja Hotel & Restaurant",
    "description": "Family-friendly hotel and restaurant in Lunawada, Mahisagar, Gujarat offering comfortable rooms, authentic cuisine, and banquet facilities.",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/images/logo.png`,
    "image": `${baseUrl}/assets/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Godhra-Lunawada Highway",
      "addressLocality": "Lunawada",
      "addressRegion": "Mahisagar",
      "addressCountry": "IN",
      "postalCode": "389230"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.1284",
      "longitude": "73.6107"
    },
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone number
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  }

  // FAQ Schema (if needed)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Teja Hotel located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant is located in Lunawada, Mahisagar district, Gujarat, near the Godhra-Lunawada highway."
        }
      },
      {
        "@type": "Question",
        "name": "What types of rooms are available at Teja Hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel offers Deluxe Rooms, Family Rooms, and Standard AC Rooms with modern amenities."
        }
      },
      {
        "@type": "Question",
        "name": "What cuisines are served at Teja Restaurant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Restaurant serves authentic Gujarati, Punjabi, Chinese, and South Indian cuisine."
        }
      },
      {
        "@type": "Question",
        "name": "Does Teja Hotel have banquet facilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Teja Hotel offers banquet halls for birthday parties, ring ceremonies, and corporate meetings."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(hotelSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </>
  )
}

export default StructuredData

