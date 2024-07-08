import { useCallback, useState } from "react";
import { currentLocation } from "../../../../api/currentLocation";
import { GeoLocation, Location } from './types/geoLocationTypes';

const [prefecture, setPrefecture] = useState<string | null>(null);
const [location, setLocation] = useState<Location | null>(null);
const [error, setError] = useState<string | null>(null);

export const handleCurrentLocation = useCallback(async (setFieldValue: any) => {
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
          // 都道府県以降の住所を取得する
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