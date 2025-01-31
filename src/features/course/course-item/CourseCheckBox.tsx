import { useContext } from 'react';

import {
    CourseViewContextAction,
    CourseViewContextValue,
} from '@/features/course/course-view/CourseViewContextProvider';

import * as styles from './CourseCheckBox.css';

interface PropsType {
    id: string;
    order: number;
    isHover: boolean;
}

const CourseCheckBox = ({ id, order, isHover }: PropsType) => {
    const { selectedId } = useContext(CourseViewContextValue);
    const { setSelectedId } = useContext(CourseViewContextAction);

    const isChecked = selectedId === id;

    const handleClickCheckBox = () => {
        if (isHover) setSelectedId(isChecked ? null : id);
    };

    const isShowOrder = !isChecked && !isHover;

    return (
        <svg
            width={26}
            height={26}
            className={styles.orderBox}
            onClick={handleClickCheckBox}
        >
            <rect x={1} y={1} className={styles.orderRect} rx={4} />
            {isShowOrder && (
                <text x="50%" y="50%" className={styles.orderText}>
                    {order}
                </text>
            )}
            {isChecked && (
                <path
                    transform="translate(4 4)"
                    className={styles.checkIcon}
                    d="M2.49828 7.97308C2.80617 7.69599 3.28038 7.72095 3.55748 8.02883L7.02865 11.8857L14.4697 4.44467C14.7626 4.15178 15.2374 4.15178 15.5303 4.44467C15.8232 4.73756 15.8232 5.21244 15.5303 5.50533L7.53034 13.5053C7.38485 13.6508 7.18597 13.7301 6.98029 13.7247C6.77461 13.7193 6.58018 13.6297 6.44254 13.4767L2.44254 9.03228C2.16544 8.72439 2.1904 8.25018 2.49828 7.97308Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    );
};

export default CourseCheckBox;
