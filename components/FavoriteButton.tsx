import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorite from "@/hooks/useFavorite";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
  return <div>favorite</div>;
};

export default FavoriteButton;
