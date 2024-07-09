// src/app/features/create/flightlog/ui/organisms/TakeoffLocation/utility/useCurrentLocation.ts
import { useState, useCallback } from 'react';
import { currentLocation } from '../../../../api/currentLocation';
import { GeoLocation, Location } from './types/geoLocationTypes';

export const useCurrentLocation = () => {
  const [prefecture, setPrefecture] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCurrentLocation = useCallback(async (setFieldValue: any) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeoLocation) => {
          const loc = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(loc);
          try {
            const addressData = await currentLocation(loc);
            const address = addressData.address.split(" ");
            const region = address[1];
            setPrefecture(region);
            setFieldValue("takeoffLocation", region);
            setFieldValue("LandingLocation", region);
          } catch (error) {
            setError("Failed to fetch address information.");
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not available");
    }
  }, []);

  return { prefecture, location, error, handleCurrentLocation };
};