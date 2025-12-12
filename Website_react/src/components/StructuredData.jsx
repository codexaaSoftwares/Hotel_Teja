/**
 * StructuredData Component
 * Adds JSON-LD structured data for SEO (Schema.org)
 * Includes Hotel, Restaurant, and LocalBusiness schemas
 */

const StructuredData = () => {
  const baseUrl = 'https://www.hotelteja.in'
  
  // Hotel Schema
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Teja Hotel & Restaurant",
    "alternateName": "Teja Hotel Lunawada, Best Hotel in Lunawada, Best Hotel in Mahisagar",
    "description": "Best hotel in Lunawada and Mahisagar, Gujarat. Teja Hotel & Restaurant offers comfortable rooms, authentic Punjabi food, Gujarati cuisine, and event hall facilities. Perfect birthday party hall and banquet venue near Godhra-Lunawada highway.",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/images/logo.png`,
    "image": [
      `${baseUrl}/assets/images/banquet hall.jpg`,
      `${baseUrl}/assets/images/J_J_5849.JPG`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GJ SH 175, Modasa - Godhra Hwy, Jesingpur",
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
    "telephone": "+91-9104009138",
    "email": "tejahotel11@gmail.com",
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
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lunawada"
      },
      {
        "@type": "City",
        "name": "Mahisagar"
      },
      {
        "@type": "City",
        "name": "Godhra"
      },
      {
        "@type": "City",
        "name": "Modasa"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      }
    ],
    "hasMap": "https://www.google.com/maps?q=23.1284,73.6107"
  }

  // Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Teja Restaurant",
    "alternateName": "Teja Restaurant Lunawada, Best Punjabi Food Lunawada",
    "description": "Best restaurant in Lunawada and Mahisagar serving authentic Punjabi food, Gujarati cuisine, Chinese dishes, and South Indian food. Experience traditional Punjabi flavors in Lunawada, Gujarat.",
    "url": `${baseUrl}/#menu`,
    "image": `${baseUrl}/assets/images/OUR CUISINES.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GJ SH 175, Modasa - Godhra Hwy, Jesingpur",
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
    "telephone": "+91-9104009138",
    "email": "tejahotel11@gmail.com",
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
    "acceptsReservations": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lunawada"
      },
      {
        "@type": "City",
        "name": "Mahisagar"
      },
      {
        "@type": "City",
        "name": "Godhra"
      },
      {
        "@type": "City",
        "name": "Modasa"
      }
    ],
    "hasMap": "https://www.google.com/maps?q=23.1284,73.6107"
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Teja Hotel & Restaurant",
    "alternateName": "Teja Hotel Lunawada, Teja Restaurant Lunawada, Best Hotel in Lunawada, Best Hotel in Mahisagar, Event Hall Lunawada, Birthday Party Hall Lunawada",
    "description": "Best hotel in Lunawada and Mahisagar, Gujarat. Family-friendly hotel and restaurant offering comfortable rooms, authentic Punjabi food, event hall, and birthday party hall facilities. Perfect venue for events in Lunawada.",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/images/logo.png`,
    "image": `${baseUrl}/assets/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GJ SH 175, Modasa - Godhra Hwy, Jesingpur",
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
    "telephone": "+91-9104009138",
    "email": "tejahotel11@gmail.com",
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
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Lunawada"
      },
      {
        "@type": "City",
        "name": "Mahisagar"
      },
      {
        "@type": "City",
        "name": "Godhra"
      },
      {
        "@type": "City",
        "name": "Modasa"
      },
      {
        "@type": "City",
        "name": "Santrampur"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      }
    ],
    "hasMap": "https://www.google.com/maps?q=23.1284,73.6107",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Teja Hotel located in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant is located in Lunawada, Mahisagar district, Gujarat, on GJ SH 175, Modasa - Godhra Highway, near Jesingpur. The exact address is GJ SH 175, Modasa - Godhra Hwy, Jesingpur, Lunawada, Gujarat 389230."
        }
      },
      {
        "@type": "Question",
        "name": "What types of rooms are available at Teja Hotel Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel offers Deluxe Rooms, Family Rooms, and Standard AC Rooms with modern amenities including free WiFi, AC, TV, and room service."
        }
      },
      {
        "@type": "Question",
        "name": "What cuisines are served at Teja Restaurant in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Restaurant serves authentic Gujarati, Punjabi, Chinese, and South Indian cuisine. We are the best restaurant in Lunawada, Mahisagar for traditional Gujarati food."
        }
      },
      {
        "@type": "Question",
        "name": "Does Teja Hotel have banquet facilities in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Teja Hotel offers banquet halls for birthday parties, ring ceremonies, and corporate meetings in Lunawada, Mahisagar."
        }
      },
      {
        "@type": "Question",
        "name": "What are the nearby areas to Teja Hotel Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel is conveniently located near Godhra, Modasa, and Santrampur. We serve customers from Lunawada, Mahisagar district, and surrounding areas in Gujarat."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best hotel near Godhra-Lunawada highway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant is the best hotel near Godhra-Lunawada highway, offering comfortable rooms, authentic cuisine, and excellent service in Lunawada, Mahisagar."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best hotel in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant is the best hotel in Lunawada, Mahisagar, offering comfortable rooms, authentic Punjabi food, event hall, and birthday party facilities."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best hotel in Mahisagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant is the best hotel in Mahisagar district, located in Lunawada. We offer comfortable rooms, authentic Punjabi food, and excellent service."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find the best Punjabi food in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Restaurant in Lunawada serves the best authentic Punjabi food in Mahisagar. We offer traditional Punjabi dishes including Punjabi Fixed Thali, Paneer Butter Masala, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best event hall in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel offers the best event hall in Lunawada, Mahisagar. Our banquet facilities are perfect for corporate meetings, celebrations, and special events."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I book a birthday party hall in Lunawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teja Hotel & Restaurant provides the best birthday party hall in Lunawada, Mahisagar. Our banquet hall is perfect for birthday parties, ring ceremonies, and family celebrations."
        }
      }
    ]
  }

  // EventVenue Schema for Event Hall and Birthday Party Hall
  const eventVenueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Teja Hotel Event Hall & Birthday Party Venue",
    "alternateName": "Event Hall Lunawada, Birthday Party Hall Lunawada, Banquet Hall Lunawada",
    "description": "Best event hall and birthday party hall in Lunawada, Mahisagar. Teja Hotel offers spacious banquet facilities for birthday parties, ring ceremonies, corporate meetings, and special events.",
    "url": `${baseUrl}/#events`,
    "image": `${baseUrl}/assets/images/banquet hall.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GJ SH 175, Modasa - Godhra Hwy, Jesingpur",
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
    "telephone": "+91-9104009138",
    "email": "tejahotel11@gmail.com",
    "eventTypes": [
      "Birthday Party",
      "Ring Ceremony",
      "Corporate Meeting",
      "Family Celebration",
      "Wedding Reception",
      "Anniversary"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sound System",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Catering Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Lunawada"
      },
      {
        "@type": "City",
        "name": "Mahisagar"
      },
      {
        "@type": "City",
        "name": "Godhra"
      },
      {
        "@type": "City",
        "name": "Modasa"
      }
    ],
    "hasMap": "https://www.google.com/maps?q=23.1284,73.6107"
  }

  // BreadcrumbList Schema for better navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Restaurant",
        "item": `${baseUrl}/#cuisines`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Rooms",
        "item": `${baseUrl}/#rooms`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Menu",
        "item": `${baseUrl}/#menu`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Events",
        "item": `${baseUrl}/#events`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Gallery",
        "item": `${baseUrl}/#gallery`
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
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(eventVenueSchema)}
      </script>
    </>
  )
}

export default StructuredData

