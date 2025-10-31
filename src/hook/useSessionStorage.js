import { useCallback, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../config/config'

const useSessionStorage = () => {

  const [accessToken, setAccessToken] = useState(() =>
    sessionStorage.getItem(ACCESS_TOKEN)
  );

  const [refreshToken, setRefreshToken] = useState(() =>
    sessionStorage.getItem(REFRESH_TOKEN)
  );

  // Cria uma cópia da função da memória
  const gravarToken = useCallback((accessToken, refreshToken) => {
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
  }, []);

  return { gravarToken, accessToken }
}

export default useSessionStorage;