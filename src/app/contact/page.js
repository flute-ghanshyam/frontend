"use client";

import Layout from "../components/Layout";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 26.89702, // Approximate coordinates for Vidyut Nagar, Jaipur
  lng: 75.752569,
};

export default function Contact() {
  return (
    <Layout>
      <section style={{ padding: "2rem" }}>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Address:</span> A-63 Vidyut Nagar,
              Jaipur
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Phone:</span> +91-9785520211
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Email:</span>{" "}
              dev003201funmaxgame@gmail.com
            </p>
          </div>
          <div className="w-full max-w-4xl mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Location
            </h2>
            <LoadScript googleMapsApiKey="AIzaSyBJmeMpRqFkqJ1L87Ic-EuvcNP7UDKj4aQ">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
              >
                <Marker position={center} title="A-63 Vidyut Nagar, Jaipur" />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
    </Layout>
  );
}
