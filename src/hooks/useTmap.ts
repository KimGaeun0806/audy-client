import { useEffect, useRef } from 'react';

import { TMapModule, type TmapConstructorType } from '@/utils/tmap';

export const useTmap = ({
    mapId = 'tmap',
    width = 640,
    height = 480,
    zoom = 10,
    lat,
    lng,
}: TmapConstructorType) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const tmapModuleRef = useRef<TMapModule | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        mapContainerRef.current.id = mapId;

        tmapModuleRef.current = new TMapModule({
            mapId,
            width,
            height,
            zoom,
            lat,
            lng,
        });
    }, [height, lat, lng, mapId, width, zoom]);

    return { mapContainerRef, tmapModuleRef };
};
