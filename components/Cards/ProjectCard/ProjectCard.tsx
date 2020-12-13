import React from 'react';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

interface IProjectCard {
    imageSrc: string;
    imgAlt: string;
    cardTitle: string;
    cardDescription: string;
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
    const { imageSrc, imgAlt, cardTitle, cardDescription } = props;
    return (
        <article className={styles.container}>
            <Image 
                src={imageSrc}
                alt={imgAlt}
                width={264}
                height={264}
            />
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{cardTitle}</h3>
                <p className={styles.cardDescription}>{cardDescription}</p>
            </div>
        </article>
    )
};

export default ProjectCard;
