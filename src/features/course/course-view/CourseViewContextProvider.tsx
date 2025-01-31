import { createContext, useMemo, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';


interface CourseViewContextValueType {
    selectedId: string | null;
}

interface CourseViewContextActionType {
    setSelectedId: Dispatch<SetStateAction<string | null>>;
}

export const CourseViewContextValue = createContext<CourseViewContextValueType>(
    {} as CourseViewContextValueType,
);
export const CourseViewContextAction =
    createContext<CourseViewContextActionType>(
        {} as CourseViewContextActionType,
    );

const CourseViewContextProvider = ({ children }: PropsWithChildren) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const value = useMemo(
        () => ({
            selectedId,
        }),
        [selectedId],
    );

    const action = useMemo(
        () => ({
            setSelectedId,
        }),
        [],
    );

    return (
        <CourseViewContextValue.Provider value={value}>
            <CourseViewContextAction.Provider value={action}>
                {children}
            </CourseViewContextAction.Provider>
        </CourseViewContextValue.Provider>
    );
};

export default CourseViewContextProvider;